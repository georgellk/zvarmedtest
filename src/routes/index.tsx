import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Facebook,
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVARMED — Біозварювання тканин. Українська технологія для сучасної хірургії" },
      {
        name: "description",
        content:
          "SVARMED — електрохірургічне обладнання для зварювання живих тканин: безшовний гемостаз, ендовенозне зварювання вен (ЕВЕЗ), мінімальна термічна травма. Замовте апробацію.",
      },
      { property: "og:title", content: "SVARMED — Біозварювання тканин" },
      {
        property: "og:description",
        content: "Українська технологія електрозварювання живих тканин для хірургії, флебології та ветеринарії.",
      },
    ],
  }),
  component: Index,
});

/* ---------- constants: external hosted assets ---------- */

const LOGO_URL = "https://svarmed.lkdm.uk/assets/catalog/logos/logo-svarmed.png";
const FACEBOOK_URL = "https://www.facebook.com/svarmed.ua";
const HERO_IMAGE =
  "https://drive.google.com/thumbnail?id=1rQc5AkNLWiy5bFbnJ4KjXiXHOOKgsiKW&sz=w2400";
const PROBE_IMAGE =
  "https://drive.google.com/thumbnail?id=1FcD8m2DyL1Wb99v7-uhcrKB9UJ10cxDx&sz=w1600";
const MARK_AI_PHOTO = "https://svarmed.lkdm.uk/assets/product-mark.jpg";
const DR_NIC_PHOTO = "https://svarmed.lkdm.uk/assets/product-nic.jpg";
const SURGEONS_GRID = "https://svarmed.lkdm.uk/assets/catalog/svarmed-grid-surgeons.png";

const PARTNER_LOGOS = Array.from({ length: 17 }, (_, i) =>
  `https://svarmed.lkdm.uk/assets/catalog/logos/partner_${String(i + 1).padStart(2, "0")}.png`,
);

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

/* ---------- sections ---------- */

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3 text-bone">
          <img
            src={LOGO_URL}
            alt="SVARMED"
            className="h-8 w-auto"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <span className="font-display text-base font-extrabold tracking-[0.18em]">SVARMED</span>
        </a>
        <div className="flex items-center gap-3">
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
            href="#contact"
            className="hidden md:inline-flex pill pill-light hover-lift text-sm"
            style={{ height: 48 }}
          >
            Замовити апробацію
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const stats: Array<[string, string]> = [
    ["11", "років існування компанії на медичному ринку"],
    ["570+", "генераторів вже працюють в медичних закладах"],
    ["150+", "державних лікарень мають генератор"],
    ["20+", "років практичного застосування «Біозварювання»"],
  ];

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden bg-ink text-bone">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <ImageWithFallback
          src={HERO_IMAGE}
          fallback={heroImgFallback}
          alt="Біозварювання живих тканин — SVARMED"
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
          (українська медична технологія)
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[clamp(2.5rem,8vw,9rem)]"
        >
          Біозварювання
          <br />
          <span className="text-rose">живих тканин</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 max-w-2xl text-lg text-bone/75 md:text-xl"
        >
          Svarmed — українська компанія, яка з 2015 року розробляє і виробляє advance-біполярні
          електрокоагулятори та інструменти для біозварювання живих м'яких тканин у людей та тварин.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          <a href="#contact" className="pill pill-light hover-lift">
            Замовити апробацію
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#equipment" className="pill border border-white/30 text-bone hover-lift hover:bg-white/10">
            Переглянути обладнання
          </a>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/15 pt-8 text-bone/80 md:grid-cols-4">
          {stats.map(([n, l]) => (
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
  const badges = ["Швидко", "Безпечно", "Вигідно"];
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1240px] text-center">
        <Reveal>
          <Eyebrow>суть технології</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mt-8 text-[clamp(1.85rem,4.6vw,4rem)] text-ink">
            Точне розділення та заварювання судин <br />
            <span className="text-rose-deep">діаметром до 7 мм</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-ink-soft md:text-xl">
            Технологія біозварювання дозволяє виконувати точні розділення та заварювання судин
            діаметром до 7 мм — швидко, з мінімальним тепловим ураженням та зменшенням крововтрати.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {badges.map((label, i) => (
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
  const points = [
    "Надійний гемостаз без шовного матеріалу",
    "Герметизація судин",
    "Мінімальна термічна травма",
    "Збереження життєздатності тканин",
  ];
  return (
    <section className="bg-ink px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>що це</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-6 text-[clamp(2.25rem,5vw,4.5rem)]">
              Що таке <br /> <span className="text-rose">біозварювання</span>
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal>
            <p className="max-w-xl text-lg text-bone/75 md:text-xl">
              Технологія, яка за допомогою контрольованої біполярної електроенергії надійно
              з'єднує (зварює), розділяє живі тканини та герметично закриває судини без шовного
              матеріалу, забезпечуючи надійний гемостаз і мінімальну травматизацію тканин.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
            {points.map((p, i) => (
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
  const cards = [
    "Надійний гемостаз",
    "Мінімальна крововтрата",
    "Скорочення часу операції до 50%",
    "Зниження післяопераційного болю",
    "Менше витратних матеріалів",
    "Офіційний багаторазовий інструмент",
    "Застосування в 10+ напрямках хірургії",
    "Унікальний ручний режим зварювання",
  ];
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>переваги</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)] text-ink">
              Переваги
              <br /> технології
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base text-ink-soft md:text-lg">
              Технологія SVARMED змінює стандарт хірургічної практики — від часу операції до економіки
              витратних матеріалів.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
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

/* ---------- Equipment with modals ---------- */

type ProductCard = {
  name: string;
  tier: string;
  photo: string;
  fallback: string;
  highlight: string;
  short: string;
  modal: {
    title: string;
    body: string;
    advantages: string[];
    spec_table: Record<string, string>;
    cert: string;
  };
};

const PRODUCTS: ProductCard[] = [
  {
    name: "MARK AI",
    tier: "Base",
    photo: MARK_AI_PHOTO,
    fallback: markAiFallback,
    highlight: "MARK AI — універсальне рішення для більшості операційних.",
    short:
      "Універсальна система біозварювання для відкритої та лапароскопічної хірургії з автоматичним дозуванням енергії.",
    modal: {
      title: "Універсальна система біозварювання для щоденної хірургічної практики",
      body:
        "Сучасний електрокоагулятор з технологією Біозварювання. Автоматично адаптує енергію до тканини: надійний гемостаз, мінімальна термічна травма. Компактний (300×135×230 мм, 3,5 кг). Потужність до 300 Вт (зварювання) / 350 Вт (коагуляція й різання).",
      advantages: [
        "Компактний та мобільний дизайн",
        "Потужність до 350 Вт",
        "Інтуїтивне керування",
        "Автоматичне керування Біозварюванням",
        "Мінімальні витратні матеріали",
        "Висока економічна ефективність",
      ],
      spec_table: {
        "Електроживлення": "230 В (±10%), 50 Гц",
        "Номінальна потужність": "700 ВА",
        "Розміри (Ш×В×Г)": "300×135×230 мм",
        "Маса": "3,5 кг",
        "Клас захисту": "II",
        "Тип": "BF",
        "Потужність зварювання": "300 Вт",
        "Потужність коагуляції": "350 Вт",
        "Потужність різання": "350 Вт",
        "Частота на виході": "440 кГц",
      },
      cert: "З 2017 р. сертифікат відповідності №UA.TR.039.129 + система якості №066 ДСТУ EN ISO 13485:2015.",
    },
  },
  {
    name: "dr.Nic",
    tier: "Premium",
    photo: DR_NIC_PHOTO,
    fallback: drNicFallback,
    highlight:
      "Dr.Nic — флагманська система для клінік, які прагнуть найвищого рівня комфорту, автоматизації та продуктивності.",
    short:
      "Флагманська система: одночасне підключення кількох інструментів без перепідключення + профілі до 5 хірургів.",
    modal: {
      title: "Флагманська платформа Біозварювання для сучасних операційних",
      body:
        "Преміальна система для багатопрофільних лікарень. Одночасне підключення кількох інструментів без перепідключення; профілі до 5 хірургів. Сенсорний дисплей, потужність Біозварювання до 360 Вт.",
      advantages: [
        "Одночасне підключення кількох інструментів",
        "Персональні профілі для 5 хірургів",
        "Сенсорний інтерфейс",
        "Потужність Біозварювання до 360 Вт",
        "Максимальна автоматизація",
        "Для великих багатопрофільних закладів",
      ],
      spec_table: {
        "Електроживлення": "230 В (±10%), 50 Гц",
        "Номінальна потужність": "700 ВА",
        "Розміри (Ш×В×Г)": "350×200×320 мм",
        "Маса": "5 кг",
        "Клас захисту": "I",
        "Тип": "BF",
        "Потужність зварювання": "320 Вт",
        "Потужність коагуляції": "300 Вт",
        "Потужність різання": "300 Вт",
        "Частота на виході": "450 кГц",
      },
      cert: "З 2017 р. сертифікат відповідності №UA.TR.039.129 + система якості №066 ДСТУ EN ISO 13485:2015.",
    },
  },
];

function ProductModal({ product, onClose }: { product: ProductCard; onClose: () => void }) {
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
          aria-label="Закрити"
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
            <h4 className="eyebrow mb-4">Переваги</h4>
            <ul className="space-y-2">
              {product.modal.advantages.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm md:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-rose-deep" /> {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-4">Технічні характеристики</h4>
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
            Замовити апробацію <ArrowUpRight className="h-4 w-4" />
          </a>
          <button onClick={onClose} className="pill pill-light hover-lift">
            Закрити
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function Equipment() {
  const [open, setOpen] = useState<ProductCard | null>(null);
  return (
    <section id="equipment" className="bg-ink px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <Eyebrow>обладнання</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2.5rem,7vw,7rem)]">
            Лінійка <span className="text-rose">електрокоагуляторів</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PRODUCTS.map((p, i) => (
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
                    Замовити апробацію
                  </a>
                  <button
                    onClick={() => setOpen(p)}
                    className="pill border border-white/20 text-bone hover-lift text-sm"
                    style={{ height: 52 }}
                  >
                    Детальніше <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {open && <ProductModal product={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function InstrumentsCatalog() {
  const cats = [
    "ЛОР-інструменти",
    "Ендовенозні зонди",
    "Лапароскопічні інструменти",
    "Затискачі",
    "Ножиці",
    "Пінцети",
    "Біполярні кабелі",
    "Інший інструмент",
  ];
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>каталог</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2rem,5vw,4.5rem)] text-ink">
              Каталог
              <br />
              <span className="text-rose-deep">інструментів</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-3xl">
              <img
                src={instrumentsImg}
                alt="Хірургічні інструменти SVARMED"
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
            {cats.map((c, i) => (
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
  const advs = [
    "Безпечна альтернатива лазеру та РЧА",
    "Багаторазовий зонд — до 20 процедур",
    "Низька собівартість процедури",
    "Контрольоване автоматичне зварювання",
    "Стабільний результат на венах різного діаметра",
    "Мінімальний реабілітаційний період",
  ];
  const clinical = [
    ["95%+", "клінічна ефективність закриття вени"],
    ["≈30 хв", "тривалість процедури під місцевою анестезією"],
    ["0", "розрізів — пункційний доступ"],
    ["1–2 дні", "повернення до активного життя"],
  ];

  return (
    <section className="relative overflow-hidden bg-ink px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-glow/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <Reveal>
          <Eyebrow>євез — флебологія</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mt-6 text-[clamp(2.5rem,8vw,8rem)]">
            Ендовенозне
            <br />
            електро<span className="text-rose">зварювання</span>
            <br /> вен
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-xl text-bone/80 md:text-2xl">
                ЕВЕЗ — українська технологія контрольованого закриття вен з низькою собівартістю
                процедури та багаторазовим зондом.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="eyebrow mt-12">Переваги ЕВЕЗ</h3>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {advs.map((a) => (
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
              <h3 className="eyebrow mt-12">Клінічна ефективність</h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {clinical.map(([n, l]) => (
                  <div key={l} className="rounded-2xl border border-white/10 p-6">
                    <div className="font-display text-2xl text-rose md:text-4xl">{n}</div>
                    <div className="mt-2 text-sm text-bone/65">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <a href="#contact" className="pill pill-rose hover-lift mt-10 inline-flex">
                Замовити апробацію ЕВЕЗ <ArrowUpRight className="h-4 w-4" />
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
                alt="Ендовенозні зонди SVARMED"
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
  const items = [
    "Абдомінальна хірургія",
    "Гінекологія",
    "ЛОР-хірургія",
    "Торакальна хірургія",
    "Флебологія",
    "Проктологія",
    "Онкохірургія",
    "Ветеринарія",
    "Ендокринна хірургія",
    "Пластична хірургія",
    "Урологія",
  ];
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <Eyebrow>напрямки</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)] text-ink">
            Напрямки <span className="text-rose-deep">хірургії</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Від абдомінальної хірургії до ветеринарної медицини — біозварювання адаптується під
            кожен напрямок.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-wrap gap-3">
          {items.map((it, i) => (
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
  return (
    <section className="border-y border-ink/10 bg-bone py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <p className="mb-12 text-center text-xs uppercase tracking-[0.3em] text-ink-soft">
            Нам довіряють — клініки України
          </p>
        </Reveal>
        <div className="grid grid-cols-3 items-center gap-x-8 gap-y-10 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {PARTNER_LOGOS.map((src, i) => (
            <Reveal key={src} delay={(i % 8) * 0.04} className="flex justify-center">
              <img
                src={src}
                alt={`Партнер ${i + 1}`}
                loading="lazy"
                className="h-14 w-auto max-w-[140px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                onError={(e) => (e.currentTarget.style.visibility = "hidden")}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    "Сертифікований виробник",
    "Власна технологія",
    "Сервісна підтримка в Україні",
    "Навчання лікарів",
  ];
  return (
    <section className="bg-ink px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow>про компанію</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-6 text-[clamp(2rem,5vw,5rem)]">
              SVARMED —
              <br /> український виробник
              <br /> <span className="text-rose">медичних технологій</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-lg text-bone/70">
              Українська компанія, що розробляє та виробляє обладнання для біозварювання живих тканин.
              Сервісна підтримка, навчання лікарів та супровід впровадження технології.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={dnaOrb}
                alt="SVARMED DNA"
                width={800}
                height={800}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>
          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {points.map((p, i) => (
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

/* ---------- Video gallery (real YT thumbnails) ---------- */

const VIDEOS: Array<{ id: string; cat: string }> = [
  { id: "rmrGoao3CPY", cat: "Ендокринологія" },
  { id: "xYIUvkpsVjs", cat: "Ветеринарія" },
  { id: "w6vJgQ0J4JA", cat: "ЕВЕЗ" },
  { id: "OMIUOpJjeS4", cat: "ЕВЕЗ" },
  { id: "jcHpjSWA6lo", cat: "Урологія" },
  { id: "RaWZepCFNFA", cat: "Урологія" },
  { id: "uQVK_3Xfmfo", cat: "Проктологія" },
  { id: "bjxfVDOEM3I", cat: "Пластична хірургія" },
  { id: "DifpilhGve4", cat: "Абдомінальна хірургія" },
  { id: "kYCAgCjq1n8", cat: "Абдомінальна хірургія" },
  { id: "-74y5pBWtXo", cat: "Онкогінекологія" },
];

function VideoGallery() {
  const [active, setActive] = useState<string>("Усі");
  const cats = ["Усі", ...Array.from(new Set(VIDEOS.map((v) => v.cat)))];
  const list = active === "Усі" ? VIDEOS : VIDEOS.filter((v) => v.cat === active);
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>відео операцій</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)] text-ink">
              Реальні <span className="text-rose-deep">операції</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base text-ink-soft md:text-lg">
              Записи клінічних втручань із застосуванням біозварювання — за напрямками хірургії.
            </p>
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
                {c}
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
                  alt={`Відео — ${v.cat}`}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition-all group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-bone/95 text-ink transition-transform group-hover:scale-110">
                    <Play className="h-5 w-5 fill-ink" />
                  </span>
                </span>
                <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-xs text-bone backdrop-blur">
                  {v.cat}
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
              aria-label="Закрити"
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
  return (
    <section className="bg-ink px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <Eyebrow>нам довіряють</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)]">
            Хірурги, які працюють <br />з <span className="text-rose">SVARMED</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-4 md:p-8">
            <img
              src={SURGEONS_GRID}
              alt="Хірурги, які працюють з SVARMED"
              loading="lazy"
              className="w-full"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.opacity = "0.4";
                target.alt = "Сітка хірургів (TODO_ASSET)";
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex items-center gap-3 text-bone/60">
            <Quote className="h-5 w-5 text-rose" />
            <p className="text-sm md:text-base">
              Технологія, якій довіряють провідні хірурги України.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Publications() {
  // Placeholder cards — TODO_ASSET: реальні статті від клієнта
  const items = [
    { title: "Біозварювання тканин у сучасній хірургії", source: "Хірургія України", year: "2024" },
    { title: "Ендовенозне електрозварювання вен — клінічний досвід", source: "Флебологія", year: "2023" },
    { title: "Технологія Біозварювання в гінекології", source: "Жіноче здоров'я", year: "2023" },
  ];
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>публікації</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)] text-ink">
              Наукові <span className="text-rose-deep">публікації</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base text-ink-soft md:text-lg">
              Дослідження, клінічні протоколи й огляди технології Біозварювання у фахових виданнях.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((p, i) => (
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
  const cats = [
    "Сертифікати відповідності",
    "Декларації",
    "Реєстраційні документи",
    "Патенти",
  ];
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>документи</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)] text-ink">
              Сертифікати
              <br />
              <span className="text-rose-deep">та патенти</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base text-ink-soft md:text-lg">
              Повний пакет реєстраційних документів та підтверджень відповідності — для тендерів,
              закупівель і клінічних випробувань.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c, i) => (
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
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="contact" className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <Reveal>
            <Eyebrow>контакти</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.95] text-ink">
              Замовте апробацію <br />
              <span className="text-rose-deep">обладнання</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-lg text-ink-soft">
              Отримайте консультацію, демонстрацію технології та можливість апробації у вашій клініці.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-4 text-ink-soft">
              <a href="mailto:svarmed@gmail.com" className="flex items-center gap-4 hover:text-ink">
                <Mail className="h-4 w-4" /> svarmed@gmail.com
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="h-4 w-4" /> Київ, вул. Куренівська, 18
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
                <p className="mt-6 font-display text-2xl text-ink">Заявку прийнято</p>
                <p className="mt-2 text-ink-soft">Ми зв'яжемось з вами найближчим часом.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {[
                  { label: "Ім'я", type: "text", name: "name" },
                  { label: "Телефон", type: "tel", name: "phone" },
                  { label: "Лікарня / клініка", type: "text", name: "clinic" },
                  { label: "Спеціальність", type: "text", name: "spec" },
                ].map((f) => (
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
                  <span className="text-xs uppercase tracking-wider text-ink-soft">Повідомлення</span>
                  <textarea
                    name="message"
                    rows={3}
                    className="mt-2 block w-full border-b border-ink/20 bg-transparent pb-3 text-lg text-ink outline-none transition-colors focus:border-ink"
                  />
                </label>
                <button type="submit" className="pill pill-dark hover-lift mt-6 w-full justify-center">
                  Замовити апробацію <ArrowUpRight className="h-4 w-4" />
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
  return (
    <footer className="border-t border-ink/10 bg-bone px-6 pb-10 pt-16 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="SVARMED"
                className="h-7 w-auto invert"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span className="font-display text-base font-extrabold tracking-[0.18em] text-ink">SVARMED</span>
            </div>
            <p className="mt-6 max-w-xs text-sm text-ink-soft">
              Українська технологія електрозварювання живих тканин для сучасної хірургії.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-display text-sm text-ink">Контакти</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>svarmed@gmail.com</li>
              <li>Київ, вул. Куренівська, 18</li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-display text-sm text-ink">Навігація</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li><a href="#equipment" className="hover:text-ink">Обладнання</a></li>
              <li><a href="#contact" className="hover:text-ink">Апробація</a></li>
              <li>
                <a href="#" className="hover:text-ink" title="TODO_ASSET: Google-doc від клієнта">
                  Стерилізація
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
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-ink-soft md:flex-row">
          <span>© {new Date().getFullYear()} ТОВ «ЗВАРМЕД». Всі права захищені.</span>
          <a href="#contact" className="hover:text-ink">Замовити апробацію</a>
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
