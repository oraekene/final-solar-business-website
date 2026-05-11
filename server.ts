import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route Stubs
  app.post("/api/orders", (req, res) => {
    try {
      const { items, total } = req.body;
      // Logic for saving order to DB would go here
      console.log(`Order received: ₦${total}`, items);
      res.status(201).json({ 
        message: "Order initiated successfully", 
        orderId: `S1-${Math.random().toString(36).substr(2, 9).toUpperCase()}` 
      });
    } catch (error) {
      res.status(400).json({ error: "Failed to create order" });
    }
  });

  app.post("/api/payments/initiate", (req, res) => {
    const { amount, email, metadata } = req.body;
    
    // In a real implementation:
    // const response = await axios.post('https://api.paystack.co/transaction/initialize', { amount, email, metadata }, { headers });
    
    console.log(`Initiating Paystack for ${email}: ₦${amount}`);
    
    res.json({ 
      status: "success", 
      authorization_url: "https://checkout.paystack.com/0p9q8r7s6t5u4v3w2x1y", // Mock Paystack Checkout
      reference: `REF-${Date.now()}`
    });
  });

  app.post("/api/webhooks/paystack", (req, res) => {
    // Validate Paystack Signature
    // const hash = crypto.createHmac('sha512', process.env.PAYSTACK_SECRET).update(JSON.stringify(req.body)).digest('hex');
    // if (hash !== req.headers['x-paystack-signature']) return res.sendStatus(400);

    const event = req.body;
    console.log('Paystack Webhook Received:', event.event);

    if (event.event === 'charge.success') {
      // Update order status in DB
    }

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
