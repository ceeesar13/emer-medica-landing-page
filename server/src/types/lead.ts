export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  captchaToken: string | null;
}

export interface LeadResponse {
  success: boolean;
  message?: string;
} 