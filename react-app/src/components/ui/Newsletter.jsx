import toast from 'react-hot-toast';

function Newsletter({ title = "Inscrivez-vous à notre Newsletter", description = "Recevez les dernières nouvelles et offres exclusives sur les meilleures destinations touristiques directement dans votre boîte mail.", className = "" }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Inscription à la newsletter réussie !');
    e.target.reset();
  };

  return (
    <section className={`mx-auto max-w-6xl px-4 md:px-6 ${className}`}>
      <div className="grid items-center gap-6 rounded-2xl bg-white/90 p-8 shadow-medium ring-1 ring-white/40 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            {title} <span className="text-sunset-orange">Newsletter</span>
          </h3>
          <p className="mt-3 text-gray-dark">{description}</p>
        </div>
        <form className="flex flex-col gap-3 md:flex-row" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Entrez votre email"
            className="w-full rounded-full border border-gray-200 px-4 py-3 text-sm focus:border-blue-ocean focus:outline-none focus:ring-2 focus:ring-blue-ocean/20"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-sunset-orange px-6 py-3 text-sm font-semibold text-white shadow-medium transition hover:-translate-y-0.5 hover:bg-warm-orange"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
