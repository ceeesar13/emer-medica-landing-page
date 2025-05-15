import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:8080', 'https://siempremermedica.com'],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Lead endpoint
app.post('/api/lead', async (req, res) => {
  try {
    const n8nWebhookUrl = process.env.VITE_N8N_WEBHOOK_URL;
    
    if (!n8nWebhookUrl) {
      console.error('N8N webhook URL not configured');
      throw new Error('N8N webhook URL not configured');
    }

    console.log('Forwarding request to n8n:', {
      url: n8nWebhookUrl,
      body: req.body
    });

    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from n8n:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      throw new Error('Error forwarding to n8n');
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Error processing lead:', error);
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Internal server error'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`N8N Webhook URL: ${process.env.VITE_N8N_WEBHOOK_URL ? 'Configured' : 'Not configured'}`);
}); 