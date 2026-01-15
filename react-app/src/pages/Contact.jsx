import { Facebook, Linkedin, Mail, MapPin, Phone, Quote, Twitter } from 'lucide-react';
import toast from 'react-hot-toast';
import Newsletter from '../components/ui/Newsletter';

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Mail, href: '#', label: 'Google' },
];

const testimonials = [
  {
    title: 'Les Pyramides Anciennes',
    text: 'Découvrez la majesté des pyramides anciennes avec une immersion culturelle et historique inégalée. Une aventure qui vous laissera émerveillé et connecté à l’histoire.',
    author: 'Roman Paolera',
  },
  {
    title: 'La Jungle Mystique',
    text: 'Explorez les profondeurs de la jungle avec des guides experts. Chaque instant vous rapprochera de la nature dans toute sa splendeur.',
    author: 'Sophia Loren',
  },
  {
    title: 'Le Désert Doré',
    text: 'Partez à la découverte des dunes dorées et des couchers de soleil magiques. Une aventure qui restera gravée dans votre mémoire.',
    author: 'John Doe',
  },
];

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message envoyé. Nous revenons vers vous rapidement !');
    e.target.reset();
  };

  return (
    <div className="bg-transparent">
      {/* Hero simplifié */}
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl bg-white/90 p-8 shadow-strong ring-1 ring-white/40 backdrop-blur">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-blue-ocean/10 px-3 py-1 text-xs font-semibold text-blue-ocean">
                Contact & accompagnement
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Parlez-nous de votre prochain voyage.</h1>
              <p className="text-base text-gray-dark">
                Nos équipes répondent rapidement pour bâtir un itinéraire sur-mesure. Bureaux, réseaux sociaux ou formulaire : choisissez votre canal.
              </p>
              <p className="text-sm text-gray-dark">
                <a href="/" className="font-semibold text-blue-ocean">Accueil</a>
                <span className="mx-2 text-gray-dark">›</span>
                <span className="text-gray-dark">Contact</span>
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src="/assets/images/phone.jpg" alt="Contact" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-6 rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-light">
            <div>
              <h6 className="text-sm font-semibold text-gray-900">Bureau d&apos;IslandManager</h6>
              <p className="mt-2 text-sm text-gray-dark">Hell-Ville, Nosy-Be, DIANA, MADAGASCAR</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-gray-700">
                <Phone className="h-4 w-4 text-sunset-orange" /> +261 (32) 00 000 00
              </p>
            </div>
            <div>
              <h6 className="text-sm font-semibold text-gray-900">Bureau de Pixel Rise</h6>
              <p className="mt-2 text-sm text-gray-dark">Hell-Ville, Nosy-Be, DIANA, MADAGASCAR</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-gray-700">
                <Phone className="h-4 w-4 text-sunset-orange" /> +261 (38) 00 000 00
              </p>
            </div>
            <div className="space-y-3">
              <h6 className="text-sm font-semibold text-gray-900">Réseaux sociaux</h6>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700 transition hover:border-sunset-orange hover:text-sunset-orange"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <MapPin className="mt-0.5 h-4 w-4 text-sunset-orange" />
              <span>Nosy Be, DIANA, Madagascar</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-light">
              <h3 className="text-xl font-semibold text-gray-900">Envoyez-nous un message</h3>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-blue-ocean focus:outline-none focus:ring-2 focus:ring-blue-ocean/20"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Votre email"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-blue-ocean focus:outline-none focus:ring-2 focus:ring-blue-ocean/20"
                  />
                </div>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Entrez votre message ici..."
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-blue-ocean focus:outline-none focus:ring-2 focus:ring-blue-ocean/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-sunset-orange px-5 py-2.5 text-sm font-semibold text-white shadow-medium transition hover:-translate-y-0.5 hover:bg-warm-orange"
                >
                  Envoyer maintenant
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl shadow-medium">
          <iframe
            title="Nosy Be Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62121.653729811595!2d48.23212611664864!3d-13.31269955707289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2213b8328fe7bf11%3A0x1a642673cfda870!2sNosy%20Be!5e0!3m2!1sen!2smg!4v1732699672113!5m2!1sen!2smg"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-blue-ocean to-dark-blue-ocean p-8 text-white shadow-strong">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">Témoignages</p>
            <h3 className="mt-2 text-2xl font-bold">Expériences partagées</h3>
            <p className="mt-3 text-white/85">
              Ce que disent nos voyageurs : immersion culturelle, panoramas inoubliables et accompagnement premium.
            </p>
            <div className="mt-6 grid gap-4">
              {testimonials.map((item) => (
                <div key={item.title} className="rounded-xl bg-white/10 p-4 shadow-light backdrop-blur">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-white/20 p-2">
                      <Quote className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-white/90">{item.text}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{item.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="/assets/images/daubai.jpg" alt="Témoignage" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <Newsletter className="mt-16 pb-16" />
    </div>
  );
}

export default Contact;
