export type Pillar = {
  key: string;
  label: string;
  tagline: string;
  title: string;
  doctor: string;
  photo?: string;
  photoPosition?: string;
  blurb: string;
  services: string[];
};

const PUNEETH_PHOTO = "/images/puneeth.png";
const PUNEETH_PHOTO_POSITION = "object-center";

export const PILLARS: Pillar[] = [
  {
    key: "pediatrics",
    label: "Pediatrics",
    tagline: "Children's health",
    title: "Pediatrics",
    doctor: "Dr. Puneeth H R",
    photo: PUNEETH_PHOTO,
    photoPosition: PUNEETH_PHOTO_POSITION,
    blurb:
      "From the first newborn check-up to school-readiness exams, one doctor follows your child's growth year to year.",
    services: [
      "Newborn & infant check-ups",
      "Growth & development tracking",
      "Fever & infection care",
      "School health certificates",
    ],
  },
  {
    key: "psychiatry",
    label: "Psychiatry",
    tagline: "Behavioural health",
    title: "Psychiatry & Behavioural Health",
    doctor: "Dr. Vathsalya S Gowda",
    photo: "/images/doctor-vathsalya.png",
    photoPosition: "object-[center_15%]",
    blurb: "A private, unhurried space to talk. Book online and skip the waiting room.",
    services: [
      "Anxiety & depression care",
      "CBT & counselling",
      "Stress & sleep management",
      "Adolescent mental health",
    ],
  },
  {
    key: "allergy",
    label: "Allergy & Asthma",
    tagline: "Spirometry & inhaler plans",
    title: "Allergy & Asthma",
    doctor: "Dr. Puneeth H R",
    photo: PUNEETH_PHOTO,
    photoPosition: PUNEETH_PHOTO_POSITION,
    blurb:
      "We test first, then treat — every inhaler plan is built around your results, not guesswork.",
    services: [
      "Spirometry (lung function testing)",
      "Personalised inhaler plans",
      "Allergy trigger testing",
      "Seasonal asthma reviews",
    ],
  },
  {
    key: "vaccination",
    label: "Vaccination",
    tagline: "Birth to 15 months",
    title: "Vaccination Centre",
    doctor: "Dr. Puneeth H R & nursing team",
    photo: PUNEETH_PHOTO,
    photoPosition: PUNEETH_PHOTO_POSITION,
    blurb: "Check what's due before you visit — no more guessing your child's next shot.",
    services: [
      "Birth-to-15-month schedule",
      "Booster reminders",
      "School & travel immunisation",
      "Vaccine record card",
    ],
  },
];

export const VACCINE_AGES = [
  { key: "birth", label: "Birth" },
  { key: "6w", label: "6 weeks" },
  { key: "10w", label: "10 weeks" },
  { key: "14w", label: "14 weeks" },
  { key: "6m", label: "6 months" },
  { key: "9m", label: "9 months" },
  { key: "1y", label: "1 year" },
  { key: "15m", label: "15 months" },
];

export const VACCINES: Record<string, string[]> = {
  birth: ["BCG", "OPV – 0 dose", "Hepatitis B – 1st dose"],
  "6w": [
    "DTaP – 1st dose",
    "IPV – 1st dose",
    "Hepatitis B – 2nd dose",
    "Hib – 1st dose",
    "Rotavirus – 1st dose",
    "PCV – 1st dose",
  ],
  "10w": ["DTaP – 2nd dose", "IPV – 2nd dose", "Hib – 2nd dose", "Rotavirus – 2nd dose", "PCV – 2nd dose"],
  "14w": ["DTaP – 3rd dose", "IPV – 3rd dose", "Hib – 3rd dose", "Rotavirus – 3rd dose", "PCV – 3rd dose"],
  "6m": ["Hepatitis B – 3rd dose", "OPV – booster", "Influenza – 1st dose"],
  "9m": ["MMR – 1st dose", "Typhoid conjugate vaccine"],
  "1y": ["Hepatitis A – 1st dose"],
  "15m": ["MMR – 2nd dose", "Varicella", "PCV – booster"],
};
