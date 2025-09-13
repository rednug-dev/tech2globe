export default function ServicesNO() {
  const items = [
    {
      title: "Digital markedsføring",
      desc:
        "Datadrevet strategi som bygger merkevaren og øker konverteringer på tvers av kanaler.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 5h18M3 12h18M3 19h18" />
        </svg>
      ),
    },
    {
      title: "E‑handel og butikkutvikling",
      desc:
        "Moderne nettbutikker (Shopify/Headless/Next.js) med rask ytelse og skalerbarhet.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M6 6h15l-1.5 9H7.5L6 6z" />
          <circle cx="9" cy="19" r="1.5" />
          <circle cx="18" cy="19" r="1.5" />
        </svg>
      ),
    },
    {
      title: "SEO og vekst",
      desc:
        "Teknisk SEO, innhold og lenkebygging – målbar trafikk som konverterer.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 17l6-6 4 4 7-7" />
          <path d="M14 7h7v7" />
        </svg>
      ),
    },
    {
      title: "Innhold og kampanjer",
      desc:
        "Kreative konsepter, video og annonser – skreddersydd for norske målgrupper.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 5h16v14H4z" />
          <path d="M8 9h8M8 13h5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="tjenester" className="py-16 md:py-24 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Hva vi leverer i Norge</h2>
        <p className="text-neutral-300 mt-2 max-w-2xl">
          Vi hjelper norske virksomheter med å vokse digitalt – fra strategi til utførelse og
          kontinuerlig optimalisering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {items.map((it) => (
            <div key={it.title} className="group rounded-lg border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
              <div className="text-red-500">{it.icon}</div>
              <h3 className="mt-3 font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
