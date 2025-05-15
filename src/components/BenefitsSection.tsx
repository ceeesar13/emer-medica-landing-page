import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: "🏥",
    title: "Atención Médica 24/7",
    description: "Acceso a servicios médicos las 24 horas del día, los 7 días de la semana."
  },
  {
    icon: "🚑",
    title: "Ambulancia Dedicada",
    description: "Traslados asistidos con personal médico especializado."
  },
  {
    icon: "👨‍⚕️",
    title: "Médicos Especialistas",
    description: "Red de profesionales médicos altamente calificados."
  },
  {
    icon: "💊",
    title: "Medicamentos",
    description: "Entrega de medicamentos en la puerta de tu casa."
  },
  {
    icon: "📱",
    title: "Telemedicina",
    description: "Consultas médicas virtuales desde la comodidad de tu hogar."
  },
  {
    icon: "🏠",
    title: "Visitas Domiciliarias",
    description: "Atención médica personalizada en tu hogar."
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#003366] mb-4">
            Beneficios de tu Plan Emermédica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accede a una amplia red de servicios médicos diseñados para cuidar de ti y tu familia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#003366]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sección adicional de beneficios especiales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#003366] to-[#003366]/90 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">33+</div>
              <p className="text-white/90">Años de experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">260K+</div>
              <p className="text-white/90">Afiliados activos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">490K+</div>
              <p className="text-white/90">Atenciones anuales</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
