import { ArrowRight, Camera, Compass, Globe, Quote, Sun, Wind } from 'lucide-react';
import toast from 'react-hot-toast';
import Newsletter from '../components/ui/Newsletter';

const featureCards = [
  { title: 'Plages de rêve', desc: 'Détendez-vous sur les plus belles plages, entre soleil, sable doré et eaux cristallines.', icon: Sun },
  { title: 'Excursions guidées', desc: 'Explorez des paysages époustouflants avec nos guides experts qui vous racontent l’histoire locale.', icon: Camera },
  { title: 'Aventures en pleine nature', desc: 'Partez à l’aventure dans des forêts tropicales, volcans majestueux et parcs naturels.', icon: Compass },
  { title: 'Découverte culturelle', desc: 'Immergez-vous dans les traditions locales, la gastronomie et l’artisanat authentique.', icon: Wind },
];

const gallery = Array.from({ length: 6 }).map((_, idx) => ({
  label: `Destination ${idx + 1}`,
  img: '/assets/images/grandBaie.jpg',
}));

const tourCategories = [
  { label: 'Autoguidé', icon: Globe },
  { label: 'Croisières', icon: Globe },
  { label: 'Aventure', icon: Compass },
  { label: 'Nature', icon: Wind },
  { label: 'Bord de Mer', icon: Sun },
];

const tourCards = Array.from({ length: 6 }).map((_, idx) => ({
  title: idx % 3 === 0 ? 'Circuit en Europe' : idx % 3 === 1 ? 'La Thaïlande Ultime' : 'Découvrez l\'Inde',
  price: idx % 3 === 0 ? '$1850' : idx % 3 === 1 ? '$1350' : '$2650',
  img: '/assets/images/tour.jpg',
  desc:
    idx % 3 === 0
      ? 'Découvrez les villes historiques et les paysages enchanteurs de l’Europe.'
      : idx % 3 === 1
        ? 'Explorez la beauté exotique et la culture vibrante de la Thaïlande.'
        : 'Plongez dans la spiritualité et les merveilles de l’Inde éternelle.',
}));

const testimonials = [
  {
    title: 'Les Pyramides Anciennes',
    text: 'Découvrez la majesté des pyramides anciennes avec une immersion culturelle et historique inégalée. Une aventure qui vous laissera émerveillé et connecté à l’histoire.',
    author: 'Roman Paolera',
    avatar: '/assets/images/user.jpg',
    stars: ['full', 'full', 'full', 'full', 'full'],
  },
  {
    title: 'La Jungle Mystique',
    text: 'Explorez les profondeurs de la jungle avec des guides experts. Chaque instant vous rapprochera de la nature dans toute sa splendeur.',
    author: 'Sophia Loren',
    avatar: '/assets/images/user.jpg',
    stars: ['full', 'full', 'full', 'full', 'half'],
  },
  {
    title: 'Le Désert Doré',
    text: 'Partez à la découverte des dunes dorées et des couchers de soleil magiques. Une aventure qui restera gravée dans votre mémoire.',
    author: 'John Doe',
    avatar: '/assets/images/user.jpg',
    stars: ['full', 'full', 'full', 'full', 'full'],
  },
];

function Home() {
  const handleNewsletter = (e) => {
    e.preventDefault();
    toast.success('Inscription à la newsletter réussie !');
    e.target.reset();
  };

  return (
    <div className="bg-transparent">
      {/* Hero statique épuré */}
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl bg-white/90 p-8 shadow-strong ring-1 ring-white/40 backdrop-blur">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-blue-ocean/10 px-3 py-1 text-xs font-semibold text-blue-ocean">
                Voyage sur-mesure & expériences premium
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Explorez des destinations inoubliables, vivez des voyages qui marquent.
              </h1>
              <p className="text-base text-gray-dark">
                De plages paradisiaques aux capitales vibrantes, nous orchestrons des séjours élégants, fluides et mémorables.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-ocean px-5 py-3 text-sm font-semibold text-white shadow-medium transition hover:-translate-y-0.5 hover:bg-dark-blue-ocean"
                >
                  Découvrir nos services <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#destinations"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:border-blue-ocean hover:text-blue-ocean"
                >
                  Nos destinations
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                {[
                  { label: 'Circuits exclusifs', value: '120+' },
                  { label: 'Clients satisfaits', value: '15k' },
                  { label: 'Guides locaux', value: '80+' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-gray-200 bg-white-off p-3 shadow-light">
                    <p className="text-xl font-bold text-gray-900">{item.value}</p>
                    <p className="text-xs text-gray-dark">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              <div className="overflow-hidden rounded-xl">
                <img src="/assets/images/beach.jpg" alt="Plage" className="h-56 w-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <img src="/assets/images/hotel.jpg" alt="Hôtel" className="h-28 w-full rounded-xl object-cover" />
                <img src="/assets/images/beach.png" alt="Ville" className="h-28 w-full rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featureCards.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="h-full rounded-xl border border-gray-200 bg-white/90 p-6 shadow-light transition hover:-translate-y-1 hover:shadow-medium">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-ocean/10 text-blue-ocean">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-dark">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About split */}
      <section className="mx-auto mt-16 max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 rounded-2xl bg-white/90 p-8 shadow-medium ring-1 ring-white/40 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img src="/assets/images/grandBaie.jpg" alt="Vidéo Touristique" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Un lieu parfait pour s'évader</h2>
            <p className="text-gray-dark">
              Plongez dans un univers où chaque destination raconte une histoire unique. Explorez des paysages à couper le souffle, des plages dorées aux montagnes majestueuses.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-sunset-orange px-4 py-2 text-sm font-semibold text-white shadow-medium transition hover:-translate-y-0.5 hover:bg-warm-orange">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/watch?v=9QX4xj5urLQ&ab_channel=BmDrone27" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-ocean hover:underline">
                Voir la vidéo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tours simplified grid */}
      <section id="destinations" className="mx-auto mt-16 max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-ocean">Destinations</p>
            <h3 className="text-2xl font-bold text-gray-900">Choisissez votre prochain tour</h3>
          </div>
          <a href="/services" className="hidden rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-blue-ocean hover:text-blue-ocean md:inline-flex">
            Voir nos circuits
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tourCards.map((tour, idx) => (
            <div key={`${tour.title}-${idx}`} className="overflow-hidden rounded-2xl border border-gray-200 bg-white/90 shadow-light transition hover:-translate-y-1 hover:shadow-medium">
              <img src={tour.img} alt={tour.title} className="h-48 w-full object-cover" />
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-900">{tour.title}</h4>
                  <span className="rounded-full bg-blue-ocean/10 px-3 py-1 text-xs font-semibold text-blue-ocean">{tour.price}</span>
                </div>
                <p className="text-sm text-gray-dark">{tour.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials cards */}
      <section className="mx-auto mt-16 max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-blue-ocean to-dark-blue-ocean p-8 text-white shadow-strong">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">Nos témoignages</p>
            <h3 className="mt-2 text-2xl font-bold">Expériences mémorables</h3>
            <p className="mt-3 text-white/85">
              Ce que disent nos voyageurs : immersion culturelle, panoramas inoubliables et accompagnement premium.
            </p>
            <div className="mt-6 grid gap-4">
              {testimonials.slice(0, 2).map((item) => (
                <div key={item.title} className="rounded-xl bg-white/10 p-4 shadow-light backdrop-blur">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-white/20 p-2">
                      <Quote className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm text-white/90">{item.text}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{item.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="/assets/images/chine.jpg" alt="Témoignage" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto mt-16 max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-ocean">Inspiration</p>
            <h3 className="text-2xl font-bold text-gray-900">Explorez en images</h3>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.label} className="group relative overflow-hidden rounded-xl shadow-light">
              <img src={item.img} alt={item.label} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gray-900/50 opacity-0 transition group-hover:opacity-100" />
              <span className="absolute left-4 bottom-4 text-sm font-semibold text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Newsletter className="mt-16" />
    </div>
  );
}

export default Home;
