import { Request, Response, NextFunction } from 'express';

export const validateSecretKey = (req: Request, res: Response, next: NextFunction) => {
  const secretKey = process.env.N8N_SECRET_KEY;
  
  if (!secretKey) {
    console.error('N8N_SECRET_KEY no está configurada en las variables de entorno');
    return res.status(500).json({
      success: false,
      message: 'Error de configuración del servidor'
    });
  }

  const providedKey = req.headers['x-secret-key'];

  if (!providedKey || providedKey !== secretKey) {
    return res.status(401).json({
      success: false,
      message: 'No autorizado'
    });
  }

  next();
}; 