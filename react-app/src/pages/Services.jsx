import { ArrowRight, Bus, Camera, CheckCircle2, Compass, Hotel, MapPin, Plane, ShieldCheck, Sparkles, Waves } from 'lucide-react';
import toast from 'react-hot-toast';
import Newsletter from '../components/ui/Newsletter';

const highlights = [
  'Transport confortable et sécurisé',
  'Hébergements sélectionnés avec soin',
  'Excursions personnalisées',
  'Guides multilingues',
  'Support client 24/7',
  'Tarifs transparents',
];

const cards = [
  { icon: MapPin, title: 'Découverte de Destinations', text: 'Explorez des lieux emblématiques et des trésors cachés.' },
  { icon: Bus, title: 'Transport Confortable', text: 'Voyagez sereinement avec un transport moderne et sécurisé.' },
  { icon: Camera, title: 'Activités Mémorables', text: 'Participez à des activités uniques pour des souvenirs inoubliables.' },
  { icon: Hotel, title: 'Hébergements de Qualité', text: 'Sélection d’hôtels confortables et accueillants.' },
];

const experiences = [
  {
    title: 'Circuits immersifs',
    text: 'Parcourez des itinéraires riches en découvertes culturelles et naturelles.',
    icon: Compass,
  },
  {
    title: 'Réservation simplifiée',
    text: 'Organisez vos voyages en quelques clics, sans stress.',
    icon: ShieldCheck,
  },
  {
    title: 'Moments inoubliables',
    text: 'Créez des souvenirs impérissables avec nos expériences sur mesure.',
    icon: Sparkles,
  },
];

function Services() {
  const handleCTA = () => {
    toast.success('Nous vous recontacterons pour planifier votre circuit !');
  };

  return (
    <div className="bg-white">
      {/* Hero simplifié */}
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl bg-white/90 p-8 shadow-strong ring-1 ring-white/40 backdrop-blur">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-blue-ocean/10 px-3 py-1 text-xs font-semibold text-blue-ocean">
                Services sur-mesure
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Des aventures inoubliables, orchestrées pour vous.</h1>
              <p className="text-base text-gray-dark">
                Transport confortable, hébergements sélectionnés, guides experts et réservation simplifiée : tout est pensé pour des voyages fluides et mémorables.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCTA}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-ocean px-5 py-3 text-sm font-semibold text-white shadow-medium transition hover:-translate-y-0.5 hover:bg-dark-blue-ocean"
                >
                  Planifier mon circuit <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#offres"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:border-blue-ocean hover:text-blue-ocean"
                >
                  Voir nos offres
                </a>
              </div>
            </div>
            <div className="grid gap-3">
              <div className="overflow-hidden rounded-xl">
                <img src="/assets/images/plane.jpg" alt="Services" className="h-56 w-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <img src="/assets/images/bing.jpg" alt="Circuit" className="h-28 w-full rounded-xl object-cover" />
                <img src="/assets/images/canalWater.png" alt="Détente" className="h-28 w-full rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl bg-white/90 p-6 shadow-light ring-1 ring-white/40">
            <h2 className="text-2xl font-bold text-gray-900">Découvrez des aventures inoubliables</h2>
            <p className="text-gray-dark">
              Plongez dans des expériences uniques grâce à nos circuits sur mesure. Des plages paradisiaques aux montagnes majestueuses, profitez de découvertes culturelles enrichissantes, d’un transport confortable et d’itinéraires adaptés à vos envies.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl bg-white/90 p-6 shadow-light ring-1 ring-white/40">
            <h2 className="text-2xl font-bold text-gray-900">Voyage sans stress, souvenirs impérissables</h2>
            <p className="text-gray-dark">
              Balades urbaines, randonnées nature, circuits gastronomiques : nous organisons, vous profitez. Concentrez-vous sur les moments forts, nous gérons la logistique.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="rounded-2xl bg-white/90 p-8 shadow-medium ring-1 ring-white/40">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">Caractéristiques de nos circuits</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white-off p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-sunset-orange" />
                <span className="text-sm text-gray-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-8 rounded-2xl bg-white/90 p-8 shadow-medium ring-1 ring-white/40 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">Détente & Découverte</h3>
            <p className="text-gray-dark">
              Atmosphère idéale pour allier détente et exploration. Nous créons des itinéraires équilibrés qui laissent de la place aux moments forts et au repos.
            </p>
            <button
              type="button"
              onClick={handleCTA}
              className="inline-flex items-center gap-2 rounded-full bg-sunset-orange px-5 py-3 text-sm font-semibold text-white shadow-medium transition hover:-translate-y-0.5 hover:bg-warm-orange"
            >
              En savoir plus <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="/assets/images/canalWater.png" alt="Détente" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6" id="offres">
        <div className="grid items-center gap-8 rounded-2xl bg-white/90 p-8 shadow-medium ring-1 ring-white/40 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">Découvrez nos circuits touristiques</h3>
            <p className="text-gray-dark">
              Explorez des destinations uniques et plongez dans des aventures inoubliables. Paysages, cultures locales et expériences immersives réunis dans des programmes fluides.
            </p>
            <button
              type="button"
              onClick={handleCTA}
              className="inline-flex items-center gap-2 rounded-full bg-blue-ocean px-5 py-3 text-sm font-semibold text-white shadow-medium transition hover:-translate-y-0.5 hover:bg-dark-blue-ocean"
            >
              Réservez maintenant <Plane className="h-4 w-4" />
            </button>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="/assets/images/bing.jpg" alt="Circuit touristique" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white/90 p-6 text-center shadow-light">
              <Icon className="mx-auto h-8 w-8 text-sunset-orange" />
              <h5 className="mt-3 text-lg font-semibold text-gray-900">{title}</h5>
              <p className="mt-2 text-sm text-gray-dark">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-8 rounded-2xl bg-white/90 p-8 shadow-medium ring-1 ring-white/40 md:grid-cols-2">
          <img src="/assets/images/staff.jpg" alt="Equipe" className="w-full rounded-2xl object-cover" />
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-900">Découvrez des expériences inoubliables</h2>
            <p className="text-gray-dark">
              Partez à la découverte de destinations uniques, où chaque paysage raconte une histoire. Plages paradisiaques, montagnes majestueuses ou villes riches en culture.
            </p>
            <p className="text-gray-dark">
              Avec des itinéraires personnalisés et des guides locaux passionnés, nous garantissons immersion totale et souvenirs mémorables.
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

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-light">
              <Icon className="h-8 w-8 text-sunset-orange" />
              <h4 className="mt-4 text-lg font-semibold text-gray-900">{title}</h4>
              <p className="mt-2 text-sm text-gray-dark">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-5xl px-4 md:px-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">Prêt pour l’aventure ?</h3>
        <p className="mt-3 text-gray-dark">Réservez un appel avec un expert pour bâtir votre prochain voyage.</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-ocean/10 px-4 py-2 text-blue-ocean">
          <Waves className="h-4 w-4" /> Escapades mer, ville ou nature
        </div>
      </section>

      <Newsletter className="mt-12 pb-16" />
    </div>
  );
}

export default Services;
