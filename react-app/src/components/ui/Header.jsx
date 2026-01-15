import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/apropos' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white text-sunset-orange font-bold shadow-light">
            TT
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
            Touristique-Tours
          </span>
        </NavLink>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-900 px-2.5 py-2 text-white shadow-light transition hover:bg-gray-800 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-blue-ocean/10 text-blue-ocean'
                    : 'text-gray-700 hover:text-gray-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/services"
            className="ml-3 hidden items-center gap-2 rounded-full bg-sunset-orange px-4 py-2 text-sm font-semibold text-white shadow-strong transition hover:-translate-y-0.5 hover:bg-warm-orange md:inline-flex"
          >
            Réserver
          </NavLink>
        </nav>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 md:px-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    isActive ? 'bg-blue-ocean/10 text-blue-ocean' : 'text-gray-700 hover:text-gray-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/services"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sunset-orange px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-warm-orange"
            >
              Réserver
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
