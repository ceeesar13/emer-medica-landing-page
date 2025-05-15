import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButton: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-between items-end px-4 md:px-12 pointer-events-none">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.link/bu57jm"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* CTA Button with Tooltip */}
      <div className="relative flex flex-col items-end pointer-events-auto">
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-3 w-max max-w-[200px] md:max-w-[250px] bg-white text-[#003366] px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-center whitespace-pre-line border border-[#28a745]/20"
          style={{ zIndex: 100 }}
        >
          ¡Afíliate ahora y obtén un 20% de descuento!
        </motion.div>
        <motion.button
          onClick={scrollToForm}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#28a745] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Ir al formulario de afiliación"
        >
          <Phone size={28} />
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingButton;
