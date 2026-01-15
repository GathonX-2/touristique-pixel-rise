import { Camera, CheckCircle2, Compass, Globe2, Hotel, Mountain, Plane, Ship, Sparkles, Sun, Wind, Quote } from 'lucide-react';
import toast from 'react-hot-toast';
import Newsletter from '../components/ui/Newsletter';

const features = [
  { icon: Globe2, title: 'Transport privé', text: "Profitez d'un transport privé pour vous déplacer en toute sérénité." },
  { icon: Globe2, title: 'Destinations diverses', text: 'Explorez des destinations uniques pour des expériences mémorables.' },
  { icon: Hotel, title: 'Hôtels de qualité', text: 'Séjournez dans des hôtels offrant confort et hospitalité.' },
  { icon: Plane, title: 'Réservation rapide', text: 'Réservez vos séjours en quelques clics grâce à notre système simplifié.' },
];

const logos = Array.from({ length: 5 }).map((_, idx) => `/assets/images/logoSociete${idx + 1}.png`);

const heroBreadcrumb = [
  { label: 'Accueil', href: '/' },
  { label: 'À Propos' },
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

function Apropos() {
  const handleCTA = () => toast.success('Nous vous enverrons plus de détails très vite !');

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl bg-white/90 p-8 shadow-strong ring-1 ring-white/40 backdrop-blur">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-blue-ocean/10 px-3 py-1 text-xs font-semibold text-blue-ocean">
                Notre histoire
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">À Propos</h1>
              <p className="text-base text-gray-dark">Notre promesse : des voyages élégants, bien orchestrés, centrés sur l’humain.</p>
              <p className="text-sm text-gray-dark">
                <a href="/" className="font-semibold text-blue-ocean">Accueil</a>
                <span className="mx-2 text-gray-dark">›</span>
                <span className="text-gray-dark">À Propos</span>
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src="/assets/images/ship.jpg" alt="À propos" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-light">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sunset-orange/10 text-sunset-orange">
                  <Icon className="h-6 w-6" />
                </div>
                <h5 className="mt-3 text-lg font-semibold text-blue-ocean">{title}</h5>
                <p className="mt-2 text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-8 rounded-2xl bg-white/90 p-8 shadow-medium ring-1 ring-white/40 md:grid-cols-2">
          <img src="/assets/images/bea.jpg" alt="Equipe" className="w-full rounded-2xl shadow-medium object-cover" />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">À Propos de Nous</h2>
            <p className="text-gray-dark">
              Chez Touristique-Tours, chaque voyage est une opportunité de découvrir de nouveaux horizons, de s’immerger dans des cultures fascinantes et de créer des souvenirs impérissables.
            </p>
            <p className="text-gray-dark">
              Itinéraires sur mesure : plages paradisiaques, aventures en montagne ou découvertes culturelles. Notre mission est de transformer vos rêves de voyage en réalité.
            </p>
            <button
              type="button"
              onClick={handleCTA}
              className="inline-flex items-center gap-2 rounded-full bg-sunset-orange px-5 py-3 text-sm font-semibold text-white shadow-medium transition hover:-translate-y-0.5 hover:bg-warm-orange"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {logos.map((logo) => (
              <img key={logo} src={logo} alt="Logo partenaire" className="h-12 w-auto opacity-80 transition hover:opacity-100" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold text-blue-ocean">Découvrez le Monde avec Touristique-Tours</h2>
          <p className="mt-4 text-gray-600">
            Des plages paradisiaques aux montagnes majestueuses, nous créons des expériences personnalisées pour émerveiller vos voyages.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-blue-ocean to-dark-blue-ocean p-8 text-white shadow-strong">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">Témoignages</p>
            <h3 className="mt-2 text-2xl font-bold">Nos Meilleurs Témoignages</h3>
            <p className="mt-3 text-white/85">Ce que disent nos voyageurs sur leurs expériences immersives et élégantes.</p>
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
            <img src="/assets/images/canada.jpg" alt="Témoignage" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Sun, title: 'Plages de rêve', text: 'Détendez-vous sur les plus belles plages, entre soleil et eaux cristallines.' },
            { icon: Camera, title: 'Excursions guidées', text: 'Guides experts pour raconter l’histoire locale.' },
            { icon: Compass, title: 'Aventures nature', text: 'Forêts tropicales, volcans majestueux, parcs naturels.' },
            { icon: Wind, title: 'Découverte culturelle', text: 'Traditions locales, gastronomie et artisanat authentique.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white/90 p-6 text-center shadow-light">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sunset-orange/10 text-sunset-orange">
                <Icon className="h-6 w-6" />
              </div>
              <h5 className="mt-3 text-lg font-semibold text-gray-900">{title}</h5>
              <p className="mt-2 text-sm text-gray-dark">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-5xl px-4 md:px-6">
        <div className="rounded-2xl bg-gradient-to-br from-ink to-ink/90 p-8 text-white shadow-strong">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">Découvrez où vos rêves peuvent vous mener</p>
          <p className="mt-3 leading-relaxed text-white/90">
            Chez <span className="font-semibold">Touristique-Tours</span>, chaque voyage est une aventure unique. Des plages idylliques aux montagnes majestueuses en passant par des villes vibrantes, nous transformons vos rêves d’évasion en réalité avec des services personnalisés et un accompagnement complet.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl bg-white/90 p-6 shadow-light">
            <h3 className="text-2xl font-semibold text-gray-900">Pourquoi voyager avec nous ?</h3>
            <ul className="space-y-2 text-gray-dark">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-sunset-orange" /> Conseils personnalisés par des experts locaux</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-sunset-orange" /> Expériences immersives et authentiques</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-sunset-orange" /> Support 24/7 pendant vos voyages</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/90 p-6 shadow-light">
            <h4 className="text-xl font-semibold text-gray-900">Planifiez votre prochaine aventure</h4>
            <p className="mt-2 text-sm text-gray-dark">Nous construisons un itinéraire sur mesure pour vous.</p>
            <button
              type="button"
              onClick={handleCTA}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-sunset-orange px-5 py-3 text-sm font-semibold text-white shadow-medium transition hover:-translate-y-0.5 hover:bg-warm-orange"
            >
              Commencer <Sparkles className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Newsletter className="pb-16" />
    </div>
  );
}

export default Apropos;
