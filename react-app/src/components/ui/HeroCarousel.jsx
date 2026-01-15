import { useEffect, useState } from 'react';

function HeroCarousel({ slides, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((prev) => (prev + 1) % count), interval);
    return () => clearInterval(id);
  }, [count, interval]);

  return (
    <div className="relative">
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`relative h-[500px] w-full transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
          <div className="overlay absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 text-white">
            <h5 className="text-3xl font-bold drop-shadow">{slide.title}</h5>
            <p className="mt-3 text-lg drop-shadow">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Aller à la diapositive ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;
