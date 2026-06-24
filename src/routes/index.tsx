import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Play,
  ChevronRight,
  Check,
  FileText,
  Quote,
  Award,
  X,
} from "lucide-react";

import heroImgFallback from "@/assets/hero.jpg";
import drNicFallback from "@/assets/dr-nic.jpg";
import markAiFallback from "@/assets/mark-ai.jpg";
import dnaOrb from "@/assets/dna-orb.jpg";
import instrumentsImg from "@/assets/instruments.jpg";
import probeFallback from "@/assets/probe.jpg";

import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVARMED — Біозварювання тканин · Tissue Biowelding" },
      {
        name: "description",
        content:
          "SVARMED — Ukrainian electrosurgical equipment for live tissue welding. Українська технологія біозварювання живих тканин.",
      },
      { property: "og:title", content: "SVARMED — Tissue Biowelding · Біозварювання" },
      {
        property: "og:description",
        content: "Ukrainian live-tissue electrowelding technology for surgery, phlebology and veterinary.",
      },
    ],
  }),
  component: Index,
});

/* ---------- constants: external hosted assets ---------- */

const LOGO_URL = "https://svarmed.lkdm.uk/assets/catalog/logos/logo-svarmed.png";
const FACEBOOK_URL = "https://www.facebook.com/svarmed.ua";
const INSTAGRAM_URL = "https://www.instagram.com/svarmed.ua/";
const HERO_IMAGE =
  "https://drive.google.com/thumbnail?id=1rQc5AkNLWiy5bFbnJ4KjXiXHOOKgsiKW&sz=w2400";
const PROBE_IMAGE =
  "https://drive.google.com/thumbnail?id=1FcD8m2DyL1Wb99v7-uhcrKB9UJ10cxDx&sz=w1600";
const MARK_AI_PHOTO = "https://svarmed.lkdm.uk/assets/product-mark.jpg";
const DR_NIC_PHOTO = "https://svarmed.lkdm.uk/assets/product-nic.jpg";
const SURGEONS_GRID = "https://svarmed.lkdm.uk/assets/catalog/svarmed-grid-surgeons.png";

const CLINIC_LOGOS = Array.from({ length: 19 }, (_, i) =>
  `https://svarmed.lkdm.uk/assets/catalog/logos/clinic_${String(i + 1).padStart(2, "0")}.png`,
);

const PRODUCT_PHOTOS = [
  { photo: MARK_AI_PHOTO, fallback: markAiFallback },
  { photo: DR_NIC_PHOTO, fallback: drNicFallback },
];

/* ---------- atoms ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2 before:content-['('] after:content-[')']">
      <span className="px-1">{children}</span>
    </span>
  );
}

function ImageWithFallback({
  src,
  fallback,
  alt,
  className,
  ...rest
}: { src: string; fallback: string; alt: string; className?: string } & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => current !== fallback && setCurrent(fallback)}
      {...rest}
    />
  );
}

function LangSwitch({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { lang, setLang } = useLang();
  const isDark = tone === "dark";
  const baseBtn =
    "px-2.5 py-1 text-xs font-medium tracking-wider uppercase transition-colors";
  const inactive = isDark ? "text-bone/60 hover:text-bone" : "text-ink/50 hover:text-ink";
  const active = isDark ? "text-bone" : "text-ink";
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border px-1 ${
        isDark ? "border-white/25" : "border-ink/15"
      }`}
    >
      <button
        type="button"
        onClick={() => setLang("ua")}
        className={`${baseBtn} ${lang === "ua" ? active : inactive}`}
        aria-pressed={lang === "ua"}
      >
        UA
      </button>
      <span className={isDark ? "text-bone/30" : "text-ink/20"}>/</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${baseBtn} ${lang === "en" ? active : inactive}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

/* ---------- sections ---------- */

function SvarmedLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 152 39" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SVARMED">
      <path d="M15.5 28L10.3 33.2L15.5 38.4L20.7 33.2L15.5 28ZM26.9 16.6L20.7 22.8L25.9 28L31.1 22.8L26.9 16.6ZM4.2 16.6L0 22.8L5.2 28L10.4 22.8L4.2 16.6Z" />
      <path d="M15.5 0L8.39999 10.4L15.5 17.6L22.7 10.4L15.5 0Z" />
      <path d="M58.3 14.5L57 16.6C55.6 15.7 54 15.2 52.1 15.2C50.1 15.2 49.1 15.6 49.1 16.5C49.1 16.8 49.2 17.1 49.5 17.2C49.8 17.3 50.2 17.4 50.7 17.5L54.4 17.9C57.3 18.2 58.7 19.5 58.7 21.6C58.7 22.9 58.1 24 56.9 24.6C55.7 25.3 54.2 25.6 52.2 25.6C49.7 25.6 47.6 24.9 45.8 23.6L47.1 21.4C48.7 22.6 50.6 23.1 52.5 23.1C53.5 23.1 54.4 23 55 22.7C55.6 22.4 55.9 22 55.9 21.5C55.9 21.2 55.8 20.9 55.6 20.7C55.4 20.5 55 20.4 54.5 20.3L50.3 19.8C49 19.7 47.9 19.3 47.2 18.7C46.5 18.1 46.2 17.3 46.2 16.2C46.2 14.9 46.7 14 47.8 13.3C48.9 12.6 50.3 12.3 52 12.3C54.6 12.6 56.7 13.3 58.3 14.5Z" />
      <path d="M59.6 12.9H62.7L66.8 22.9H67.4L71.5 12.9H74.5L69.1 25.4H65L59.6 12.9Z" />
      <path d="M79.7 12.9H84.3L89.6 25.3H86.6L85.8 23.4H78.1L77.3 25.3H74.3L79.7 12.9ZM81.5 15.4L79.2 21H84.7L82.5 15.4H81.5Z" />
      <path d="M94.2 15.5V20H98.6C99.3 20 99.9 19.8 100.4 19.4C100.8 19 101.1 18.5 101.1 17.8C101.1 17.1 100.9 16.5 100.4 16.1C100 15.7 99.4 15.5 98.6 15.5H94.2ZM91.4 12.9H98.7C100.2 12.9 101.4 13.4 102.4 14.3C103.4 15.2 103.9 16.4 103.9 17.8C103.9 19.7 103.1 21.1 101.5 21.9L103.4 25.3H100.3L98.8 22.5H94.2V25.3H91.4V12.9Z" />
      <path d="M105.7 12.9H109.4L113.8 22H113.9L118.5 12.9H122.1V25.4H119.3V16.7H119.2L114.9 25.4H112.6L108.5 16.7H108.4V25.4H105.7V12.9Z" />
      <path d="M124.3 12.9H135.6V15.5H127.1V17.8H134.7V20.3H127.1V22.8H135.9V25.4H124.3V12.9Z" />
      <path d="M140.8 15.5V22.8H144.4C145.5 22.8 146.5 22.5 147.2 21.8C147.9 21.1 148.3 20.2 148.3 19.2C148.3 18.1 147.9 17.3 147.2 16.6C146.5 15.9 145.5 15.6 144.4 15.6H140.8V15.5ZM138 12.9H144.4C146.2 12.9 147.7 13.5 149.1 14.7C150.4 15.9 151.1 17.4 151.1 19.2C151.1 21 150.4 22.5 149.1 23.7C147.8 24.9 146.2 25.5 144.4 25.5H138V12.9Z" />
    </svg>
  );
}

function Nav() {
  const { t } = useLang();
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3 text-bone">
          <SvarmedLogo className="h-8 w-auto" />
        </a>
        <div className="flex items-center gap-3">
          <LangSwitch tone="dark" />
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/30 text-bone backdrop-blur-md hover:bg-white/10"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/30 text-bone backdrop-blur-md hover:bg-white/10"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex pill pill-light hover-lift text-sm"
            style={{ height: 48 }}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden bg-ink text-bone">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <ImageWithFallback
          src={HERO_IMAGE}
          fallback={heroImgFallback}
          alt="SVARMED — live tissue biowelding"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
      </motion.div>

      <Nav />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-6 pb-16 pt-40 md:px-10 md:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="eyebrow mb-6 flex items-center gap-3 text-bone/70"
        >
          <span className="h-px w-10 bg-bone/40" />
          {t.hero.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[clamp(2.5rem,8vw,9rem)]"
        >
          {t.hero.title1}
          <br />
          <span className="text-rose">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 max-w-2xl text-lg text-bone/75 md:text-xl"
        >
          {t.hero.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          <a href="#contact" className="pill pill-light hover-lift">
            {t.hero.cta1}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#equipment" className="pill border border-white/30 text-bone hover-lift hover:bg-white/10">
            {t.hero.cta2}
          </a>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/15 pt-8 text-bone/80 md:grid-cols-4">
          {t.hero.stats.map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl text-bone md:text-5xl">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-bone/55">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Essence() {
  const { t } = useLang();
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1240px] text-center">
        <Reveal>
          <Eyebrow>{t.essence.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mt-8 text-[clamp(1.85rem,4.6vw,4rem)] text-ink">
            {t.essence.title1} <br />
            <span className="text-rose-deep">{t.essence.title2}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-ink-soft md:text-xl">
            {t.essence.desc}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {t.essence.badges.map((label, i) => (
            <Reveal delay={i * 0.1} key={label} className="flex justify-center">
              <div className="pill pill-rose hover-lift">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-bone">
                  <Check className="h-4 w-4" />
                </span>
                {label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIsBioWelding() {
  const { t } = useLang();
  return (
    <section className="bg-ink px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>{t.what.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-6 text-[clamp(2.25rem,5vw,4.5rem)]">
              {t.what.title1} <br /> <span className="text-rose">{t.what.title2}</span>
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal>
            <p className="max-w-xl text-lg text-bone/75 md:text-xl">{t.what.desc}</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
            {t.what.points.map((p, i) => (
              <Reveal key={p} delay={i * 0.08}>
                <div className="group flex h-full items-start gap-4 bg-ink p-8 transition-colors hover:bg-white/[0.04]">
                  <span className="font-display text-xs text-rose">0{i + 1}</span>
                  <span className="text-base md:text-lg">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  const { t } = useLang();
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>{t.adv.eyebrow}</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)] text-ink">
              {t.adv.title1}
              <br /> {t.adv.title2}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base text-ink-soft md:text-lg">{t.adv.desc}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.adv.cards.map((c, i) => (
            <Reveal key={c} delay={(i % 4) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-rose hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.3)]">
                <div className="font-display text-xs text-rose-deep">0{i + 1}</div>
                <div className="mt-12 text-xl text-ink md:text-2xl">{c}</div>
                <ArrowUpRight className="absolute right-6 top-6 h-4 w-4 text-ink/40 transition-transform group-hover:rotate-45 group-hover:text-ink" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

type ProductView = ReturnType<typeof useLang>["t"]["equipment"]["products"][number] & {
  photo: string;
  fallback: string;
};

function ProductModal({
  product,
  onClose,
}: {
  product: ProductView;
  onClose: () => void;
}) {
  const { t } = useLang();
  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/80 p-0 backdrop-blur-sm md:items-center md:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-bone p-6 text-ink md:rounded-3xl md:p-12"
      >
        <button
          onClick={onClose}
          aria-label={t.equipment.close}
          className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-ink text-bone hover:bg-ink-soft"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-center justify-between gap-4">
          <span className="eyebrow">{product.tier}</span>
          <span className="font-display text-xl">{product.name}</span>
        </div>
        <h3 className="display mt-4 text-[clamp(1.5rem,3vw,2.5rem)]">{product.modal.title}</h3>
        <p className="mt-6 max-w-2xl text-base text-ink-soft md:text-lg">{product.modal.body}</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="eyebrow mb-4">{t.equipment.advHeader}</h4>
            <ul className="space-y-2">
              {product.modal.advantages.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm md:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-rose-deep" /> {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-4">{t.equipment.specHeader}</h4>
            <dl className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
              {Object.entries(product.modal.spec_table).map(([k, v]) => (
                <div key={k} className="flex items-center justify-between px-4 py-3 text-sm">
                  <dt className="text-ink-soft">{k}</dt>
                  <dd className="font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-rose/30 p-5 text-sm text-ink md:text-base">
          <div className="flex items-start gap-3">
            <Award className="mt-1 h-4 w-4 shrink-0" />
            <span>{product.modal.cert}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" onClick={onClose} className="pill pill-dark hover-lift">
            {t.equipment.cta} <ArrowUpRight className="h-4 w-4" />
          </a>
          <button onClick={onClose} className="pill pill-light hover-lift">
            {t.equipment.close}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function Equipment() {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const products: ProductView[] = t.equipment.products.map((p, i) => ({
    ...p,
    photo: PRODUCT_PHOTOS[i].photo,
    fallback: PRODUCT_PHOTOS[i].fallback,
  }));
  return (
    <section id="equipment" className="bg-ink px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <Eyebrow>{t.equipment.eyebrow}</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2.5rem,7vw,7rem)]">
            {t.equipment.title1} <span className="text-rose">{t.equipment.title2}</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 ring-1 ring-white/10 transition-all hover:ring-rose/50">
                <div className="flex items-center justify-between">
                  <span className="pill pill-light text-sm" style={{ height: 40, padding: "0 1rem" }}>
                    {p.name}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-rose">{p.tier}</span>
                </div>

                <div className="relative my-8 aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
                  <ImageWithFallback
                    src={p.photo}
                    fallback={p.fallback}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <p className="text-lg text-bone/85 md:text-xl">{p.highlight}</p>
                <p className="mt-3 text-sm text-bone/60">{p.short}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="pill pill-rose hover-lift text-sm" style={{ height: 52 }}>
                    {t.equipment.cta}
                  </a>
                  <button
                    onClick={() => setOpenIdx(i)}
                    className="pill border border-white/20 text-bone hover-lift text-sm"
                    style={{ height: 52 }}
                  >
                    {t.equipment.detail} <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {openIdx !== null && (
        <ProductModal product={products[openIdx]} onClose={() => setOpenIdx(null)} />
      )}
    </section>
  );
}

function InstrumentsCatalog() {
  const { t } = useLang();
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>{t.instruments.eyebrow}</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2rem,5vw,4.5rem)] text-ink">
              {t.instruments.title1}
              <br />
              <span className="text-rose-deep">{t.instruments.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-3xl">
              <img
                src={instrumentsImg}
                alt={t.instruments.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {t.instruments.cats.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <li className="group flex cursor-pointer items-center justify-between py-6 transition-colors hover:text-rose-deep">
                  <span className="flex items-baseline gap-6">
                    <span className="font-display text-xs text-ink/40">0{i + 1}</span>
                    <span className="text-2xl text-ink group-hover:text-rose-deep md:text-3xl">{c}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink/40 transition-all group-hover:rotate-45 group-hover:text-rose-deep" />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function EVEZ() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-glow/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <Reveal>
          <Eyebrow>{t.evez.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mt-6 text-[clamp(2.5rem,8vw,8rem)]">
            {t.evez.t1}
            <br />
            {t.evez.t2}<span className="text-rose">{t.evez.t3}</span>
            <br /> {t.evez.t4}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-xl text-bone/80 md:text-2xl">{t.evez.desc}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="eyebrow mt-12">{t.evez.advHeader}</h3>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {t.evez.advs.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm md:text-base"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-rose" /> {a}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="eyebrow mt-12">{t.evez.clinicalHeader}</h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {t.evez.clinical.map(([n, l]) => (
                  <div key={l} className="rounded-2xl border border-white/10 p-6">
                    <div className="font-display text-2xl text-rose md:text-4xl">{n}</div>
                    <div className="mt-2 text-sm text-bone/65">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <a href="#contact" className="pill pill-rose hover-lift mt-10 inline-flex">
                {t.evez.cta} <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="overflow-hidden rounded-3xl"
            >
              <ImageWithFallback
                src={PROBE_IMAGE}
                fallback={probeFallback}
                alt={t.evez.imgAlt}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Directions() {
  const { t } = useLang();
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <Eyebrow>{t.directions.eyebrow}</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)] text-ink">
            {t.directions.title1} <span className="text-rose-deep">{t.directions.title2}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">{t.directions.desc}</p>
        </Reveal>

        <div className="mt-16 flex flex-wrap gap-3">
          {t.directions.items.map((it, i) => (
            <Reveal delay={i * 0.04} key={it}>
              <button className="pill pill-light hover-lift">
                {it} <ArrowUpRight className="h-4 w-4 opacity-50" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const { t } = useLang();
  const row = [...CLINIC_LOGOS, ...CLINIC_LOGOS];
  return (
    <section className="overflow-hidden border-y border-ink/10 bg-bone py-10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <p className="mb-7 text-center text-xs uppercase tracking-[0.3em] text-ink-soft">
            {t.trusted.label}
          </p>
        </Reveal>
      </div>
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]">
        <motion.div
          className="flex w-max items-center gap-14 md:gap-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 55, ease: "linear", repeat: Infinity }}
        >
          {row.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={t.trusted.alt((i % CLINIC_LOGOS.length) + 1)}
              loading="lazy"
              className="h-16 w-auto max-w-[220px] shrink-0 object-contain"
              onError={(e) => (e.currentTarget.style.visibility = "hidden")}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section className="bg-ink px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-6 text-[clamp(2rem,5vw,5rem)]">
              {t.about.title1}
              <br /> {t.about.title2}
              <br /> <span className="text-rose">{t.about.title3}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-lg text-bone/70">{t.about.desc}</p>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={dnaOrb}
                alt="SVARMED Mark AI та dr.Nic — апарати біозварювання тканин"
                width={1400}
                height={1120}
                loading="lazy"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </Reveal>
          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {t.about.points.map((p, i) => (
              <Reveal key={p} delay={i * 0.06}>
                <li className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-sm text-bone/80">
                  <Check className="h-4 w-4 text-rose" /> {p}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function VideoGallery() {
  const { t } = useLang();
  const [active, setActive] = useState<string>("__all");
  const [playing, setPlaying] = useState<string | null>(null);
  const cats = ["__all", ...Array.from(new Set(t.videos.list.map((v) => v.cat)))];
  const list = active === "__all" ? t.videos.list : t.videos.list.filter((v) => v.cat === active);
  const catLabel = (k: string) => (k === "__all" ? t.videos.all : t.videos.cats[k] ?? k);

  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>{t.videos.eyebrow}</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)] text-ink">
              {t.videos.title1} <span className="text-rose-deep">{t.videos.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base text-ink-soft md:text-lg">{t.videos.desc}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`pill text-sm ${active === c ? "pill-dark" : "pill-light"} hover-lift`}
                style={{ height: 44, padding: "0 1.125rem" }}
              >
                {catLabel(c)}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((v, i) => (
            <Reveal key={v.id} delay={(i % 3) * 0.08}>
              <button
                onClick={() => setPlaying(v.id)}
                className="group relative block aspect-video w-full overflow-hidden rounded-3xl bg-ink"
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={`${t.videos.altPrefix} ${catLabel(v.cat)}`}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition-all group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-bone/95 text-ink transition-transform group-hover:scale-110">
                    <Play className="h-5 w-5 fill-ink" />
                  </span>
                </span>
                <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-xs text-bone backdrop-blur">
                  {catLabel(v.cat)}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {playing && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setPlaying(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPlaying(null)}
              aria-label={t.videos.close}
              className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full bg-bone text-ink"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-video overflow-hidden rounded-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${playing}?autoplay=1`}
                title="SVARMED video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Doctors() {
  const { t } = useLang();
  return (
    <section className="bg-ink px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <Eyebrow>{t.doctors.eyebrow}</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)]">
            {t.doctors.title1} <br /> <span className="text-rose">{t.doctors.title2}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-4 md:p-8">
            <img
              src={SURGEONS_GRID}
              alt={t.doctors.alt}
              loading="lazy"
              className="w-full"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.opacity = "0.4";
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex items-center gap-3 text-bone/60">
            <Quote className="h-5 w-5 text-rose" />
            <p className="text-sm md:text-base">{t.doctors.quote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Publications() {
  const { t } = useLang();
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>{t.publications.eyebrow}</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)] text-ink">
              {t.publications.title1} <span className="text-rose-deep">{t.publications.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base text-ink-soft md:text-lg">{t.publications.desc}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.publications.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a
                href="#"
                className="group flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-rose hover:shadow-[0_20px_60px_-30px_rgba(52,22,59,0.35)]"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-rose/40 to-ink/10">
                  <div className="grid h-full place-items-center">
                    <FileText className="h-10 w-10 text-ink/30" />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-display text-xs uppercase tracking-widest text-rose-deep">
                    {p.source} · {p.year}
                  </div>
                  <h3 className="mt-3 text-lg text-ink md:text-xl">{p.title}</h3>
                </div>
                <ArrowUpRight className="mt-6 h-4 w-4 text-ink/40 transition-transform group-hover:rotate-45 group-hover:text-ink" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  const { t } = useLang();
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>{t.certificates.eyebrow}</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)] text-ink">
              {t.certificates.title1}
              <br />
              <span className="text-rose-deep">{t.certificates.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base text-ink-soft md:text-lg">{t.certificates.desc}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.certificates.cats.map((c, i) => (
            <Reveal key={c} delay={i * 0.08}>
              <a
                href="#"
                className="group flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-rose hover:shadow-[0_20px_60px_-30px_rgba(52,22,59,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rose/30 text-ink">
                    <Award className="h-5 w-5" />
                  </span>
                  <FileText className="h-4 w-4 text-ink/30" />
                </div>
                <div className="mt-10">
                  <div className="font-display text-xs text-rose-deep">PDF · 0{i + 1}</div>
                  <div className="mt-3 text-lg text-ink md:text-xl">{c}</div>
                </div>
                <ArrowUpRight className="mt-6 h-4 w-4 text-ink/40 transition-transform group-hover:rotate-45 group-hover:text-ink" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const fields: Array<{ label: string; type: string; name: string }> = [
    { label: t.cta.fields.name, type: "text", name: "name" },
    { label: t.cta.fields.phone, type: "tel", name: "phone" },
    { label: t.cta.fields.clinic, type: "text", name: "clinic" },
    { label: t.cta.fields.spec, type: "text", name: "spec" },
  ];
  return (
    <section id="contact" className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <Reveal>
            <Eyebrow>{t.cta.eyebrow}</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.95] text-ink">
              {t.cta.title1} <br />
              <span className="text-rose-deep">{t.cta.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-lg text-ink-soft">{t.cta.desc}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-4 text-ink-soft">
              <a href="mailto:svarmed@gmail.com" className="flex items-center gap-4 hover:text-ink">
                <Mail className="h-4 w-4" /> svarmed@gmail.com
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="h-4 w-4" /> {t.cta.address}
              </div>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-ink"
              >
                <Facebook className="h-4 w-4" /> facebook.com/svarmed.ua
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="md:col-span-6">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-ink/10 bg-white p-8 md:p-10"
          >
            {submitted ? (
              <div className="grid place-items-center py-20 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-rose">
                  <Check className="h-6 w-6 text-ink" />
                </div>
                <p className="mt-6 font-display text-2xl text-ink">{t.cta.submitted}</p>
                <p className="mt-2 text-ink-soft">{t.cta.submittedSub}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {fields.map((f) => (
                  <label key={f.name} className="block">
                    <span className="text-xs uppercase tracking-wider text-ink-soft">{f.label}</span>
                    <input
                      required
                      type={f.type}
                      name={f.name}
                      className="mt-2 block w-full border-b border-ink/20 bg-transparent pb-3 text-lg text-ink outline-none transition-colors focus:border-ink"
                    />
                  </label>
                ))}
                <label className="block">
                  <span className="text-xs uppercase tracking-wider text-ink-soft">{t.cta.fields.message}</span>
                  <textarea
                    name="message"
                    rows={3}
                    className="mt-2 block w-full border-b border-ink/20 bg-transparent pb-3 text-lg text-ink outline-none transition-colors focus:border-ink"
                  />
                </label>
                <button type="submit" className="pill pill-dark hover-lift mt-6 w-full justify-center">
                  {t.cta.submit} <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-ink/10 bg-bone px-6 pb-10 pt-16 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <SvarmedLogo className="h-8 w-auto text-ink" />
            </div>
            <p className="mt-6 max-w-xs text-sm text-ink-soft">{t.footer.tagline}</p>
            <div className="mt-6">
              <LangSwitch tone="light" />
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-display text-sm text-ink">{t.footer.contactsTitle}</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>svarmed@gmail.com</li>
              <li>{t.footer.address}</li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                  Facebook
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-display text-sm text-ink">{t.footer.navTitle}</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li><a href="#equipment" className="hover:text-ink">{t.footer.equipmentLink}</a></li>
              <li><a href="#contact" className="hover:text-ink">{t.footer.contactLink}</a></li>
              <li>
                <a href="#" className="hover:text-ink">
                  {t.footer.sterilization}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 md:col-span-2 md:justify-end">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-bone"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-bone"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-ink-soft md:flex-row">
          <span>{t.footer.rightsCo.replace("{year}", String(new Date().getFullYear()))} {t.footer.rights}</span>
          <a href="#contact" className="hover:text-ink">{t.footer.cta}</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-bone">
      <Hero />
      <TrustedBy />
      <About />
      <Essence />
      <WhatIsBioWelding />
      <Advantages />
      <Equipment />
      <InstrumentsCatalog />
      <VideoGallery />
      <EVEZ />
      <Directions />
      <Doctors />
      <Publications />
      <Certificates />
      <FinalCTA />
      <Footer />
    </main>
  );
}
