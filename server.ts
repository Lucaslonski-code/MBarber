/**
 * M Barber - Server Application
 * Express-based production server with security headers,
 * in-memory rate limiting and production static file serving.
 */

import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security Headers Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );
  next();
});

// JSON Body Parser with size limit
app.use(express.json({ limit: "50kb" }));

// In-Memory Rate Limiting Helper for Endpoints
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 30;

function rateLimiter(req: Request, res: Response, next: NextFunction) {
  const clientIp = req.ip || req.socket.remoteAddress || "anonymous";
  const now = Date.now();
  const record = rateLimitMap.get(clientIp);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return next();
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    res.setHeader("Retry-After", retryAfter);
    return res.status(429).json({
      error: "Muitas requisições. Por favor, aguarde alguns instantes.",
      retryAfterSeconds: retryAfter,
    });
  }

  record.count += 1;
  next();
}

// Health check endpoint with rate limiting
app.get("/api/health", rateLimiter, (req: Request, res: Response) => {
  res.json({
    status: "ok",
    app: "M Barber",
    location: "Colombo, PR",
    time: new Date().toISOString(),
  });
});

// Static assets serving from dist directory
const distPath = path.resolve(__dirname, "dist");
app.use(express.static(distPath));

// Fallback SPA routing
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(distPath, "index.html"), (err) => {
    if (err) {
      res.status(500).send("Application is starting up or building. Please wait.");
    }
  });
});

// Centralized error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("[Server Error]", err.message);
  res.status(500).json({ error: "Erro interno no servidor." });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`[M Barber Server] Running on http://0.0.0.0:${PORT}`);
  });
}

export default app;
