import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Send,
  Play,
  ChevronRight,
  Check,
  FileText,
  Quote,
  Award,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import markAi from "@/assets/mark-ai.jpg";
import drNic from "@/assets/dr-nic.jpg";
import dnaOrb from "@/assets/dna-orb.jpg";
import instrumentsImg from "@/assets/instruments.jpg";
import probeImg from "@/assets/probe.jpg";

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

/* ---------- brand mark ---------- */

function LogoMark({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  // Diamond cluster: top, left, right, bottom — matches brand identity
  return (
    <svg viewBox="0 0 64 64" className={className} fill={color} aria-hidden="true">
      <rect x="26" y="2" width="12" height="12" transform="rotate(45 32 8)" />
      <rect x="10" y="22" width="10" height="10" transform="rotate(45 15 27)" />
      <rect x="44" y="22" width="10" height="10" transform="rotate(45 49 27)" />
      <rect x="27" y="38" width="10" height="10" transform="rotate(45 32 43)" />
    </svg>
  );
}

/* ---------- sections ---------- */

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3 text-bone">
          <LogoMark className="h-7 w-7" color="currentColor" />
          <span className="font-display text-base font-extrabold tracking-[0.18em]">SVARMED</span>
        </a>
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="WhatsApp"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/30 text-bone backdrop-blur-md hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/30 text-bone backdrop-blur-md hover:bg-white/10"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <button className="ml-2 hidden items-center gap-3 text-bone md:flex">
            <span className="text-sm">menu</span>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-bone text-ink">
              <span className="grid grid-cols-2 gap-[3px]">
                <span className="h-1 w-1 rounded-full bg-ink" />
                <span className="h-1 w-1 rounded-full bg-ink" />
                <span className="h-1 w-1 rounded-full bg-ink" />
                <span className="h-1 w-1 rounded-full bg-ink" />
              </span>
            </span>
          </button>
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

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden bg-ink text-bone">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Хірургічна операція з біозварювання тканин"
          width={1920}
          height={1080}
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
          className="display text-[clamp(2.75rem,9vw,10rem)]"
        >
          Біозварювання
          <br />
          <span className="text-rose">тканин</span> — нова
          <br />
          ера хірургії
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 max-w-2xl text-lg text-bone/75 md:text-xl"
        >
          Сучасна українська технологія зварювання живих тканин для хірургії, флебології, гінекології,
          ЛОР, онкохірургії та ветеринарії.
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
          {[
            ["15+", "років досвіду"],
            ["8", "напрямків хірургії"],
            ["20", "процедур / зонд"],
            ["600 ₴", "собівартість операції"],
          ].map(([n, l]) => (
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
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1240px] text-center">
        <Reveal>
          <Eyebrow>суть технології</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mt-8 text-[clamp(2rem,6vw,5.5rem)] text-ink">
            Зварювання живих тканин <br />
            <span className="text-rose-deep">без шовного матеріалу</span>
            <br /> та з мінімальною термічною травмою
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { label: "Ефективно", icon: <Check className="h-4 w-4" /> },
            { label: "Безпечно", icon: <Check className="h-4 w-4" /> },
            { label: "Економічно", icon: <Check className="h-4 w-4" /> },
          ].map((item, i) => (
            <Reveal delay={i * 0.1} key={item.label} className="flex justify-center">
              <div className="pill pill-rose hover-lift">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-bone">
                  {item.icon}
                </span>
                {item.label}
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
    "Коагуляція тканин",
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
              Біозварювання — це технологія електрозварювання живих тканин, яка дозволяє виконувати
              коагуляцію, герметизацію судин і з'єднання тканин без традиційного шовного матеріалу.
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
    "Безшовний гемостаз",
    "Мінімальна крововтрата",
    "Скорочення часу операції",
    "Зниження післяопераційного болю",
    "Менше витратних матеріалів",
    "Менше навантаження на бригаду",
    "Більше операцій без розширення",
    "Універсальність застосування",
  ];
  return (
    <section className="bg-bone px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>переваги</Eyebrow>
            <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)] text-ink">
              Клінічні
              <br /> переваги
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

function Equipment() {
  const products = [
    {
      name: "MARK AI",
      tag: "Флагман",
      desc:
        "Електрохірургічний апарат нового покоління для біозварювання тканин у сучасній операційній практиці.",
      img: markAi,
      specs: ["Потужність до 300 Вт", "Сенсорний дисплей", "AI-контроль зварювання"],
    },
    {
      name: "Dr.Nic",
      tag: "Компактний",
      desc:
        "Компактне рішення для електрозварювання тканин, швидкої герметизації судин та стабільної роботи в операційній.",
      img: drNic,
      specs: ["Портативний форм-фактор", "Швидкий запуск", "Подвійний канал"],
    },
  ];
  return (
    <section id="equipment" className="bg-ink px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <Eyebrow>обладнання</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2.5rem,7vw,7rem)]">
            Лінійка <span className="text-rose">обладнання</span>
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
                  <span className="text-xs uppercase tracking-widest text-rose">{p.tag}</span>
                </div>

                <div className="relative my-8 aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
                  <motion.img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <p className="text-bone/70 md:text-lg">{p.desc}</p>

                <ul className="mt-6 space-y-2 text-sm text-bone/60">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-center gap-3 border-t border-white/10 py-3">
                      <span className="h-1 w-1 rounded-full bg-rose" />
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="pill pill-rose hover-lift text-sm" style={{ height: 52 }}>
                    Замовити апробацію
                  </a>
                  <button className="pill border border-white/20 text-bone hover-lift text-sm" style={{ height: 52 }}>
                    Детальніше <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstrumentsCatalog() {
  const cats = [
    "Затискачі",
    "Затискачі-ножиці",
    "Біполярні пінцети",
    "Лапароскопічні інструменти",
    "Ендовенозні зонди",
    "Ветеринарні інструменти",
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
    ["600₴", "собівартість операції"],
    ["20×", "процедур одним зондом"],
    ["AUTO", "автоматичне зварювання"],
    ["UA", "українська технологія"],
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
                ЕВЕЗ — сучасна українська альтернатива лазеру та RFA. Автоматичне зварювання вен з низькою
                собівартістю процедури та багаторазовим зондом.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {advs.map(([n, l]) => (
                  <div key={l} className="rounded-2xl border border-white/10 p-6">
                    <div className="font-display text-3xl text-rose md:text-4xl">{n}</div>
                    <div className="mt-2 text-sm text-bone/60">{l}</div>
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
              <img
                src={probeImg}
                alt="Ендовенозний зонд SVARMED"
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </motion.div>

            <div className="mt-6 grid grid-cols-3 gap-2 text-xs">
              {["Laser", "RFA", "EVEZ"].map((t, i) => (
                <div
                  key={t}
                  className={`rounded-xl p-4 ring-1 ${
                    i === 2 ? "bg-rose text-ink ring-rose" : "text-bone/60 ring-white/15"
                  }`}
                >
                  <div className="font-display text-sm">{t}</div>
                  <div className="mt-2 text-[10px] opacity-70">
                    {i === 0 ? "висока ціна" : i === 1 ? "одноразовий" : "до 20 процедур"}
                  </div>
                </div>
              ))}
            </div>
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

function VideoBlock() {
  return (
    <section className="bg-bone px-6 pb-32 md:px-10">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <h2 className="display text-[clamp(2rem,5vw,4.5rem)] text-ink">
              Відео <br />
              з <span className="text-rose-deep">відгуками</span> <br />
              хірургів
            </h2>
            <p className="mt-6 max-w-md text-base text-ink-soft md:text-lg">
              Клінічні відеоматеріали реальних операцій у різних напрямках хірургії.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <div className="group relative aspect-video overflow-hidden rounded-3xl bg-ink">
              <img
                src={heroImg}
                alt="Відео операції SVARMED"
                loading="lazy"
                width={1920}
                height={1080}
                className="h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-100"
              />
              <button className="absolute inset-0 grid place-items-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-bone/90 text-ink backdrop-blur transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 fill-ink" />
                </span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <h3 className="display mx-auto mt-24 max-w-[1440px] text-[clamp(3rem,12vw,14rem)] leading-[0.85] text-ink">
          Відео
          <br />
          реальних
          <br />
          <span className="text-rose-deep">операцій</span>
        </h3>
      </Reveal>
    </section>
  );
}

function TrustedBy() {
  const logos = ["Охматдит", "Феофанія", "Добробут", "Медіком", "Інто-Сана", "VetCity", "Інститут серця", "Боріс"];
  return (
    <section className="border-y border-ink/10 bg-bone py-16">
      <Reveal>
        <p className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-ink-soft">
          Нам довіряють — клініки України
        </p>
      </Reveal>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-16 px-8">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="font-display text-2xl text-ink/40 md:text-3xl">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    "Український виробник",
    "Власна технологія",
    "Сервісна підтримка 24/7",
    "Навчання лікарів",
    "15+ років на ринку",
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
            <h2 className="display mt-6 text-[clamp(2.5rem,7vw,7rem)] text-ink">
              Замовте
              <br />
              <span className="text-rose-deep">апробацію</span>
              <br /> обладнання
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-lg text-ink-soft">
              Отримайте консультацію, демонстрацію технології та можливість апробації у вашій клініці.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-4 text-ink-soft">
              <a href="tel:+380966809685" className="flex items-center gap-4 hover:text-ink">
                <Phone className="h-4 w-4" /> +38 (096) 680-96-85
              </a>
              <a href="mailto:svarmed@gmail.com" className="flex items-center gap-4 hover:text-ink">
                <Mail className="h-4 w-4" /> svarmed@gmail.com
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="h-4 w-4" /> Київ, вул. Куренівська, 18
              </div>
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
              <LogoMark className="h-7 w-7 text-ink" />
              <span className="font-display text-base font-extrabold tracking-[0.18em] text-ink">SVARMED</span>
            </div>
            <p className="mt-6 max-w-xs text-sm text-ink-soft">
              Українська технологія електрозварювання живих тканин для сучасної хірургії.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-display text-sm text-ink">Контакти</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>+38 (096) 680-96-85</li>
              <li>svarmed@gmail.com</li>
              <li>Київ, вул. Куренівська, 18</li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-display text-sm text-ink">Навігація</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li><a href="#equipment" className="hover:text-ink">Обладнання</a></li>
              <li><a href="#contact" className="hover:text-ink">Апробація</a></li>
              <li><a href="#" className="hover:text-ink">Гарантія</a></li>
              <li><a href="#" className="hover:text-ink">Доставка</a></li>
            </ul>
          </div>
          <div className="flex gap-3 md:col-span-2 md:justify-end">
            {[MessageCircle, Send, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-bone"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-ink-soft md:flex-row">
          <span>© {new Date().getFullYear()} SVARMED. Всі права захищені.</span>
          <div className="flex gap-8">
            <a href="#">Гарантія виробника</a>
            <a href="#">Доставка і оплата</a>
            <a href="#">Обмін і повернення</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function VideoGallery() {
  const cats = [
    "Абдомінальна хірургія",
    "Гінекологія",
    "ЛОР",
    "Торакальна хірургія",
    "Флебологія",
    "Проктологія",
    "Ветеринарія",
  ];
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
              <span key={c} className="pill pill-light text-sm" style={{ height: 44, padding: "0 1.125rem" }}>
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.08}>
              <button className="group relative block aspect-video w-full overflow-hidden rounded-3xl bg-ink">
                <img
                  src={heroImg}
                  alt="Відео операції"
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-100"
                />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-bone/95 text-ink transition-transform group-hover:scale-110">
                    <Play className="h-5 w-5 fill-ink" />
                  </span>
                </span>
                <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-xs text-bone backdrop-blur">
                  {cats[i]}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Doctors() {
  const docs = [
    {
      name: "Олександр Іваненко",
      spec: "Хірург-флеболог",
      city: "Київ",
      quote:
        "Технологія SVARMED змінила підхід нашої клініки до ЕВЕЗ — економічно вигідно і безпечно для пацієнта.",
    },
    {
      name: "Марина Коваль",
      spec: "Гінеколог-онколог",
      city: "Львів",
      quote:
        "Мінімальна термічна травма і надійний гемостаз. Працюю на Dr.Nic щодня — обладнання стабільне.",
    },
    {
      name: "Андрій Петренко",
      spec: "Абдомінальний хірург",
      city: "Дніпро",
      quote:
        "MARK AI скоротив час складних резекцій. Бригада менше втомлюється — більше операцій на день.",
    },
  ];
  return (
    <section className="bg-ink px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <Eyebrow>лікарі</Eyebrow>
          <h2 className="display mt-4 text-[clamp(2.25rem,6vw,5.5rem)]">
            З нами <span className="text-rose">працюють</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {docs.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-rose/40">
                <Quote className="h-6 w-6 text-rose" />
                <p className="mt-6 text-lg text-bone/85">"{d.quote}"</p>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="font-display text-lg">{d.name}</div>
                  <div className="mt-1 text-sm text-bone/60">
                    {d.spec} · {d.city}
                  </div>
                </div>
              </article>
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

function Index() {
  return (
    <main className="bg-bone">
      <Hero />
      <About />
      <Essence />
      <WhatIsBioWelding />
      <Advantages />
      <TrustedBy />
      <Equipment />
      <InstrumentsCatalog />
      <VideoGallery />
      <VideoBlock />
      <EVEZ />
      <Directions />
      <Doctors />
      <Certificates />
      <FinalCTA />
      <Footer />
    </main>
  );
}

