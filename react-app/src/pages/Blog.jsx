import { CalendarClock, PenLine, Quote } from 'lucide-react';
import toast from 'react-hot-toast';
import Newsletter from '../components/ui/Newsletter';

const posts = [
  {
    title: 'Comment choisir un hôtel pour votre prochain voyage ?',
    category: 'VOYAGE & HÉBERGEMENT',
    author: 'Marie Dupont',
    date: '1er mars 2023',
    image: '/assets/images/blog1.webp',
  },
  {
    title: 'Les meilleures astuces pour voyager à petit budget',
    category: 'ASTUCES DE VOYAGE',
    author: 'Jean Martin',
    date: '15 février 2023',
    image: '/assets/images/blog1.webp',
  },
  {
    title: 'Les 10 destinations incontournables pour 2024',
    category: 'DESTINATIONS',
    author: 'Sophie Lambert',
    date: '10 janvier 2023',
    image: '/assets/images/blog1.webp',
  },
  {
    title: 'Les 10 destinations incontournables pour 2024',
    category: 'DESTINATIONS',
    author: 'Sophie Lambert',
    date: '10 janvier 2023',
    image: '/assets/images/blog1.webp',
  },
  {
    title: 'Les 10 destinations incontournables pour 2024',
    category: 'DESTINATIONS',
    author: 'Sophie Lambert',
    date: '10 janvier 2023',
    image: '/assets/images/blog1.webp',
  },
  {
    title: 'Les 10 destinations incontournables pour 2024',
    category: 'DESTINATIONS',
    author: 'Sophie Lambert',
    date: '10 janvier 2023',
    image: '/assets/images/blog1.webp',
  },
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

function Blog() {
  const handleNewsletter = (e) => {
    e.preventDefault();
    toast.success('Merci pour votre inscription à la newsletter !');
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
                Actualités & inspirations
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Conseils de voyage, tendances et meilleures destinations.</h1>
              <p className="text-base text-gray-dark">
                Retrouvez nos recommandations pour préparer vos séjours, découvrir des lieux uniques et optimiser vos expériences sur place.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src="/assets/images/note.jpg" alt="Blog" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-2xl border border-gray-200 bg-white/90 shadow-light transition hover:-translate-y-1 hover:shadow-medium">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">{post.category}</span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{post.title}</h3>
                <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1"><PenLine className="h-3.5 w-3.5" /> {post.author}</span>
                  <span className="inline-flex items-center gap-1"><CalendarClock className="h-3.5 w-3.5" /> {post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Témoignages simple */}
      <section className="mx-auto mt-16 max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-blue-ocean to-dark-blue-ocean p-8 text-white shadow-strong">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">Témoignages</p>
            <h3 className="mt-2 text-2xl font-bold">Expériences partagées</h3>
            <p className="mt-3 text-white/85">
              Quelques retours marquants de nos voyageurs : immersion culturelle, panoramas inoubliables, accompagnement sur-mesure.
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
            <img src="/assets/images/hongkong.jpg" alt="Témoignage" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <Newsletter className="mt-16 pb-16" />
    </div>
  );
}

export default Blog;
