import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';

const defaultStars = Array(5).fill('full');

function renderStars(rating = defaultStars) {
  return (
    <div className="flex justify-center gap-1">
      {rating.map((value, idx) =>
        value === 'half' ? (
          <StarHalf key={idx} className="h-4 w-4 text-yellow-300 fill-yellow-300" />
        ) : (
          <Star key={idx} className="h-4 w-4 text-yellow-300 fill-yellow-300" />
        ),
      )}
    </div>
  );
}

function TestimonialCarousel({ items, autoDelay = 5000, className = '' }) {
  const [index, setIndex] = useState(0);
  const count = items.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((prev) => (prev + 1) % count), autoDelay);
    return () => clearInterval(id);
  }, [autoDelay, count]);

  const current = items[index];

  return (
    <div className={`relative ${className}`}>
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-bold text-white">Nos Meilleurs Témoignages</h2>
        <h4 className="text-xl font-semibold text-black">{current.title}</h4>
        {renderStars(current.stars)}
        <p className="mx-auto max-w-2xl text-sm text-white/90">{current.text}</p>
        <div className="space-y-2">
          <p className="font-semibold text-white">{current.author}</p>
          <img
            src={current.avatar}
            alt={current.author}
            className="mx-auto h-20 w-20 rounded-full border-4 border-sunset-orange object-cover shadow"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setIndex((index - 1 + count) % count)}
          className="rounded-full border border-white/30 p-2 text-white hover:bg-white/10"
          aria-label="Précédent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIndex((index + 1) % count)}
          className="rounded-full border border-white/30 p-2 text-white hover:bg-white/10"
          aria-label="Suivant"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
