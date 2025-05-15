import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#003366] text-white">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo y descripción */}
          <div className="space-y-6">
            <img 
              src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1747265883/emermedica-seeklogo_ax54ns_jxuylx.png"
              alt="Emermedica Logo"
              className="w-48"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Más de 33 años cuidando la salud de los colombianos con atención médica domiciliaria y emergencias.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575648687380"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/siempre_emermedica/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/emermedica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#benefits" className="text-white/80 hover:text-white transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#why-choose" className="text-white/80 hover:text-white transition-colors">
                  ¿Por qué elegirnos?
                </a>
              </li>
              <li>
                <a href="#coverage" className="text-white/80 hover:text-white transition-colors">
                  Cobertura
                </a>
              </li>
              <li>
                <a href="#lead-form" className="text-white/80 hover:text-white transition-colors">
                  Afíliate ahora
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-[#28a745] mt-1" />
                <span className="text-white/80">Línea de atención: 324 420 8110</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#28a745] mt-1" />
                <span className="text-white/80">
                CR 19B No. 168 - 35, Bogotá D.C. Colombia
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-[#28a745] mt-1" />
                <a 
                  href="mailto:servicioalcliente@siempremermedica.com" 
                  className="text-white/80 hover:text-white transition-colors break-all"
                >
                  servicioalcliente@<br />siempremermedica.com
                </a>
              </li>      
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="/terminos" className="text-white/80 hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="/privacidad" className="text-white/80 hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-white/80 hover:text-white transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Emermédica. Todos los derechos reservados.
            </p>
            <p className="text-white/40 text-xs">
              Sitio web desarrollado por{' '}
              <a 
                href="https://www.soloesunclick.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                SoloesunClick
              </a>
            </p>      
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
