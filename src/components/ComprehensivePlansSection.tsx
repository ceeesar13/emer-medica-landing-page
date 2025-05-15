import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Building2, ShieldCheck, 
  Video, Stethoscope, Ambulance, Hospital,
  MonitorSmartphone, Home, HeartPulse, Siren,
  Baby, Apple, Car, School, Heart, Pill,
  Clock, Microscope, FlaskConical, ShoppingBag, Smile
} from 'lucide-react';

// Tipos de planes
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

// Coberturas principales
const coverages = [
  {
    icon: <MonitorSmartphone className="w-12 h-12" />,
    title: "Atención por Telemedicina",
    description: "Consultas médicas virtuales con especialistas desde la comodidad de tu hogar."
  },
  {
    icon: <Home className="w-12 h-12" />,
    title: "Consulta Médica Domiciliaria",
    description: "Médicos calificados te visitan en tu casa u oficina cuando lo necesites."
  },
  {
    icon: <Siren className="w-12 h-12" />,
    title: "Atención de Emergencias y Urgencias",
    description: "Respuesta rápida y efectiva para situaciones críticas de salud, 24/7."
  },
  {
    icon: <Ambulance className="w-12 h-12" />,
    title: "Traslados Asistidos",
    description: "Transporte seguro a centros hospitalarios cuando es médicamente necesario."
  }
];

// Beneficios por edad
const ageGroups = [
  {
    range: "0-4",
    title: "Primera Infancia",
    benefits: [
      {
        icon: <Baby className="w-6 h-6 text-[#28a745]" />,
        title: "Controles pediátricos gratuitos",
        description: "Revisiones periódicas con pediatras especializados"
      },
      {
        icon: <Apple className="w-6 h-6 text-[#003366]" />,
        title: "Orientación nutricional telefónica",
        description: "Asesoría para una alimentación saludable"
      },
      {
        icon: <Car className="w-6 h-6 text-[#ffc107]" />,
        title: "Acompañamiento a citas médicas",
        description: "Apoyo en traslados a consultas especializadas"
      }
    ]
  },
  {
    range: "5-19",
    title: "Niñez y Adolescencia",
    benefits: [
      {
        icon: <School className="w-6 h-6 text-[#28a745]" />,
        title: "Chequeos escolares",
        description: "Evaluaciones médicas para el ingreso escolar"
      },
      {
        icon: <Heart className="w-6 h-6 text-[#003366]" />,
        title: "Desarrollo y crecimiento",
        description: "Seguimiento del desarrollo físico y emocional"
      },
      {
        icon: <Pill className="w-6 h-6 text-[#ffc107]" />,
        title: "Medicamentos preferenciales",
        description: "Descuentos en medicamentos y suplementos"
      }
    ]
  },
  {
    range: "20-34",
    title: "Adultos Jóvenes",
    benefits: [
      {
        icon: <Video className="w-6 h-6 text-[#28a745]" />,
        title: "Telemedicina ilimitada",
        description: "Consultas virtuales sin costo adicional"
      },
      {
        icon: <Microscope className="w-6 h-6 text-[#003366]" />,
        title: "Exámenes preventivos",
        description: "Chequeos anuales con descuentos especiales"
      },
      {
        icon: <Home className="w-6 h-6 text-[#ffc107]" />,
        title: "Atención domiciliaria",
        description: "Servicios médicos en tu hogar o trabajo"
      }
    ]
  },
  {
    range: "35-64",
    title: "Adultos",
    benefits: [
      {
        icon: <Heart className="w-6 h-6 text-[#28a745]" />,
        title: "Prevención cardiovascular",
        description: "Chequeos y seguimiento cardíaco"
      },
      {
        icon: <Stethoscope className="w-6 h-6 text-[#003366]" />,
        title: "Especialistas preferenciales",
        description: "Acceso a más de 600 especialistas"
      },
      {
        icon: <Pill className="w-6 h-6 text-[#ffc107]" />,
        title: "Farmacia preferencial",
        description: "Descuentos en más de 230 farmacias"
      }
    ]
  },
  {
    range: "65-74",
    title: "Adultos Mayores",
    benefits: [
      {
        icon: <Clock className="w-6 h-6 text-[#28a745]" />,
        title: "Atención prioritaria",
        description: "Servicio preferencial 24/7"
      },
      {
        icon: <Home className="w-6 h-6 text-[#003366]" />,
        title: "Cuidado domiciliario",
        description: "Atención especializada en casa"
      },
      {
        icon: <Users className="w-6 h-6 text-[#ffc107]" />,
        title: "Acompañamiento familiar",
        description: "Orientación para cuidadores"
      }
    ]
  },
  {
    range: "75+",
    title: "Tercera Edad",
    benefits: [
      {
        icon: <Heart className="w-6 h-6 text-[#28a745]" />,
        title: "Cuidado integral",
        description: "Atención personalizada y continua"
      },
      {
        icon: <Home className="w-6 h-6 text-[#003366]" />,
        title: "Asistencia domiciliaria",
        description: "Servicios médicos y de enfermería en casa"
      },
      {
        icon: <Clock className="w-6 h-6 text-[#ffc107]" />,
        title: "Monitoreo 24/7",
        description: "Seguimiento constante de la salud"
      }
    ]
  }
];

// Servicios adicionales
const additionalServices = [
  {
    icon: <FlaskConical className="w-8 h-8" />,
    title: "Laboratorio a Domicilio",
    description: "Toma de muestras de laboratorio en casa. Cobertura en Bogotá, BGA, Cali, MDE."
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Farmacia a Domicilio",
    description: "Medicamentos y productos de cuidado en tu puerta. Costo domicilio $3.000."
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: "Odontología",
    description: "Servicios odontológicos con beneficios especiales. Principal en Bogotá."
  }
];

const ComprehensivePlansSection: React.FC = () => {
  const [activeAgeGroup, setActiveAgeGroup] = useState(0);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#003366] mb-4">
            Tu Salud y Bienestar, Nuestra Prioridad con Emermédica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planes integrales, cobertura completa y beneficios exclusivos pensados para cada etapa de tu vida.
          </p>
        </motion.div>

        {/* Coberturas Principales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-[#003366] mb-8 text-center">
            Nuestro Plan Integral: Cobertura Completa en Casa y Online
          </h3>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Cuidamos tu salud y la de tu familia, las 24 horas del día, los 7 días de la semana. 
            Accede a atención médica de calidad sin salir de casa, sin costo de inscripción ni pagos adicionales por el servicio cubierto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverages.map((coverage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#003366]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-[#28a745] mb-4">
                  {coverage.icon}
                </div>
                <h4 className="text-xl font-bold text-[#003366] mb-2">
                  {coverage.title}
                </h4>
                <p className="text-gray-600">
                  {coverage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Beneficios por Edad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-[#003366] mb-8 text-center">
            Beneficios VIVE Emermédica: Cuidado Personalizado para Cada Etapa
          </h3>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            ¡Cuidamos de ti! Consulta los beneficios destacados según tu edad.
          </p>

          {/* Tabs de navegación */}
          <div className="flex overflow-x-auto pb-4 mb-8 gap-2">
            {ageGroups.map((group, index) => (
              <button
                key={index}
                onClick={() => setActiveAgeGroup(index)}
                className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeAgeGroup === index
                    ? 'bg-[#28a745] text-white shadow-lg'
                    : 'bg-white text-[#003366] hover:bg-gray-50'
                }`}
              >
                {group.range} años
              </button>
            ))}
          </div>

          {/* Contenido de los beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ageGroups[activeAgeGroup].benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#003366]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-[#003366] mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tipos de Planes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-[#003366] mb-8 text-center">
            Elige el Plan Ideal para Ti
          </h3>
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
                <h4 className="text-xl font-bold text-[#003366] mb-3">
                  {plan.title}
                </h4>
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
        </motion.div>

        {/* Servicios Adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#003366] mb-8 text-center">
            Servicios Adicionales con Tarifa Preferencial
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#003366]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-[#28a745] mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-[#003366] mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensivePlansSection; 