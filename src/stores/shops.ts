export enum TYPE {
  GROCERIES = 'groceries',
  BAKERY = 'bakery',
  REST = 'rest',
}

export interface Shop {
  name: string,
  type: TYPE,
  openingHours: string[],
}

export const SHOPS : Shop[] = [
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
    ]
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
    ]
  },
  {
    name: "Fit Fahrradladen",
    type: TYPE.REST,
    openingHours: [
      "09:00-19:00",
      "09:00-19:00",
      "09:00-19:00",
      "09:00-19:00",
      "09:00-19:00",
      "09:00-15:00",
    ]
  },
  {
    name: "Stadtbad Tiergarten",
    type: TYPE.REST,
    openingHours: [
      "06:30-16:00",
      "06:30-22:00",
      "06:30-22:00",
      "06:30-08:00",
      "06:30-22:00",
      "09:00-17:00",
      "09:00-17:00",
    ]
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
    ]
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
    ]
  }
]