import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route Stubs
  app.post("/api/orders", (req, res) => {
    res.json({ message: "Order creation stub", success: true });
  });

  app.post("/api/payments/initiate", (req, res) => {
    res.json({ status: "success", authorization_url: "https://paystack.com/..." });
  });

  app.post("/api/webhooks/paystack", (req, res) => {
    // Paystack Webhook Handler
    res.sendStatus(200);
  });

  app.get("/api/products", (req, res) => {
    const { tag } = req.query;
    // Mock response
    res.json([]);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SolarOne running on http://localhost:${PORT}`);
  });
}

startServer();
