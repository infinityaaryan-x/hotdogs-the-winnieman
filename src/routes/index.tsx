import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import hero from "@/assets/hero-hotdog.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import { BUSINESS, MAPS_URL, MAPS_EMBED } from "@/lib/business";

const TITLE = "Hotdogs the Winnieman — Loaded Street Hotdogs · Van Nuys, CA";
const DESC =
  "Loaded street-style hotdogs on Vanowen St in Van Nuys. Tue–Sat, 5–11 PM. Hotdogs callejeros cargados — algo bien y fresh todos los días.";

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
  }),
  component: Index,
});

type Lang = "en" | "es";
const ids = ["menu", "gallery", "about", "visit"] as const;

const t = {
  en: {
    nav: ["Menu", "Gallery", "About", "Visit"],
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    findUs: "Find Us",
    viewMenu: "View Menu",
    kicker: "Van Nuys · Los Angeles street food",
    headline: ["BIG FLAVOR.", "STREET SOUL."],
    sub: "Gran sabor. Alma callejera.",
    lede: "Loaded hotdogs with ketchup, mustard, mayo, jalapeños and grilled toppings — hot off the griddle on Vanowen, Tuesday to Saturday nights.",
    tonight: "Tue–Sat · 5–11 PM",
    menuKicker: "Menu preview",
    menuTitle: "Loaded. Layered. Made to order.",
    menuBadge: "Visual preview — full menu & prices available in store",
    menuNote: "This is a visual preview based on photos shared on Instagram. Ask in person for today's options and prices.",
    ask: "Ask in person",
    cats: [
      { name: "Loaded hotdogs", desc: "Grilled dogs piled high with toppings.", img: g4 },
      { name: "Grilled sausages", desc: "Bigger bites straight off the flat-top.", img: g2 },
      { name: "Toppings & sauces", desc: "Ketchup, mustard, mayo, jalapeños, grilled onions.", img: g5 },
    ],
    galleryKicker: "Gallery",
    galleryTitle: "Off the griddle.",
    galleryNote: "Concept photography for this preview — real photos to come from the owner.",
    viewPhoto: "View photo",
    close: "Close",
    prev: "Previous photo",
    next: "Next photo",
    aboutKicker: "About",
    aboutTitle: "Something good and fresh, every day.",
    aboutBody:
      "That's the whole idea behind Hotdogs the Winnieman — in their own words, “algo bien y fresh todos los días.” Street-style hotdogs, loaded the way you like, served up on Vanowen St in Van Nuys.",
    follow: "Follow on Instagram",
    visitKicker: "Visit",
    visitTitle: "Find us tonight.",
    address: "Address",
    hours: "Hours",
    hoursDays: "Tuesday – Saturday",
    hoursTime: "5:00 PM – 11:00 PM",
    hoursNote: "Hours as listed on Instagram. Check there for updates.",
    mapsCta: "Open in Google Maps",
    mapsNote: "Map search for the address above.",
    mapTitle: "Map search for 15244 Vanowen St, Van Nuys",
    igTitle: "See what's on the griddle.",
    igBody: "Fresh photos and updates live on Instagram.",
    footerNav: "Explore",
    footerVisit: "Visit",
    footerFollow: "Follow",
    concept: "Concept website preview. Business details pending owner confirmation.",
    langLabel: "Cambiar a español",
  },
  es: {
    nav: ["Menú", "Galería", "Nosotros", "Visítanos"],
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skip: "Saltar al contenido",
    findUs: "Encuéntranos",
    viewMenu: "Ver menú",
    kicker: "Van Nuys · Comida callejera de Los Ángeles",
    headline: ["GRAN SABOR.", "ALMA CALLEJERA."],
    sub: "Big flavor. Street soul.",
    lede: "Hotdogs cargados con kétchup, mostaza, mayonesa, jalapeños y toppings a la plancha — calientitos en la Vanowen, de martes a sábado en la noche.",
    tonight: "Mar–Sáb · 5–11 PM",
    menuKicker: "Vista previa del menú",
    menuTitle: "Cargados. Bien armados. Al momento.",
    menuBadge: "Vista previa — menú completo y precios en el local",
    menuNote: "Esta es una vista previa basada en fotos compartidas en Instagram. Pregunta en persona por las opciones y precios del día.",
    ask: "Pregunta en persona",
    cats: [
      { name: "Hotdogs cargados", desc: "Salchichas a la plancha con muchos toppings.", img: g4 },
      { name: "Salchichas a la plancha", desc: "Mordidas más grandes, directo de la plancha.", img: g2 },
      { name: "Toppings y salsas", desc: "Kétchup, mostaza, mayonesa, jalapeños, cebolla asada.", img: g5 },
    ],
    galleryKicker: "Galería",
    galleryTitle: "Directo de la plancha.",
    galleryNote: "Fotografía conceptual para esta vista previa — las fotos reales vendrán del dueño.",
    viewPhoto: "Ver foto",
    close: "Cerrar",
    prev: "Foto anterior",
    next: "Foto siguiente",
    aboutKicker: "Nosotros",
    aboutTitle: "Algo bien y fresh, todos los días.",
    aboutBody:
      "Esa es la idea detrás de Hotdogs the Winnieman — en sus propias palabras, “algo bien y fresh todos los días.” Hotdogs estilo callejero, cargados a tu gusto, en la Vanowen St en Van Nuys.",
    follow: "Síguenos en Instagram",
    visitKicker: "Visítanos",
    visitTitle: "Encuéntranos hoy.",
    address: "Dirección",
    hours: "Horario",
    hoursDays: "Martes – Sábado",
    hoursTime: "5:00 PM – 11:00 PM",
    hoursNote: "Horario según Instagram. Revisa ahí para novedades.",
    mapsCta: "Abrir en Google Maps",
    mapsNote: "Búsqueda en el mapa de la dirección indicada.",
    mapTitle: "Búsqueda en el mapa de 15244 Vanowen St, Van Nuys",
    igTitle: "Mira lo que hay en la plancha.",
    igBody: "Fotos y novedades en Instagram.",
    footerNav: "Explora",
    footerVisit: "Visítanos",
    footerFollow: "Síguenos",
    concept: "Vista previa conceptual del sitio. Datos del negocio pendientes de confirmación del dueño.",
    langLabel: "Switch to English",
  },
} as const;

const gallery = [
  { src: g4, alt: { en: "Loaded hotdog with jalapeños, ketchup, mustard and mayo held in paper", es: "Hotdog cargado con jalapeños, kétchup, mostaza y mayonesa en papel" } },
  { src: g1, alt: { en: "Three loaded hotdogs with peppers and onions", es: "Tres hotdogs cargados con chiles y cebolla" } },
  { src: g3, alt: { en: "Sausages and onions on a flat-top griddle", es: "Salchichas y cebolla en la plancha" } },
  { src: g2, alt: { en: "Grilled sausage with jalapeños and mayo under neon lights", es: "Salchicha a la plancha con jalapeños y mayonesa bajo luces de neón" } },
  { src: g5, alt: { en: "Hotdog with grilled onions, mustard and ketchup", es: "Hotdog con cebolla asada, mostaza y kétchup" } },
  { src: hero, alt: { en: "Close-up of a loaded hotdog with jalapeños and sauces", es: "Primer plano de un hotdog cargado con jalapeños y salsas" } },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const c = t[lang];
  useReveal();

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

  const step = useCallback((d: number) => setLightbox((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)), []);
  useEffect(() => {
    if (lightbox === null && !menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setLightbox(null); setMenuOpen(false); }
      if (lightbox !== null && e.key === "ArrowRight") step(1);
      if (lightbox !== null && e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [lightbox, menuOpen, step]);

  const LangToggle = (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      aria-label={c.langLabel}
      className="flex items-center rounded-full border border-border p-0.5 text-xs font-bold tracking-widest transition hover:border-mustard"
    >
      {(["en", "es"] as const).map((l) => (
        <span key={l} className={`rounded-full px-3 py-1.5 transition-colors duration-300 ${lang === l ? "bg-mustard text-mustard-foreground" : "text-muted-foreground"}`}>
          {l.toUpperCase()}
        </span>
      ))}
    </button>
  );

  return (
    <div className="grain min-h-screen overflow-x-hidden pb-20 md:pb-0">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-mustard focus:px-4 focus:py-2 focus:text-mustard-foreground">
        {c.skip}
      </a>

      {/* NAV */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || menuOpen ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8" aria-label="Main">
          <a href="#top" className="font-display text-xl leading-none tracking-wide" onClick={() => setMenuOpen(false)}>
            HOTDOGS <span className="font-serif normal-case italic text-mustard">the</span>{" "}
            <span className="animate-flicker text-primary neon-red">WINNIEMAN</span>
          </a>
          <ul className="hidden items-center gap-8 lg:flex">
            {c.nav.map((n, i) => (
              <li key={ids[i]}>
                <a href={`#${ids[i]}`} className="group relative text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">
                  {n}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-mustard transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {LangToggle}
            <a href="#visit" className="hidden rounded-sm bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:glow-red lg:inline-block">
              {c.findUs}
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? c.closeMenu : c.openMenu}
              className="relative h-10 w-10 lg:hidden"
            >
              <span className={`absolute left-2 right-2 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "top-[19px] rotate-45" : "top-[13px]"}`} />
              <span className={`absolute left-2 right-2 top-[19px] h-0.5 bg-mustard transition-all duration-300 ${menuOpen ? "scale-x-0 opacity-0" : ""}`} />
              <span className={`absolute left-2 right-2 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "top-[19px] -rotate-45" : "top-[25px]"}`} />
            </button>
          </div>
        </nav>
        <div
          id="mobile-menu"
          className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out lg:hidden ${menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <ul className="min-h-0 px-5">
            {c.nav.map((n, i) => (
              <li key={ids[i]} className={`border-t border-border transition-all duration-500 ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`} style={{ transitionDelay: menuOpen ? `${i * 60 + 100}ms` : "0ms" }}>
                <a href={`#${ids[i]}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between py-5 font-display text-4xl tracking-wide hover:text-mustard">
                  {n} <span className="text-base text-primary">0{i + 1}</span>
                </a>
              </li>
            ))}
            <li className="pb-6" />
          </ul>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden md:items-center">
          <img src={hero} alt="" width={1600} height={1104} fetchPriority="high" className="animate-zoomin absolute inset-0 h-full w-full object-cover object-[70%_center]" />
          <div className="absolute inset-0 bg-hero-fade" />
          <div className="absolute inset-0 bg-bottom-fade" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pb-0">
            <p className="animate-rise mb-6 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-mustard md:text-xs">
              <span className="h-px w-10 bg-mustard" /> {c.kicker}
            </p>
            <h1 key={lang} className="animate-rise font-display text-[15vw] leading-[0.86] tracking-tight sm:text-[12vw] lg:text-[8.5rem]">
              <span className="sr-only">{BUSINESS.name} — </span>
              <span className="block">{c.headline[0]}</span>
              <span className="block text-primary neon-red">{c.headline[1]}</span>
            </h1>
            <p className="animate-rise mt-4 font-serif text-2xl italic text-mustard md:text-4xl" style={{ animationDelay: ".15s" }}>{c.sub}</p>
            <p className="animate-rise mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg" style={{ animationDelay: ".25s" }}>{c.lede}</p>
            <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: ".35s" }}>
              <a href="#menu" className="group rounded-sm bg-mustard px-8 py-4 text-center font-bold uppercase tracking-wider text-mustard-foreground transition hover:-translate-y-0.5 hover:glow-mustard">
                {c.viewMenu} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#visit" className="rounded-sm border border-foreground/40 px-8 py-4 text-center font-bold uppercase tracking-wider transition hover:border-primary hover:text-primary">
                {c.findUs}
              </a>
            </div>
            <p className="mt-8 flex items-center text-xs uppercase tracking-[0.2em] text-muted-foreground md:text-sm">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary glow-red" />
              {c.tonight} · 15244 Vanowen St
            </p>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="overflow-hidden border-y border-border bg-primary py-4 text-primary-foreground" aria-hidden="true">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl tracking-wide">
            {[0, 1].flatMap((k) =>
              ["ALGO BIEN Y FRESH", "KETCHUP", "MOSTAZA", "MAYO", "JALAPEÑOS", "VAN NUYS", "TUE–SAT · 5–11 PM"].map((w, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-10">{w}<span className="text-mustard">✶</span></span>
              )),
            )}
          </div>
        </div>

        {/* MENU — cream */}
        <section id="menu" className="scroll-mt-16 bg-cream text-cream-foreground">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
            <div className="reveal flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionHead kicker={c.menuKicker} title={c.menuTitle} light />
              <p className="inline-flex max-w-xs items-center gap-2 self-start rounded-full border border-cream-foreground/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] md:self-end">
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary" /> {c.menuBadge}
              </p>
            </div>
            <ul className="mt-14 grid gap-6 md:grid-cols-3">
              {c.cats.map((cat, i) => (
                <li key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <article className="h-full overflow-hidden rounded-sm bg-background text-foreground transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img src={cat.img} alt="" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute left-4 top-4 font-display text-5xl text-mustard drop-shadow-lg">0{i + 1}</span>
                    </div>
                    <div className="p-6 md:p-7">
                      <h3 className="font-display text-3xl tracking-wide transition-colors group-hover:text-mustard">{cat.name}</h3>
                      <p className="mt-2 text-muted-foreground">{cat.desc}</p>
                      <p className="mt-5 border-t border-dashed border-border pt-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">{c.ask}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
            <p className="reveal mt-10 max-w-2xl text-cream-muted">{c.menuNote}</p>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="scroll-mt-16 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="reveal"><SectionHead kicker={c.galleryKicker} title={c.galleryTitle} /></div>
            <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {gallery.map((g, i) => (
                <li key={i} className="reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  <button onClick={() => setLightbox(i)} aria-label={`${c.viewPhoto}: ${g.alt[lang]}`} className="group relative block aspect-square w-full overflow-hidden rounded-sm focus-visible:outline-2 focus-visible:outline-mustard">
                    <img src={g.src} alt={g.alt[lang]} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110" />
                    <span className="absolute inset-0 ring-1 ring-inset ring-border transition group-hover:ring-2 group-hover:ring-primary" />
                    <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-lg opacity-0 transition group-hover:opacity-100">+</span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">{c.galleryNote}</p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-16 border-t border-border bg-coal">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
            <blockquote className="reveal md:col-span-6">
              <p className="font-serif text-5xl italic leading-[1.05] text-mustard md:text-7xl">“{BUSINESS.bio}”</p>
              <footer className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">— Instagram · {BUSINESS.instagramHandle}</footer>
            </blockquote>
            <div className="reveal md:col-span-6">
              <SectionHead kicker={c.aboutKicker} title={c.aboutTitle} />
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.aboutBody}</p>
              <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-sm border border-mustard px-6 py-3 font-bold uppercase tracking-wider text-mustard transition hover:bg-mustard hover:text-mustard-foreground">
                <InstaIcon /> {c.follow}
              </a>
            </div>
          </div>
        </section>

        {/* VISIT — cream */}
        <section id="visit" className="scroll-mt-16 bg-cream text-cream-foreground">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
            <div className="reveal">
              <SectionHead kicker={c.visitKicker} title={c.visitTitle} light />
              <dl className="mt-12 space-y-10">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{c.address}</dt>
                  <dd className="mt-3 font-display text-3xl leading-tight tracking-wide md:text-4xl">
                    <address className="not-italic">{BUSINESS.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</address>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{c.hours}</dt>
                  <dd className="mt-3">
                    <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-dashed border-cream-foreground/30 pb-3 text-lg">
                      <span>{c.hoursDays}</span>
                      <span className="font-bold">{c.hoursTime}</span>
                    </div>
                    <p className="pt-3 text-sm text-cream-muted">{c.hoursNote}</p>
                  </dd>
                </div>
              </dl>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-10 inline-block rounded-sm bg-primary px-8 py-4 text-center font-bold uppercase tracking-wider text-primary-foreground transition hover:-translate-y-0.5 hover:glow-red">
                {c.mapsCta} ↗
              </a>
              <p className="mt-3 text-sm text-cream-muted">{c.mapsNote}</p>
            </div>
            <div className="reveal min-h-[360px] overflow-hidden rounded-sm border border-cream-foreground/20">
              <iframe title={c.mapTitle} src={MAPS_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[360px] w-full grayscale" />
            </div>
          </div>
        </section>

        {/* INSTAGRAM CTA */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="reveal mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-center md:px-8">
            <div>
              <h2 className="font-display text-5xl leading-none tracking-tight md:text-7xl">{c.igTitle}</h2>
              <p className="mt-4 text-lg opacity-90">{c.igBody}</p>
            </div>
            <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-3 rounded-sm bg-background px-7 py-4 font-bold uppercase tracking-wider text-foreground transition hover:-translate-y-0.5 hover:bg-mustard hover:text-mustard-foreground">
              <InstaIcon /> {BUSINESS.instagramHandle}
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 pb-10 pt-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-3xl leading-none tracking-wide">HOTDOGS <span className="font-serif normal-case italic text-mustard">the</span><br /><span className="text-primary">WINNIEMAN</span></p>
            <p className="mt-4 font-serif text-lg italic text-muted-foreground">{BUSINESS.bio}</p>
          </div>
          <FooterCol title={c.footerNav}>
            {c.nav.map((n, i) => <li key={ids[i]}><a href={`#${ids[i]}`} className="hover:text-mustard">{n}</a></li>)}
          </FooterCol>
          <FooterCol title={c.footerVisit}>
            <li><address className="not-italic">{BUSINESS.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</address></li>
            <li className="pt-2">{c.hoursDays}<br />{c.hoursTime}</li>
            <li className="pt-2"><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-mustard hover:text-primary">{c.mapsCta} ↗</a></li>
          </FooterCol>
          <FooterCol title={c.footerFollow}>
            <li><a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-mustard"><InstaIcon /> {BUSINESS.instagramHandle}</a></li>
          </FooterCol>
        </div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {BUSINESS.name}</p>
          <p>{c.concept}</p>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-sm bg-primary py-3.5 text-center font-bold uppercase tracking-wider text-primary-foreground glow-red">
          {c.findUs} ↗
        </a>
        <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center rounded-sm border border-border px-4 text-mustard">
          <InstaIcon />
        </a>
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div role="dialog" aria-modal="true" aria-label={gallery[lightbox].alt[lang]} className="animate-in fade-in fixed inset-0 z-[70] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm duration-300" onClick={() => setLightbox(null)}>
          <img key={lightbox} src={gallery[lightbox].src} alt={gallery[lightbox].alt[lang]} className="animate-in zoom-in-95 fade-in max-h-[82vh] max-w-full rounded-sm object-contain duration-300" onClick={(e) => e.stopPropagation()} />
          <button autoFocus onClick={() => setLightbox(null)} aria-label={c.close} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-border text-2xl transition hover:border-mustard hover:text-mustard">×</button>
          <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label={c.prev} className="absolute bottom-6 left-1/2 flex h-12 w-12 -translate-x-[120%] items-center justify-center rounded-full border border-border text-xl transition hover:border-mustard hover:text-mustard md:bottom-auto md:left-6 md:translate-x-0">←</button>
          <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label={c.next} className="absolute bottom-6 left-1/2 flex h-12 w-12 translate-x-[20%] items-center justify-center rounded-full border border-border text-xl transition hover:border-mustard hover:text-mustard md:bottom-auto md:left-auto md:right-6 md:translate-x-0">→</button>
          <p className="absolute left-4 top-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">{lightbox + 1} / {gallery.length}</p>
        </div>
      )}
    </div>
  );
}

function SectionHead({ kicker, title, light }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div>
      <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] ${light ? "text-primary" : "text-mustard"}`}>
        <span className={`h-px w-10 ${light ? "bg-primary" : "bg-mustard"}`} /> {kicker}
      </p>
      <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">{title}</h2>
    </div>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-mustard">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">{children}</ul>
    </div>
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
