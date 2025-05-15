import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const leadFormSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(1, 'El teléfono es requerido'),
  message: z.string().min(1, 'El mensaje es requerido'),
  captchaToken: z.string().nullable(),
});

export const validateLeadForm = (req: Request, res: Response, next: NextFunction) => {
  try {
    leadFormSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: 'Datos de formulario inválidos',
        errors: error.errors,
      });
    }
    return res.status(500).json({ message: 'Error en la validación' });
  }
}; 