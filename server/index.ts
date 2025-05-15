import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Lead endpoint
app.post('/api/lead', async (req, res) => {
  try {
    const n8nWebhookUrl = process.env.VITE_N8N_WEBHOOK_URL;
    
    if (!n8nWebhookUrl) {
      throw new Error('N8N webhook URL not configured');
    }

    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      console.error('Error from n8n:', {
        status: response.status,
        statusText: response.statusText
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 