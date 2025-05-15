import { Request, Response } from 'express';
import { LeadFormData, LeadResponse } from '../types/lead';

export const submitLead = async (req: Request, res: Response) => {
  try {
    const n8nWebhookUrl = process.env.VITE_N8N_WEBHOOK_URL;
    
    if (!n8nWebhookUrl) {
      throw new Error('N8N webhook URL not configured');
    }

    const formData = req.body as LeadFormData;

    // Forward to n8n with secret key
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': process.env.N8N_SECRET_KEY || '',
      },
      body: JSON.stringify(formData),
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

    const responseData: LeadResponse = {
      success: true
    };

    res.json(responseData);
  } catch (error) {
    console.error('Error processing lead:', error);
    
    const responseData: LeadResponse = {
      success: false,
      message: error instanceof Error ? error.message : 'Internal server error'
    };

    res.status(500).json(responseData);
  }
}; 