import { FormData } from '@/types/form';

interface LeadFormSubmission extends FormData {
  captchaToken: string | null;
}

export const submitLeadForm = async (data: LeadFormSubmission): Promise<Response> => {
  const response = await fetch('/api/lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Error en el servidor' }));
    throw new Error(error.message || 'Error al enviar el formulario');
  }

  return response;
}; 