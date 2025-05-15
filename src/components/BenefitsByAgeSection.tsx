import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Baby, 
  School, 
  User, 
  Users, 
  Heart, 
  Stethoscope,
  Calendar,
  Clock,
  Pill,
  Microscope,
  Phone,
  Home
} from 'lucide-react';

interface AgeBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AgeGroup {
  range: string;
  title: string;
  benefits: AgeBenefit[];
}

const ageGroups: AgeGroup[] = [
  {
    range: "0-4",
    title: "Primera Infancia",
    benefits: [
      {
        icon: <Stethoscope className="w-6 h-6 text-[#28a745]" />,
        title: "Controles Pediátricos",
        description: "Revisiones periódicas gratuitas con pediatras especializados"
      },
      {
        icon: <Calendar className="w-6 h-6 text-[#003366]" />,
        title: "Calendario de Vacunación",
        description: "Seguimiento y recordatorios de vacunas"
      },
      {
        icon: <Phone className="w-6 h-6 text-[#ffc107]" />,
        title: "Pediatría 24/7",
        description: "Atención inmediata para emergencias pediátricas"
      },
      {
        icon: <Home className="w-6 h-6 text-[#28a745]" />,
        title: "Visitas Domiciliarias",
        description: "Consultas pediátricas en la comodidad de tu hogar"
      }
    ]
  },
  {
    range: "5-19",
    title: "Niñez y Adolescencia",
    benefits: [
      {
        icon: <School className="w-6 h-6 text-[#003366]" />,
        title: "Chequeos Escolares",
        description: "Evaluaciones médicas para el ingreso escolar"
      },
      {
        icon: <Heart className="w-6 h-6 text-[#28a745]" />,
        title: "Desarrollo y Crecimiento",
        description: "Seguimiento del desarrollo físico y emocional"
      },
      {
        icon: <Pill className="w-6 h-6 text-[#ffc107]" />,
        title: "Medicamentos Preferenciales",
        description: "Descuentos en medicamentos y suplementos"
      }
    ]
  },
  {
    range: "20-34",
    title: "Adultos Jóvenes",
    benefits: [
      {
        icon: <Phone className="w-6 h-6 text-[#003366]" />,
        title: "Telemedicina Ilimitada",
        description: "Consultas virtuales sin costo adicional"
      },
      {
        icon: <Microscope className="w-6 h-6 text-[#28a745]" />,
        title: "Exámenes Preventivos",
        description: "Chequeos anuales con descuentos especiales"
      },
      {
        icon: <Home className="w-6 h-6 text-[#ffc107]" />,
        title: "Atención Domiciliaria",
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
        title: "Prevención Cardiovascular",
        description: "Chequeos y seguimiento cardíaco"
      },
      {
        icon: <Stethoscope className="w-6 h-6 text-[#003366]" />,
        title: "Especialistas Preferenciales",
        description: "Acceso a más de 600 especialistas"
      },
      {
        icon: <Pill className="w-6 h-6 text-[#ffc107]" />,
        title: "Farmacia Preferencial",
        description: "Descuentos en más de 230 farmacias"
      }
    ]
  },
  {
    range: "65-74",
    title: "Adultos Mayores",
    benefits: [
      {
        icon: <Clock className="w-6 h-6 text-[#003366]" />,
        title: "Atención Prioritaria",
        description: "Servicio preferencial 24/7"
      },
      {
        icon: <Home className="w-6 h-6 text-[#28a745]" />,
        title: "Cuidado Domiciliario",
        description: "Atención especializada en casa"
      },
      {
        icon: <Users className="w-6 h-6 text-[#ffc107]" />,
        title: "Acompañamiento Familiar",
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
        title: "Cuidado Integral",
        description: "Atención personalizada y continua"
      },
      {
        icon: <Home className="w-6 h-6 text-[#003366]" />,
        title: "Asistencia Domiciliaria",
        description: "Servicios médicos y de enfermería en casa"
      },
      {
        icon: <Phone className="w-6 h-6 text-[#ffc107]" />,
        title: "Monitoreo 24/7",
        description: "Seguimiento constante de la salud"
      }
    ]
  }
];

const BenefitsByAgeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
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
            Beneficios Pensados para Cada Etapa de Tu Vida
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Descubre los beneficios personalizados que tenemos para ti y tu familia, adaptados a cada etapa de la vida
          </motion.p>
        </div>

        {/* Tabs de navegación */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max px-4">
            {ageGroups.map((group, index) => (
              <button
                key={group.range}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-[#003366] text-white shadow-lg'
                    : 'bg-white text-[#003366] hover:bg-[#003366]/10'
                }`}
              >
                {group.range} años
              </button>
            ))}
          </div>
        </div>

        {/* Contenido de los tabs */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#003366] mb-2">
                  {ageGroups[activeTab].title}
                </h3>
                <p className="text-gray-600">
                  Beneficios especiales para personas de {ageGroups[activeTab].range} años
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ageGroups[activeTab].benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-semibold text-[#003366] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BenefitsByAgeSection; 