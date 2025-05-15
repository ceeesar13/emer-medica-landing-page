import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: "Cobertura Nacional",
    description: "Presencia en las principales ciudades de Colombia con atención inmediata."
  },
  {
    title: "Respaldo AXA Colpatria",
    description: "El respaldo de una de las aseguradoras más importantes del país."
  },
  {
    title: "33+ Años de Experiencia",
    description: "Más de tres décadas cuidando la salud de los colombianos."
  },
  {
    title: "Sin Preexistencias",
    description: "No importa tu condición médica, te cubrimos desde el primer día."
  },
  {
    title: "Sin Límite de Edad",
    description: "Cobertura para toda la familia, sin importar la edad."
  },
  {
    title: "Atención 24/7",
    description: "Servicio médico disponible las 24 horas, los 365 días del año."
  }
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#003366] mb-6">
              ¿Por qué elegir Emermédica?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Somos líderes en atención médica domiciliaria y emergencias en Colombia, 
              ofreciendo soluciones integrales para el cuidado de tu salud.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#28a745]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#003366] mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Imagen o ilustración */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1747266286/beneficcs2_1_k7wjcp.png"
                alt="Equipo médico profesional de Emermédica brindando atención médica de calidad"
                width="600"
                height="600"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#28a745]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#003366]/10 rounded-full blur-2xl"></div>
            
            {/* Tarjeta flotante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-[#003366]/10"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#28a745]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#003366]">260K+</div>
                  <p className="text-gray-600 text-sm">Afiliados activos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
