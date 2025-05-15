import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Clock, Users, MapPin, Star } from 'lucide-react';

const stats = [
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    value: "33+",
    label: "Años de experiencia en Colombia",
    description: "Parte de AXA COLPATRIA, el grupo de seguros más importante del mundo"
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    value: "260K+",
    label: "Afiliados activos",
    description: "Familias que confían en nuestro servicio"
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    value: "490K+",
    label: "Atenciones médicas anuales",
    description: "Servicio de calidad garantizada"
  },
  {
    icon: <MapPin className="w-8 h-8 text-white" />,
    value: "3",
    label: "Ciudades líderes",
    description: "Bogotá, Villavicencio y Neiva"
  }
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#003366] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Título de la sección */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            ¿Por Qué Elegir Emermédica?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/90 max-w-3xl mx-auto"
          >
            Más de tres décadas brindando la mejor atención médica a las familias colombianas
          </motion.p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <p className="text-white/80 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <Image
              src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1745938565/beneficcs2_desrxw.png"
              alt="Equipo médico de Emermédica"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Texto y características */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h3 className="text-2xl font-bold mb-6">
              La Mejor Atención Médica para Ti y Tu Familia
            </h3>
            
            <div className="space-y-4">
              {[
                "Equipo médico altamente calificado y certificado",
                "Tecnología de punta para diagnóstico y atención",
                "Red de especialistas y centros médicos de primer nivel",
                "Atención personalizada y humana",
                "Cobertura nacional e internacional"
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-[#28a745] flex-shrink-0 mt-1" />
                  <p className="text-white/90">{feature}</p>
                </div>
              ))}
            </div>

            {/* Logo AXA */}
            <div className="mt-8 p-4 bg-white/10 rounded-xl inline-flex items-center">
              <div className="relative h-8 w-32">
                <Image
                  src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1745864458/axa-logo.png"
                  alt="AXA Colpatria"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
              <span className="ml-3 text-sm text-white/90">
                Parte del grupo de seguros más importante del mundo
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 