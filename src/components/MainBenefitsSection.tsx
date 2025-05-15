import React from 'react';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  Video,
  Ambulance,
  Hospital,
  Users,
  Store,
  Clock,
  Shield,
  Heart,
  Phone
} from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

const benefits: Benefit[] = [
  {
    icon: <Stethoscope className="w-8 h-8 text-[#28a745]" />,
    title: "Consulta Médica Domiciliaria",
    description: "Atención médica profesional en la comodidad de tu hogar, 24/7",
    highlight: true
  },
  {
    icon: <Video className="w-8 h-8 text-[#28a745]" />,
    title: "Atención por Telemedicina",
    description: "Consultas virtuales inmediatas con especialistas certificados",
    highlight: true
  },
  {
    icon: <Ambulance className="w-8 h-8 text-[#28a745]" />,
    title: "Urgencias y Emergencias",
    description: "Atención inmediata para situaciones de emergencia",
    highlight: true
  },
  {
    icon: <Hospital className="w-8 h-8 text-[#28a745]" />,
    title: "Traslados Asistidos",
    description: "Traslado seguro a centros hospitalarios cuando sea necesario",
    highlight: true
  },
  {
    icon: <Users className="w-8 h-8 text-[#28a745]" />,
    title: "Red de Especialistas",
    description: "Acceso a más de 600 especialistas con tarifa preferencial",
    highlight: true
  },
  {
    icon: <Store className="w-8 h-8 text-[#28a745]" />,
    title: "Descuentos en Aliados",
    description: "Beneficios exclusivos en más de 230 establecimientos",
    highlight: true
  }
];

const additionalBenefits: Benefit[] = [
  {
    icon: <Clock className="w-6 h-6 text-[#003366]" />,
    title: "Atención 24/7",
    description: "Servicio disponible todos los días del año"
  },
  {
    icon: <Shield className="w-6 h-6 text-[#003366]" />,
    title: "Sin Preexistencias",
    description: "Cobertura inmediata sin restricciones"
  },
  {
    icon: <Heart className="w-6 h-6 text-[#003366]" />,
    title: "Sin Límite de Edad",
    description: "Atención para toda la familia"
  },
  {
    icon: <Phone className="w-6 h-6 text-[#003366]" />,
    title: "Asistencia Telefónica",
    description: "Orientación médica inmediata"
  }
];

const MainBenefitsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#003366] mb-4"
          >
            Beneficios del Plan Integral
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Accede a una red completa de servicios médicos diseñados para cuidar de ti y tu familia
          </motion.p>
        </div>

        {/* Beneficios principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#003366]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#003366] mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Beneficios adicionales */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-[#003366] mb-6 text-center">
            Beneficios Adicionales
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                <div>
                  <h4 className="font-semibold text-[#003366] mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBenefitsSection; 