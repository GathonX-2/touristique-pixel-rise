import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h5 className="text-lg font-semibold text-blue-ocean">Touristique-Tours</h5>
            <p className="mt-3 text-sm text-gray-200">
              Découvrez le monde avec nous. Nous offrons des expériences uniques pour rendre vos voyages mémorables.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-blue-ocean">Pages</h5>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="transition hover:text-sunset-orange">Accueil</Link></li>
              <li><Link to="/apropos" className="transition hover:text-sunset-orange">À propos</Link></li>
              <li><Link to="/services" className="transition hover:text-sunset-orange">Services</Link></li>
              <li><Link to="/blog" className="transition hover:text-sunset-orange">Blog</Link></li>
              <li><Link to="/contact" className="transition hover:text-sunset-orange">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-blue-ocean">Contact</h5>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sunset-orange" />
                <a href="mailto:contact@islandmanager.com" className="hover:underline">contact@islandmanager.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sunset-orange" />
                <span>+261 32 00 000 00</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sunset-orange" />
                <span>Nosy Be, DIANA, Madagascar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-300">
          © 2024 Touristique-Tours. Tous droits réservés. Par <span className="font-semibold text-white">IslandManager</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
