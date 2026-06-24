import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ua" | "en";

type Dict = {
  nav: { cta: string };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    cta1: string;
    cta2: string;
    stats: Array<[string, string]>;
  };
  essence: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    badges: string[];
  };
  what: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    points: string[];
  };
  adv: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    cards: string[];
  };
  equipment: {
    eyebrow: string;
    title1: string;
    title2: string;
    detail: string;
    cta: string;
    closeBtn: string;
    advHeader: string;
    specHeader: string;
    close: string;
    products: Array<{
      name: string;
      tier: string;
      highlight: string;
      short: string;
      modal: {
        title: string;
        body: string;
        advantages: string[];
        spec_table: Record<string, string>;
        cert: string;
      };
    }>;
  };
  instruments: {
    eyebrow: string;
    title1: string;
    title2: string;
    cats: string[];
    alt: string;
  };
  evez: {
    eyebrow: string;
    t1: string;
    t2: string;
    t3: string;
    t4: string;
    desc: string;
    advHeader: string;
    advs: string[];
    clinicalHeader: string;
    clinical: Array<[string, string]>;
    cta: string;
    imgAlt: string;
  };
  directions: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    items: string[];
  };
  trusted: { label: string; alt: (i: number) => string };
  about: {
    eyebrow: string;
    title1: string;
    title2: string;
    title3: string;
    desc: string;
    points: string[];
  };
  videos: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    all: string;
    cats: Record<string, string>;
    list: Array<{ id: string; cat: string }>;
    close: string;
    altPrefix: string;
  };
  doctors: { eyebrow: string; title1: string; title2: string; quote: string; alt: string };
  publications: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    items: Array<{ title: string; source: string; year: string }>;
  };
  certificates: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    cats: string[];
  };
  cta: {
    eyebrow: string;
    title1: string;
    title2: string;
    desc: string;
    address: string;
    submitted: string;
    submittedSub: string;
    fields: { name: string; phone: string; clinic: string; spec: string; message: string };
    submit: string;
  };
  footer: {
    tagline: string;
    contactsTitle: string;
    navTitle: string;
    address: string;
    sterilization: string;
    equipmentLink: string;
    contactLink: string;
    rights: string;
    rightsCo: string;
    cta: string;
  };
  meta: {
    title: string;
    desc: string;
    ogTitle: string;
    ogDesc: string;
  };
};

const ua: Dict = {
  nav: { cta: "Замовити апробацію" },
  hero: {
    eyebrow: "(українська медична технологія)",
    title1: "Біозварювання",
    title2: "живих тканин",
    desc: "Svarmed — українська компанія, яка з 2015 року розробляє і виробляє advance-біполярні електрокоагулятори та інструменти для біозварювання живих м'яких тканин у людей та тварин.",
    cta1: "Замовити апробацію",
    cta2: "Переглянути обладнання",
    stats: [
      ["11", "років існування компанії на медичному ринку"],
      ["570+", "генераторів вже працюють в медичних закладах"],
      ["150+", "державних лікарень мають генератор"],
      ["20+", "років практичного застосування «Біозварювання»"],
    ],
  },
  essence: {
    eyebrow: "суть технології",
    title1: "Точне розділення та заварювання судин",
    title2: "діаметром до 7 мм",
    desc: "Технологія біозварювання дозволяє виконувати точні розділення та заварювання судин діаметром до 7 мм — швидко, з мінімальним тепловим ураженням та зменшенням крововтрати.",
    badges: ["Швидко", "Безпечно", "Вигідно"],
  },
  what: {
    eyebrow: "що це",
    title1: "Що таке",
    title2: "біозварювання",
    desc: "Технологія, яка за допомогою контрольованої біполярної електроенергії надійно з'єднує (зварює), розділяє живі тканини та герметично закриває судини без шовного матеріалу, забезпечуючи надійний гемостаз і мінімальну травматизацію тканин.",
    points: [
      "Надійний гемостаз без шовного матеріалу",
      "Герметизація судин",
      "Мінімальна термічна травма",
      "Збереження життєздатності тканин",
    ],
  },
  adv: {
    eyebrow: "переваги",
    title1: "Переваги",
    title2: "технології",
    desc: "Технологія SVARMED змінює стандарт хірургічної практики — від часу операції до економіки витратних матеріалів.",
    cards: [
      "Надійний гемостаз",
      "Мінімальна крововтрата",
      "Скорочення часу операції до 50%",
      "Зниження післяопераційного болю",
      "Менше витратних матеріалів",
      "Офіційний багаторазовий інструмент",
      "Застосування в 10+ напрямках хірургії",
      "Унікальний ручний режим зварювання",
    ],
  },
  equipment: {
    eyebrow: "обладнання",
    title1: "Лінійка",
    title2: "електрокоагуляторів",
    detail: "Детальніше",
    cta: "Замовити апробацію",
    closeBtn: "Закрити",
    advHeader: "Переваги",
    specHeader: "Технічні характеристики",
    close: "Закрити",
    products: [
      {
        name: "MARK AI",
        tier: "Base",
        highlight: "MARK AI — універсальне рішення для більшості операційних.",
        short: "Універсальна система біозварювання для відкритої та лапароскопічної хірургії з автоматичним дозуванням енергії.",
        modal: {
          title: "Універсальна система біозварювання для щоденної хірургічної практики",
          body: "Сучасний електрокоагулятор з технологією Біозварювання. Автоматично адаптує енергію до тканини: надійний гемостаз, мінімальна термічна травма. Компактний (300×135×230 мм, 3,5 кг). Потужність до 300 Вт (зварювання) / 350 Вт (коагуляція й різання).",
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
        highlight: "Dr.Nic — флагманська система для клінік, які прагнуть найвищого рівня комфорту, автоматизації та продуктивності.",
        short: "Флагманська система: одночасне підключення кількох інструментів без перепідключення + профілі до 5 хірургів.",
        modal: {
          title: "Флагманська платформа Біозварювання для сучасних операційних",
          body: "Преміальна система для багатопрофільних лікарень. Одночасне підключення кількох інструментів без перепідключення; профілі до 5 хірургів. Сенсорний дисплей, потужність Біозварювання до 360 Вт.",
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
    ],
  },
  instruments: {
    eyebrow: "каталог",
    title1: "Каталог",
    title2: "інструментів",
    alt: "Хірургічні інструменти SVARMED",
    cats: [
      "ЛОР-інструменти",
      "Ендовенозні зонди",
      "Лапароскопічні інструменти",
      "Затискачі",
      "Ножиці",
      "Пінцети",
      "Біполярні кабелі",
      "Інший інструмент",
    ],
  },
  evez: {
    eyebrow: "євез — флебологія",
    t1: "Ендовенозне",
    t2: "електро",
    t3: "зварювання",
    t4: "вен",
    desc: "ЕВЕЗ — українська технологія контрольованого закриття вен з низькою собівартістю процедури та багаторазовим зондом.",
    advHeader: "Переваги ЕВЕЗ",
    advs: [
      "Безпечна альтернатива лазеру та РЧА",
      "Багаторазовий зонд — до 20 процедур",
      "Низька собівартість процедури",
      "Контрольоване автоматичне зварювання",
      "Стабільний результат на венах різного діаметра",
      "Мінімальний реабілітаційний період",
    ],
    clinicalHeader: "Клінічна ефективність",
    clinical: [
      ["95%+", "клінічна ефективність закриття вени"],
      ["≈30 хв", "тривалість процедури під місцевою анестезією"],
      ["0", "розрізів — пункційний доступ"],
      ["1–2 дні", "повернення до активного життя"],
    ],
    cta: "Замовити апробацію ЕВЕЗ",
    imgAlt: "Ендовенозні зонди SVARMED",
  },
  directions: {
    eyebrow: "напрямки",
    title1: "Напрямки",
    title2: "хірургії",
    desc: "Від абдомінальної хірургії до ветеринарної медицини — біозварювання адаптується під кожен напрямок.",
    items: [
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
    ],
  },
  trusted: { label: "Нам довіряють — клініки України", alt: (i: number) => `Партнер ${i}` },
  about: {
    eyebrow: "про компанію",
    title1: "SVARMED —",
    title2: "український виробник",
    title3: "медичних технологій",
    desc: "Українська компанія, що розробляє та виробляє обладнання для біозварювання живих тканин. Сервісна підтримка, навчання лікарів та супровід впровадження технології.",
    points: [
      "Сертифікований виробник",
      "Власна технологія",
      "Сервісна підтримка в Україні",
      "Навчання лікарів",
    ],
  },
  videos: {
    eyebrow: "відео операцій",
    title1: "Реальні",
    title2: "операції",
    desc: "Записи клінічних втручань із застосуванням біозварювання — за напрямками хірургії.",
    all: "Усі",
    cats: {
      "endo": "Ендокринологія",
      "vet": "Ветеринарія",
      "evez": "ЕВЕЗ",
      "uro": "Урологія",
      "proc": "Проктологія",
      "plastic": "Пластична хірургія",
      "abd": "Абдомінальна хірургія",
      "oncgyn": "Онкогінекологія",
    },
    list: [
      { id: "rmrGoao3CPY", cat: "endo" },
      { id: "xYIUvkpsVjs", cat: "vet" },
      { id: "w6vJgQ0J4JA", cat: "evez" },
      { id: "OMIUOpJjeS4", cat: "evez" },
      { id: "jcHpjSWA6lo", cat: "uro" },
      { id: "RaWZepCFNFA", cat: "uro" },
      { id: "uQVK_3Xfmfo", cat: "proc" },
      { id: "bjxfVDOEM3I", cat: "plastic" },
      { id: "DifpilhGve4", cat: "abd" },
      { id: "kYCAgCjq1n8", cat: "abd" },
      { id: "-74y5pBWtXo", cat: "oncgyn" },
    ],
    close: "Закрити",
    altPrefix: "Відео —",
  },
  doctors: {
    eyebrow: "нам довіряють",
    title1: "Хірурги, які працюють",
    title2: "SVARMED",
    quote: "Технологія, якій довіряють провідні хірурги України.",
    alt: "Хірурги, які працюють з SVARMED",
  },
  publications: {
    eyebrow: "публікації",
    title1: "Наукові",
    title2: "публікації",
    desc: "Дослідження, клінічні протоколи й огляди технології Біозварювання у фахових виданнях.",
    items: [
      { title: "Біозварювання тканин у сучасній хірургії", source: "Хірургія України", year: "2024" },
      { title: "Ендовенозне електрозварювання вен — клінічний досвід", source: "Флебологія", year: "2023" },
      { title: "Технологія Біозварювання в гінекології", source: "Жіноче здоров'я", year: "2023" },
    ],
  },
  certificates: {
    eyebrow: "документи",
    title1: "Сертифікати",
    title2: "та патенти",
    desc: "Повний пакет реєстраційних документів та підтверджень відповідності — для тендерів, закупівель і клінічних випробувань.",
    cats: [
      "Сертифікати відповідності",
      "Декларації",
      "Реєстраційні документи",
      "Патенти",
    ],
  },
  cta: {
    eyebrow: "контакти",
    title1: "Замовте апробацію",
    title2: "обладнання",
    desc: "Отримайте консультацію, демонстрацію технології та можливість апробації у вашій клініці.",
    address: "Київ, вул. Куренівська, 18",
    submitted: "Заявку прийнято",
    submittedSub: "Ми зв'яжемось з вами найближчим часом.",
    fields: {
      name: "Ім'я",
      phone: "Телефон",
      clinic: "Лікарня / клініка",
      spec: "Спеціальність",
      message: "Повідомлення",
    },
    submit: "Замовити апробацію",
  },
  footer: {
    tagline: "Українська технологія електрозварювання живих тканин для сучасної хірургії.",
    contactsTitle: "Контакти",
    navTitle: "Навігація",
    address: "Київ, вул. Куренівська, 18",
    sterilization: "Стерилізація",
    equipmentLink: "Обладнання",
    contactLink: "Апробація",
    rights: "Всі права захищені.",
    rightsCo: "© {year} ТОВ «ЗВАРМЕД».",
    cta: "Замовити апробацію",
  },
  meta: {
    title: "SVARMED — Біозварювання тканин. Українська технологія для сучасної хірургії",
    desc: "SVARMED — електрохірургічне обладнання для зварювання живих тканин: безшовний гемостаз, ендовенозне зварювання вен (ЕВЕЗ), мінімальна термічна травма. Замовте апробацію.",
    ogTitle: "SVARMED — Біозварювання тканин",
    ogDesc: "Українська технологія електрозварювання живих тканин для хірургії, флебології та ветеринарії.",
  },
};

const en: Dict = {
  nav: { cta: "Request a trial" },
  hero: {
    eyebrow: "(Ukrainian medical technology)",
    title1: "Live tissue",
    title2: "biowelding",
    desc: "Svarmed is a Ukrainian company that has been developing and manufacturing advanced bipolar electrocoagulators and instruments for live soft tissue biowelding in humans and animals since 2015.",
    cta1: "Request a trial",
    cta2: "View equipment",
    stats: [
      ["11", "years on the medical market"],
      ["570+", "generators already operating in clinics"],
      ["150+", "public hospitals equipped"],
      ["20+", "years of clinical application of Biowelding"],
    ],
  },
  essence: {
    eyebrow: "the essence",
    title1: "Precise dissection and sealing of vessels",
    title2: "up to 7 mm in diameter",
    desc: "Biowelding technology allows precise dissection and sealing of vessels up to 7 mm in diameter — fast, with minimal thermal damage and reduced blood loss.",
    badges: ["Fast", "Safe", "Cost-efficient"],
  },
  what: {
    eyebrow: "what it is",
    title1: "What is",
    title2: "biowelding",
    desc: "A technology that uses controlled bipolar electrical energy to reliably join (weld) and dissect living tissue and hermetically seal vessels without sutures — providing reliable hemostasis and minimal tissue trauma.",
    points: [
      "Reliable hemostasis without sutures",
      "Vessel sealing",
      "Minimal thermal damage",
      "Tissue viability preserved",
    ],
  },
  adv: {
    eyebrow: "advantages",
    title1: "Technology",
    title2: "advantages",
    desc: "SVARMED technology raises the surgical standard — from operating time to the economics of consumables.",
    cards: [
      "Reliable hemostasis",
      "Minimal blood loss",
      "Operation time reduced by up to 50%",
      "Lower post-operative pain",
      "Fewer consumables",
      "Officially reusable instrument",
      "Used in 10+ surgical fields",
      "Unique manual welding mode",
    ],
  },
  equipment: {
    eyebrow: "equipment",
    title1: "The",
    title2: "electrocoagulator line",
    detail: "Learn more",
    cta: "Request a trial",
    closeBtn: "Close",
    advHeader: "Advantages",
    specHeader: "Technical specifications",
    close: "Close",
    products: [
      {
        name: "MARK AI",
        tier: "Base",
        highlight: "MARK AI — a universal solution for most operating rooms.",
        short: "Universal biowelding system for open and laparoscopic surgery with automatic energy dosing.",
        modal: {
          title: "Universal biowelding system for daily surgical practice",
          body: "Modern electrocoagulator with Biowelding technology. Automatically adapts energy to tissue: reliable hemostasis, minimal thermal damage. Compact (300×135×230 mm, 3.5 kg). Up to 300 W (welding) / 350 W (coagulation & cutting).",
          advantages: [
            "Compact, mobile design",
            "Power up to 350 W",
            "Intuitive controls",
            "Automatic Biowelding control",
            "Minimal consumables",
            "High cost efficiency",
          ],
          spec_table: {
            "Power supply": "230 V (±10%), 50 Hz",
            "Rated power": "700 VA",
            "Dimensions (W×H×D)": "300×135×230 mm",
            "Weight": "3.5 kg",
            "Protection class": "II",
            "Type": "BF",
            "Welding power": "300 W",
            "Coagulation power": "350 W",
            "Cutting power": "350 W",
            "Output frequency": "440 kHz",
          },
          cert: "Since 2017 — certificate of conformity №UA.TR.039.129 + quality system №066 DSTU EN ISO 13485:2015.",
        },
      },
      {
        name: "dr.Nic",
        tier: "Premium",
        highlight: "Dr.Nic — the flagship system for clinics seeking the highest level of comfort, automation and productivity.",
        short: "Flagship system: simultaneous connection of multiple instruments without reconnection + profiles for up to 5 surgeons.",
        modal: {
          title: "Flagship Biowelding platform for modern operating rooms",
          body: "Premium system for multi-disciplinary hospitals. Simultaneous connection of multiple instruments without reconnection; profiles for up to 5 surgeons. Touch display, Biowelding power up to 360 W.",
          advantages: [
            "Multiple instruments connected simultaneously",
            "Personal profiles for 5 surgeons",
            "Touch interface",
            "Biowelding power up to 360 W",
            "Maximum automation",
            "For large multi-disciplinary institutions",
          ],
          spec_table: {
            "Power supply": "230 V (±10%), 50 Hz",
            "Rated power": "700 VA",
            "Dimensions (W×H×D)": "350×200×320 mm",
            "Weight": "5 kg",
            "Protection class": "I",
            "Type": "BF",
            "Welding power": "320 W",
            "Coagulation power": "300 W",
            "Cutting power": "300 W",
            "Output frequency": "450 kHz",
          },
          cert: "Since 2017 — certificate of conformity №UA.TR.039.129 + quality system №066 DSTU EN ISO 13485:2015.",
        },
      },
    ],
  },
  instruments: {
    eyebrow: "catalog",
    title1: "Instrument",
    title2: "catalog",
    alt: "SVARMED surgical instruments",
    cats: [
      "ENT instruments",
      "Endovenous probes",
      "Laparoscopic instruments",
      "Clamps",
      "Scissors",
      "Forceps",
      "Bipolar cables",
      "Other instruments",
    ],
  },
  evez: {
    eyebrow: "evez — phlebology",
    t1: "Endovenous",
    t2: "electro",
    t3: "welding",
    t4: "of veins",
    desc: "EVEZ — Ukrainian technology for controlled vein closure with a low procedure cost and a reusable probe.",
    advHeader: "EVEZ advantages",
    advs: [
      "Safe alternative to laser and RFA",
      "Reusable probe — up to 20 procedures",
      "Low procedure cost",
      "Controlled automatic welding",
      "Stable result on veins of various diameters",
      "Minimal recovery period",
    ],
    clinicalHeader: "Clinical efficacy",
    clinical: [
      ["95%+", "vein closure clinical efficacy"],
      ["≈30 min", "procedure duration under local anesthesia"],
      ["0", "incisions — puncture access"],
      ["1–2 days", "return to active life"],
    ],
    cta: "Request an EVEZ trial",
    imgAlt: "SVARMED endovenous probes",
  },
  directions: {
    eyebrow: "fields",
    title1: "Surgical",
    title2: "fields",
    desc: "From abdominal surgery to veterinary medicine — biowelding adapts to every field.",
    items: [
      "Abdominal surgery",
      "Gynecology",
      "ENT surgery",
      "Thoracic surgery",
      "Phlebology",
      "Proctology",
      "Oncological surgery",
      "Veterinary",
      "Endocrine surgery",
      "Plastic surgery",
      "Urology",
    ],
  },
  trusted: { label: "Trusted by clinics in Ukraine", alt: (i: number) => `Partner ${i}` },
  about: {
    eyebrow: "about us",
    title1: "SVARMED —",
    title2: "Ukrainian manufacturer",
    title3: "of medical technology",
    desc: "A Ukrainian company developing and manufacturing equipment for live tissue biowelding. Service support, surgeon training and end-to-end implementation of the technology.",
    points: [
      "Certified manufacturer",
      "Proprietary technology",
      "Service support in Ukraine",
      "Surgeon training",
    ],
  },
  videos: {
    eyebrow: "operation videos",
    title1: "Real",
    title2: "operations",
    desc: "Recordings of clinical interventions using biowelding — organized by surgical field.",
    all: "All",
    cats: {
      "endo": "Endocrinology",
      "vet": "Veterinary",
      "evez": "EVEZ",
      "uro": "Urology",
      "proc": "Proctology",
      "plastic": "Plastic surgery",
      "abd": "Abdominal surgery",
      "oncgyn": "Onco-gynecology",
    },
    list: [
      { id: "rmrGoao3CPY", cat: "endo" },
      { id: "xYIUvkpsVjs", cat: "vet" },
      { id: "w6vJgQ0J4JA", cat: "evez" },
      { id: "OMIUOpJjeS4", cat: "evez" },
      { id: "jcHpjSWA6lo", cat: "uro" },
      { id: "RaWZepCFNFA", cat: "uro" },
      { id: "uQVK_3Xfmfo", cat: "proc" },
      { id: "bjxfVDOEM3I", cat: "plastic" },
      { id: "DifpilhGve4", cat: "abd" },
      { id: "kYCAgCjq1n8", cat: "abd" },
      { id: "-74y5pBWtXo", cat: "oncgyn" },
    ],
    close: "Close",
    altPrefix: "Video —",
  },
  doctors: {
    eyebrow: "trusted by",
    title1: "Surgeons who work",
    title2: "SVARMED",
    quote: "A technology trusted by leading surgeons of Ukraine.",
    alt: "Surgeons who work with SVARMED",
  },
  publications: {
    eyebrow: "publications",
    title1: "Scientific",
    title2: "publications",
    desc: "Research, clinical protocols and reviews of Biowelding technology in peer-reviewed journals.",
    items: [
      { title: "Tissue biowelding in modern surgery", source: "Surgery of Ukraine", year: "2024" },
      { title: "Endovenous electrowelding of veins — clinical experience", source: "Phlebology", year: "2023" },
      { title: "Biowelding technology in gynecology", source: "Women's Health", year: "2023" },
    ],
  },
  certificates: {
    eyebrow: "documents",
    title1: "Certificates",
    title2: "and patents",
    desc: "A complete package of registration documents and conformity confirmations — for tenders, procurement and clinical trials.",
    cats: [
      "Certificates of conformity",
      "Declarations",
      "Registration documents",
      "Patents",
    ],
  },
  cta: {
    eyebrow: "contacts",
    title1: "Request an equipment",
    title2: "trial",
    desc: "Get a consultation, a technology demonstration and an opportunity to trial the equipment at your clinic.",
    address: "Kyiv, 18 Kurenivska St.",
    submitted: "Request received",
    submittedSub: "We will contact you shortly.",
    fields: {
      name: "Name",
      phone: "Phone",
      clinic: "Hospital / clinic",
      spec: "Specialty",
      message: "Message",
    },
    submit: "Request a trial",
  },
  footer: {
    tagline: "Ukrainian live-tissue electrowelding technology for modern surgery.",
    contactsTitle: "Contacts",
    navTitle: "Navigation",
    address: "Kyiv, 18 Kurenivska St.",
    sterilization: "Sterilization",
    equipmentLink: "Equipment",
    contactLink: "Trial",
    rights: "All rights reserved.",
    rightsCo: "© {year} ZVARMED LLC.",
    cta: "Request a trial",
  },
  meta: {
    title: "SVARMED — Tissue biowelding. Ukrainian technology for modern surgery",
    desc: "SVARMED — electrosurgical equipment for live tissue welding: sutureless hemostasis, endovenous vein welding (EVEZ), minimal thermal trauma. Request a trial.",
    ogTitle: "SVARMED — Tissue biowelding",
    ogDesc: "Ukrainian live-tissue electrowelding technology for surgery, phlebology and veterinary.",
  },
};

const DICTS: Record<Lang, Dict> = { ua, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ua");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("svarmed-lang") as Lang | null;
      if (saved === "ua" || saved === "en") setLangState(saved);
    } catch {
      /* noop */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("svarmed-lang", l);
    } catch {
      /* noop */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = l === "ua" ? "uk" : "en";
    }
  };

  return (
    <LangCtx.Provider value={{ lang, setLang, t: DICTS[lang] }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
