export enum TYPE {
  GROCERIES = "groceries",
  BAKERY = "bakery",
  REST = "rest",
}

export interface Shop {
  name: string;
  type: TYPE;
  openingHours: string[];
  link?: string; // a link to look up the opening hours manually
}

export const SHOPS: Shop[] = [
  {
    name: "Hellweg",
    type: TYPE.REST,
    openingHours: [
      "08:00-20:00",
      "08:00-20:00",
      "08:00-20:00",
      "08:00-20:00",
      "08:00-20:00",
      "08:00-20:00",
    ],
    link: "https://www.hellweg.de/markt/Berlin-Tiergarten/",
  },
  {
    name: "Penny",
    type: TYPE.GROCERIES,
    openingHours: [
      "07:00-22:00",
      "07:00-22:00",
      "07:00-22:00",
      "07:00-22:00",
      "07:00-22:00",
      "07:00-22:00",
    ],
    link: "https://www.penny.de/markt/berlin/4030355/penny-alt-moabit-alt-moabit-9",
  },
  {
    name: "Domberger",
    type: TYPE.BAKERY,
    openingHours: [
      "15:00-18:30",
      "08:00-18:30",
      "08:00-18:30",
      "08:00-18:30",
      "08:00-18:00",
      "08:00-13:00",
    ],
    link: "http://www.domberger-brot-werk.com/",
  },
  {
    name: "Rewe",
    type: TYPE.GROCERIES,
    openingHours: [
      "07:00-22:00",
      "07:00-22:00",
      "07:00-22:00",
      "07:00-22:00",
      "07:00-22:00",
      "07:00-22:00",
    ],
    link: "https://www.rewe.de/marktseite/berlin-mitte/1931630/rewe-markt-heidestr-41",
  },
  {
    name: "Kaufland",
    type: TYPE.GROCERIES,
    openingHours: [
      "07:00-22:00",
      "07:00-22:00",
      "07:00-22:00",
      "07:00-22:00",
      "07:00-22:00",
      "07:00-22:00",
    ],
    link: "https://www.google.com/maps/place/Kaufland+Berlin-Moabit/@52.5288552,13.3432825,18z/data=!3m2!4b1!5s0x47a8510ad7d3bf4f:0x39bc400745f01e40!4m6!3m5!1s0x47a8516628051c6f:0xc1dfb6a1afe57e76!8m2!3d52.5288541!4d13.3441626!16s%2Fg%2F11f8jkcpr7?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Fit Fahrradladen",
    type: TYPE.REST,
    openingHours: [
      "09:00-18:00",
      "09:00-18:00",
      "09:00-18:00",
      "09:00-18:00",
      "09:00-18:00",
      "09:00-14:00",
    ],
    link: "http://www.fit-fahrradladen.de/",
  },
  {
    name: "Stadtbad Tiergarten",
    type: TYPE.REST,
    openingHours: [
      "06:30-08:00",
      "06:30-22:00",
      "10:00-22:00",
      "06:30-08:00",
      "06:30-22:00",
      "09:00-17:00",
      "09:00-17:00",
    ],
    link: "https://www.berlinerbaeder.de/baeder/detail/stadtbad-tiergarten/",
  },
  {
    name: "Hansabibliothek",
    type: TYPE.REST,
    openingHours: [
      "13:00-19:30",
      "12:00-18:00",
      "12:00-18:00",
      "12:00-18:00",
      "13:00-19:30",
      "10:00-14:00",
    ],
    link: "http://www.berlin.de/stadtbibliothek-mitte/bibliotheken/hansabibliothek/",
  },
  {
    name: "Steinecke",
    type: TYPE.BAKERY,
    openingHours: [
      "06:00-18:00",
      "06:00-18:00",
      "06:00-18:00",
      "06:00-18:30",
      "06:00-18:00",
      "06:30-12:00",
      "07:00-11:00",
    ],
    link: "https://www.google.com/maps/place/Brotmeisterei+Steinecke/@52.5172551,13.33024,15z/data=!4m6!3m5!1s0x47a851ecd4d0ab11:0xd47e44e5124d72da!8m2!3d52.5210388!4d13.3532169!16s%2Fg%2F11mwqj4m16?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
];
