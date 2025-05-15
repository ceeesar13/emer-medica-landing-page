import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, ShieldCheck } from 'lucide-react';

const plans = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "Plan Individual y Familiar",
    description: "Protección integral para ti y los tuyos las 24h. Sin restricciones de edad ni preexistencias.",
    link: "#lead-form"
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "Plan Colectivo",
    description: "La solución ideal para cuidar de tus colaboradores y sus familias. Un excelente incentivo empresarial.",
    link: "#lead-form"
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "Área Protegida",
    description: "Cobertura de urgencias y emergencias para todas las personas dentro de tus instalaciones (empresas, colegios, eventos).",
    link: "#lead-form"
  }
];

const PlansSection: React.FC = () => {
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
            Planes Pensados para Cada Necesidad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde protección individual hasta cobertura para grandes empresas, tenemos un plan para ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#003366]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-[#28a745] mb-6">
                {plan.icon}
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">
                {plan.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {plan.description}
              </p>
              <a 
                href={plan.link}
                className="inline-flex items-center text-[#28a745] font-semibold hover:underline"
              >
                Más Información →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
