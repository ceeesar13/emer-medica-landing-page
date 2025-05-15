import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { submitLeadForm } from '@/services/api';
import { FormData } from '@/types/form';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    city: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const colombianCities = [
    'Barranquilla', 'Bogotá DC', 'Bucaramanga', 'Cali',
    'Cartagena', 'Medellín', 'Neiva', 'Villavicencio'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, city: value }));
    if (errors.city) {
      setErrors(prev => ({ ...prev, city: '' }));
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre es requerido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^3\d{9}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Ingresa un número de celular válido (ej: 3012345678)';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.city) {
      newErrors.city = 'La ciudad es obligatoria';
    }

    if (!captchaValue) {
      newErrors.phone = 'Por favor, completa el CAPTCHA';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitLeadForm({
        ...formData,
        captchaToken: captchaValue,
      });

      toast.success('¡Formulario enviado con éxito!', {
        description: 'Nos pondremos en contacto contigo pronto.',
      });
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        city: ''
      });
      setCaptchaValue(null);
    } catch (error) {
      toast.error('Hubo un error al enviar el formulario.', {
        description: error instanceof Error ? error.message : 'Por favor intenta de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="lead-form" 
      className="bg-gradient-to-b from-white to-gray-50 py-20"
      aria-labelledby="form-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 
              id="form-title"
              className="text-4xl font-bold text-[#003366] mb-4"
            >
              Recibe Atención Personalizada
            </h2>
            <p className="text-xl text-gray-700">Déjanos tus datos y un asesor experto te contactará sin compromiso para explicarte nuestros planes y resolver todas tus dudas sobre los servicios de Emermédica.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#003366]/10 relative overflow-hidden">
            {/* Línea decorativa superior */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#28a745] to-[#003366]" aria-hidden="true"></div>

            {/* Elementos decorativos */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#28a745]/5 rounded-full blur-3xl" aria-hidden="true"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#003366]/5 rounded-full blur-3xl" aria-hidden="true"></div>

            <form 
              onSubmit={handleSubmit} 
              className="space-y-6 relative z-10"
              aria-label="Formulario de afiliación"
            >
              {/* Nombre */}
              <div>
                <Label 
                  htmlFor="fullName" 
                  className="text-[#003366] font-medium block mb-2"
                >
                  Nombre completo
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Escribe tu nombre completo"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`h-14 rounded-xl border-2 focus:border-[#28a745] focus:ring-2 focus:ring-[#28a745]/20 focus:outline-none transition-all duration-300 ${
                    errors.fullName ? 'border-red-500' : 'border-gray-200'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <motion.p
                    id="fullName-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm mt-2"
                    role="alert"
                  >
                    {errors.fullName}
                  </motion.p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <Label 
                  htmlFor="phone" 
                  className="text-[#003366] font-medium block mb-2"
                >
                  Teléfono de contacto
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Ej: 3012345678"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`h-14 rounded-xl border-2 focus:border-[#28a745] focus:ring-2 focus:ring-[#28a745]/20 focus:outline-none transition-all duration-300 ${
                    errors.phone ? 'border-red-500' : 'border-gray-200'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <motion.p
                    id="phone-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm mt-2"
                    role="alert"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </div>

              {/* Correo */}
              <div>
                <Label 
                  htmlFor="email" 
                  className="text-[#003366] font-medium block mb-2"
                >
                  Correo electrónico
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`h-14 rounded-xl border-2 focus:border-[#28a745] focus:ring-2 focus:ring-[#28a745]/20 focus:outline-none transition-all duration-300 ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <motion.p
                    id="email-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm mt-2"
                    role="alert"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Ciudad */}
              <div>
                <Label 
                  htmlFor="city" 
                  className="text-[#003366] font-medium block mb-2"
                >
                  Ciudad de residencia
                </Label>
                <Select 
                  value={formData.city} 
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger
                    id="city"
                    className={`h-14 rounded-xl border-2 focus:border-[#28a745] focus:ring-2 focus:ring-[#28a745]/20 focus:outline-none transition-all duration-300 ${
                      errors.city ? 'border-red-500' : 'border-gray-200'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.city}
                    aria-describedby={errors.city ? "city-error" : undefined}
                  >
                    <SelectValue placeholder="Selecciona tu ciudad" />
                  </SelectTrigger>
                  <SelectContent>
                    {colombianCities.map(city => (
                      <SelectItem 
                        key={city} 
                        value={city}
                        className="focus:bg-[#28a745]/10 focus:text-[#003366]"
                      >
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.city && (
                  <motion.p
                    id="city-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm mt-2"
                    role="alert"
                  >
                    {errors.city}
                  </motion.p>
                )}
              </div>

              {/* ReCAPTCHA */}
              <div 
                className="flex justify-center"
                aria-label="Verificación de seguridad"
              >
                <ReCAPTCHA
                  sitekey="6LfGfDorAAAAAIpsb26zrtmW7RSLQickEOihN58C"
                  onChange={handleCaptchaChange}
                  theme="light"
                  size="normal"
                  badge="bottomright"
                  hl="es"
                  asyncScriptOnLoad={() => {
                    console.log('reCAPTCHA cargado correctamente');
                  }}
                />
              </div>

              {/* Botón de envío y seguridad */}
              <div className="space-y-4 mt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 bg-gradient-to-r from-[#28a745] to-[#28a745]/90 hover:from-[#28a745]/90 hover:to-[#28a745] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:ring-2 focus:ring-[#28a745]/20 focus:outline-none"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'QUIERO QUE UN ASESOR ME CONTACTE'}
                </Button>
                <div 
                  className="flex items-center justify-center text-gray-700 text-sm mt-4 text-center"
                  role="contentinfo"
                >
                  <svg 
                    className="w-5 h-5 mr-2 text-[#003366]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                    />
                  </svg>
                  Al enviar este formulario aceptas nuestros términos y condiciones. Tus datos se usarán solo para contactarte sobre Emermédica y no se compartirán con terceros.
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadForm;
