import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/newest-logo.png" alt="NutrEmotion Logo" className="h-16" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Mejorando tu relación con la comida y promoviendo el bienestar emocional a través de la psiconutrición.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-nutr-green-600">Inicio</Link></li>
              <li><Link to="/programas" className="text-sm text-muted-foreground hover:text-nutr-green-600">Programas</Link></li>
              <li><Link to="/sobre-nosotros" className="text-sm text-muted-foreground hover:text-nutr-green-600">Sobre Nosotros</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">POLÍTICAS</h3>
            <ul className="space-y-2">
              <li><Link to="/politicas-de-privacidad" className="text-sm text-muted-foreground hover:text-nutr-green-600">Políticas de Privacidad</Link></li>
              <li><Link to="/aviso-legal" className="text-sm text-muted-foreground hover:text-nutr-green-600">Aviso Legal</Link></li>
              <li><Link to="/terminos-y-condiciones" className="text-sm text-muted-foreground hover:text-nutr-green-600">Términos y Condiciones</Link></li>
              <li><Link to="/politica-cookies" className="text-sm text-muted-foreground hover:text-nutr-green-600">Política de Cookies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Contacto</h3>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground">Email: info@nutremotion.com</p>
              <p className="text-sm text-muted-foreground">Teléfono: +34 643 805 329</p>
            </address>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} className="text-nutr-green-500 hover:text-nutr-green-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} className="text-nutr-green-500 hover:text-nutr-green-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={18} className="text-nutr-green-500 hover:text-nutr-green-600" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} NutrEmotion. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/politicas-de-privacidad" className="text-xs text-muted-foreground hover:text-nutr-green-600">Política de Privacidad</Link>
              <Link to="/aviso-legal" className="text-xs text-muted-foreground hover:text-nutr-green-600">Aviso Legal</Link>
              <Link to="/terminos-y-condiciones" className="text-xs text-muted-foreground hover:text-nutr-green-600">Términos y Condiciones</Link>
              <Link to="/politica-cookies" className="text-xs text-muted-foreground hover:text-nutr-green-600">Política de Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}