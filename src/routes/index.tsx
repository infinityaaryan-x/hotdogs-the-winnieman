import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero from "@/assets/hero-hotdog.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

const TITLE = "Hotdogs the Winnieman — Street Hotdogs in Van Nuys, CA";
const DESC =
  "Loaded street-style hotdogs and sausages at 15244 Vanowen St, Van Nuys. Tue–Sat, 5–11 PM. Hotdogs callejeros cargados en Van Nuys.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          name: "Hotdogs the Winnieman",
          servesCuisine: "Street hotdogs",
          address: {
            "@type": "PostalAddress",
            streetAddress: "15244 Vanowen St",
            addressLocality: "Van Nuys",
            addressRegion: "CA",
            postalCode: "91405",
            addressCountry: "US",
          },
          openingHours: "Tu-Sa 17:00-23:00",
          sameAs: [IG],
        }),
      },
    ],
  }),
  component: Index,
});

const IG = "https://www.instagram.com/hotdog_the_winnieman_22/";
const ADDRESS = "15244 Vanowen St, Van Nuys, CA 91405";
const MAPS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS + ", USA")}`;
const EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

type Lang = "en" | "es";
const t = {
  en: {
    nav: ["Menu", "Gallery", "About", "Visit"],
    directions: "Directions",
    kicker: "Van Nuys · Street-style hotdogs",
    headline: ["BIG FLAVOR.", "STREET SOUL."],
    sub: "Gran sabor. Alma callejera.",
    lede: "Loaded hotdogs and sausages piled high with ketchup, mustard, mayo, jalapeños and toppings — served hot on Vanowen after dark.",
    cta1: "Explore the menu",
    cta2: "Find us tonight",
    hoursShort: "Tue–Sat · 5–11 PM",
    menuKicker: "What's on the grill",
    menuTitle: "Built loud. Loaded right.",
    menuNote: "Specific items and prices: ask in person.",
    ask: "Ask in person",
    cats: [
      ["Classic hotdogs", "The street standard — a grilled dog in a soft bun, dressed the way you like it."],
      ["Loaded hotdogs", "Stacked with toppings until the bun can barely hold it."],
      ["Sausages", "Bigger, bolder grilled sausages for serious appetites."],
      ["Toppings & sauces", "Ketchup, mustard, mayo, jalapeños and more — build your bite."],
    ],
    galleryKicker: "Off the griddle",
    galleryTitle: "Made to be messy.",
    galleryNote: "Illustrative food photography. See the real deal on Instagram.",
    aboutKicker: "The Winnieman",
    aboutTitle: "Street food with a whole lot of soul.",
    aboutBody:
      "Hotdogs the Winnieman is a street-style hotdog spot in Van Nuys. No frills, no fuss — just hot dogs and sausages loaded with the toppings you crave, ready when the sun goes down.",
    follow: "Follow on Instagram",
    visitKicker: "Find us tonight",
    visitTitle: "Pull up on Vanowen.",
    address: "Address",
    hours: "Hours",
    days: [["Tuesday – Saturday", "5:00 PM – 11:00 PM"], ["Sunday – Monday", "Closed"]],
    hoursNote: "Stated schedule — check Instagram for updates.",
    getDirections: "Get directions",
    mapTitle: "Map showing Hotdogs the Winnieman location",
    footer: "Street-style hotdogs · Van Nuys, California",
    toggle: "Español",
  },
  es: {
    nav: ["Menú", "Galería", "Nosotros", "Visítanos"],
    directions: "Cómo llegar",
    kicker: "Van Nuys · Hotdogs estilo callejero",
    headline: ["GRAN SABOR.", "ALMA CALLEJERA."],
    sub: "Big flavor. Street soul.",
    lede: "Hotdogs y salchichas cargados con kétchup, mostaza, mayonesa, jalapeños y toppings — calientitos en la Vanowen cuando cae la noche.",
    cta1: "Ver el menú",
    cta2: "Encuéntranos hoy",
    hoursShort: "Mar–Sáb · 5–11 PM",
    menuKicker: "Lo que hay en la plancha",
    menuTitle: "Bien cargados. Bien sabrosos.",
    menuNote: "Productos específicos y precios: pregunta en persona.",
    ask: "Pregunta en persona",
    cats: [
      ["Hotdogs clásicos", "El clásico de la calle — salchicha a la plancha en pan suave, preparado a tu gusto."],
      ["Hotdogs cargados", "Con tantos toppings que el pan apenas aguanta."],
      ["Salchichas", "Salchichas más grandes y atrevidas para el hambre en serio."],
      ["Toppings y salsas", "Kétchup, mostaza, mayonesa, jalapeños y más — arma tu mordida."],
    ],
    galleryKicker: "Directo de la plancha",
    galleryTitle: "Hechos para disfrutarse.",
    galleryNote: "Fotografía ilustrativa. Mira lo auténtico en Instagram.",
    aboutKicker: "El Winnieman",
    aboutTitle: "Comida callejera con mucha alma.",
    aboutBody:
      "Hotdogs the Winnieman es un puesto de hotdogs estilo callejero en Van Nuys. Sin complicaciones — solo hotdogs y salchichas cargados con los toppings que se te antojan, listos cuando se pone el sol.",
    follow: "Síguenos en Instagram",
    visitKicker: "Encuéntranos hoy",
    visitTitle: "Llégale a la Vanowen.",
    address: "Dirección",
    hours: "Horario",
    days: [["Martes – Sábado", "5:00 PM – 11:00 PM"], ["Domingo – Lunes", "Cerrado"]],
    hoursNote: "Horario indicado — revisa Instagram para novedades.",
    getDirections: "Cómo llegar",
    mapTitle: "Mapa con la ubicación de Hotdogs the Winnieman",
    footer: "Hotdogs estilo callejero · Van Nuys, California",
    toggle: "English",
  },
} as const;

const ids = ["menu", "gallery", "about", "visit"];

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [scrolled, setScrolled] = useState(false);
  const c = t[lang];

  useEffect(() => {
    const saved = localStorage.getItem("wm-lang");
    if (saved === "es" || saved === "en") setLang(saved);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("wm-lang", lang);
  }, [lang]);

  const toggle = (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
      className="flex items-center rounded-full border border-border p-0.5 text-xs font-bold tracking-widest"
    >
      {(["en", "es"] as const).map((l) => (
        <span
          key={l}
          className={`rounded-full px-3 py-1.5 transition-colors ${lang === l ? "bg-mustard text-mustard-foreground" : "text-muted-foreground"}`}
        >
          {l.toUpperCase()}
        </span>
      ))}
    </button>
  );

  return (
    <div className="grain min-h-screen overflow-x-hidden pb-20 md:pb-0">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-mustard focus:px-4 focus:py-2 focus:text-mustard-foreground">
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8" aria-label="Main">
          <a href="#top" className="font-display text-xl leading-none tracking-wide">
            HOTDOGS <span className="font-serif italic text-mustard normal-case">the</span>{" "}
            <span className="text-primary neon-red animate-flicker">WINNIEMAN</span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {c.nav.map((n, i) => (
              <li key={n}>
                <a href={`#${ids[i]}`} className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-mustard">
                  {n}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {toggle}
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="hidden rounded-sm bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:glow-red md:inline-block">
              {c.directions}
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="top" className="relative flex min-h-[100svh] items-end md:items-center">
          <img src={hero} alt="Close-up of a loaded hotdog with ketchup, mustard, mayo, jalapeños and grilled onions" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
          <div className="absolute inset-0 bg-hero-fade" />
          <div className="absolute inset-0 bg-bottom-fade" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8">
            <p key={lang + "k"} className="animate-rise mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-mustard">
              <span className="h-px w-10 bg-mustard" /> {c.kicker}
            </p>
            <h1 key={lang} className="animate-rise font-display text-[18vw] leading-[0.85] tracking-tight md:text-[9rem]">
              <span className="block">{c.headline[0]}</span>
              <span className="block text-primary neon-red">{c.headline[1]}</span>
            </h1>
            <p className="mt-4 font-serif text-3xl italic text-mustard md:text-4xl">{c.sub}</p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">{c.lede}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#menu" className="group rounded-sm bg-mustard px-7 py-4 text-center font-bold uppercase tracking-wider text-mustard-foreground transition hover:-translate-y-0.5 hover:glow-mustard">
                {c.cta1} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#visit" className="rounded-sm border border-foreground/40 px-7 py-4 text-center font-bold uppercase tracking-wider transition hover:border-primary hover:text-primary">
                {c.cta2}
              </a>
            </div>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary glow-red" />
              {c.hoursShort} · 15244 Vanowen St
            </p>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="overflow-hidden border-y border-border bg-primary py-4 text-primary-foreground" aria-hidden="true">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl tracking-wide">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              ["KETCHUP", "MUSTARD", "MAYO", "JALAPEÑOS", "VAN NUYS", "TUE–SAT", "5–11 PM", "MOSTAZA", "STREET SOUL"].map((w, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-10">{w}<span className="text-mustard">✶</span></span>
              )),
            )}
          </div>
        </div>

        {/* MENU */}
        <section id="menu" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
          <SectionHead kicker={c.menuKicker} title={c.menuTitle} />
          <p className="mt-4 max-w-xl text-muted-foreground">{c.menuNote}</p>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {c.cats.map(([name, desc], i) => (
              <li key={name} className="group relative bg-background p-8 transition-colors hover:bg-card md:p-10">
                <span className="font-display text-6xl text-stroke opacity-40 transition-opacity group-hover:opacity-100">0{i + 1}</span>
                <h3 className="mt-4 font-display text-3xl tracking-wide transition-colors group-hover:text-mustard md:text-4xl">{name}</h3>
                <p className="mt-3 max-w-sm text-muted-foreground">{desc}</p>
                <p className="mt-6 inline-flex items-center gap-2 border-t border-dashed border-border pt-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {c.ask}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="scroll-mt-20 bg-coal py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHead kicker={c.galleryKicker} title={c.galleryTitle} />
            <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-2">
              <Figure src={g2} w={1024} h={1280} alt="Grilled sausage topped with jalapeños and mayo under neon lights" className="md:col-span-5 md:row-span-2 aspect-[4/5] md:aspect-auto" />
              <Figure src={g1} w={1024} h={1024} alt="Three loaded hotdogs with peppers, onions, mustard and ketchup" className="md:col-span-7 aspect-[4/3] md:aspect-auto" />
              <Figure src={g3} w={1280} h={1024} alt="Sausages and onions sizzling on a flat-top griddle" className="md:col-span-7 aspect-[4/3] md:aspect-auto" />
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {c.galleryNote}{" "}
              <a href={IG} target="_blank" rel="noopener noreferrer" className="text-mustard underline underline-offset-4 hover:text-primary">@hotdog_the_winnieman_22</a>
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto grid max-w-7xl scroll-mt-20 gap-12 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
          <div className="md:col-span-5">
            <p className="font-display text-[28vw] leading-none text-primary neon-red md:text-[12rem]" aria-hidden="true">W</p>
          </div>
          <div className="md:col-span-7 md:pt-8">
            <SectionHead kicker={c.aboutKicker} title={c.aboutTitle} />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.aboutBody}</p>
            <a href={IG} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-sm border border-mustard px-6 py-3 font-bold uppercase tracking-wider text-mustard transition hover:bg-mustard hover:text-mustard-foreground">
              <InstaIcon /> {c.follow}
            </a>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" className="scroll-mt-20 border-t border-border bg-coal">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
            <div>
              <SectionHead kicker={c.visitKicker} title={c.visitTitle} />
              <dl className="mt-12 space-y-10">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.25em] text-mustard">{c.address}</dt>
                  <dd className="mt-3 font-display text-3xl tracking-wide">
                    <address className="not-italic">15244 Vanowen St<br />Van Nuys, CA 91405</address>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.25em] text-mustard">{c.hours}</dt>
                  <dd className="mt-3 space-y-2">
                    {c.days.map(([d, h], i) => (
                      <div key={d} className="flex justify-between gap-6 border-b border-dashed border-border pb-2 text-lg">
                        <span>{d}</span>
                        <span className={i === 0 ? "font-bold text-foreground" : "text-muted-foreground"}>{h}</span>
                      </div>
                    ))}
                    <p className="pt-2 text-sm text-muted-foreground">{c.hoursNote}</p>
                  </dd>
                </div>
              </dl>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-primary px-7 py-4 text-center font-bold uppercase tracking-wider text-primary-foreground transition hover:-translate-y-0.5 hover:glow-red">
                  {c.getDirections} ↗
                </a>
                <a href={IG} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm border border-foreground/40 px-7 py-4 font-bold uppercase tracking-wider transition hover:border-mustard hover:text-mustard">
                  <InstaIcon /> Instagram
                </a>
              </div>
            </div>
            <div className="min-h-[380px] overflow-hidden rounded-sm border border-border">
              <iframe title={c.mapTitle} src={EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[380px] w-full grayscale invert-[0.9] hue-rotate-180 contrast-90" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-display text-2xl tracking-wide">HOTDOGS <span className="font-serif italic normal-case text-mustard">the</span> WINNIEMAN</p>
          <p className="text-sm text-muted-foreground">{c.footer}</p>
          <a href={IG} target="_blank" rel="noopener noreferrer" className="text-sm text-mustard hover:text-primary">@hotdog_the_winnieman_22</a>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-sm bg-primary py-3.5 text-center font-bold uppercase tracking-wider text-primary-foreground glow-red">
          📍 {c.getDirections}
        </a>
        <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center rounded-sm border border-border px-4 text-mustard">
          <InstaIcon />
        </a>
      </div>
    </div>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-mustard">
        <span className="h-px w-10 bg-mustard" /> {kicker}
      </p>
      <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">{title}</h2>
    </div>
  );
}

function Figure({ src, alt, w, h, className = "" }: { src: string; alt: string; w: number; h: number; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden rounded-sm ${className}`}>
      <img src={src} alt={alt} width={w} height={h} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border transition group-hover:ring-primary/60" />
    </figure>
  );
}

function InstaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
