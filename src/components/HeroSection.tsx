import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Users, Shield, Clock, Heart } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo optimizada */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1745864458/banner_eczayj.png"
          alt="Emermédica - Atención médica inmediata"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          {...{ 'data-fetchpriority': 'high' }}
        />
      </div>

      {/* Overlay con gradiente para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/85 to-white/80"></div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center min-h-screen py-16 md:py-20">
          {/* Logo con animación */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <Logo className="w-56 md:w-64 lg:w-72" />
          </motion.div>

          {/* Social Proof Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#003366]/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8 flex items-center gap-2 max-w-md mx-auto"
          >
            <Users className="w-5 h-5 text-[#003366] flex-shrink-0" />
            <span className="text-[#003366] font-medium text-sm md:text-base">
              Más de <span className="font-bold">260.000</span> colombianos confían en nosotros
            </span>
          </motion.div>

          {/* Título principal con animación */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#003366] leading-tight mb-4 max-w-4xl"
          >
            Atención Médica <span className="text-[#28a745]">Inmediata</span> en Casa y Online, 24/7
          </motion.h1>

          {/* Subtítulo con animación */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed mb-6 md:mb-8 max-w-3xl"
          >
            Parte de <span className="font-semibold">AXA COLPATRIA</span>, el grupo de seguros más importante del mundo
          </motion.p>

          {/* Beneficios clave */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12 w-full max-w-4xl"
          >
            {[
              { 
                icon: <Shield className="w-8 h-8 text-[#28a745]" />, 
                text: "Sin preexistencias",
                description: "Cobertura inmediata sin restricciones"
              },
              { 
                icon: <Heart className="w-8 h-8 text-[#003366]" />, 
                text: "Sin límite de edad",
                description: "Atención para toda la familia"
              },
              { 
                icon: <Star className="w-8 h-8 text-[#ffc107]" />, 
                text: "Sin costo de inscripción",
                description: "Afíliate sin pagos adicionales"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-[#003366]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-3">{benefit.icon}</div>
                <p className="text-[#003366] font-bold text-lg mb-1">{benefit.text}</p>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Botones con animación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-2xl"
          >
            <Button 
              onClick={scrollToForm}
              className="bg-[#28a745] hover:bg-[#28a745]/90 text-white font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#28a745]/60 focus:ring-offset-2 w-full md:w-auto"
            >
              SOLICITAR ASESORÍA GRATUITA
            </Button>

            <Button
              asChild
              className="bg-[#003366] hover:bg-[#003366]/90 text-white font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#003366]/60 focus:ring-offset-2 w-full md:w-auto"
            >
              <a
                href="https://wa.link/bu57jm"
                target="_blank"
                rel="noopener noreferrer"
              >
                CONOCE MÁS DE NUESTROS PLANES
              </a>
            </Button>
          </motion.div>

          {/* Garantía de confianza */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 md:mt-10 text-sm text-gray-600 flex flex-col md:flex-row items-center gap-2 md:gap-4"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#003366]" />
              <span>33 años de experiencia en Colombia</span>
            </div>
            <div className="hidden md:block text-gray-400">•</div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#003366]" />
              <span>+490.000 atenciones médicas anuales</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
