import project1 from "../assets/projects/project1.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/bazaar.png";
export const HERO_CONTENT = `Développeur web enthousiaste et motivé, passionné par la création de solutions digitales modernes et performantes.
J’aime apprendre, relever de nouveaux défis, et transformer des idées en projets concrets.

Je me concentre sur l'écriture d'un code propre, réutilisable et évolutif pour garantir une expérience utilisateur fluide et une performance optimale.
Mon objectif est de construire des produits web utiles, accessibles et pensés pour les utilisateurs.

`;
export const ABOUT_TEXT = `
Je suis un développeur full stack dévoué et polyvalent, passionné par la création d'applications web efficaces et conviviales.
J'ai acquis de solides compétences en développement web, notamment en React.js, Tailwind CSS, Bootstrap, Laravel, PHP et MySQL.

Mon parcours dans le développement web a commencé par une grande curiosité pour le fonctionnement des choses, évoluant vers une carrière où je m'efforce continuellement d'apprendre et de m'adapter à de nouveaux défis.
Je m'épanouis dans des environnements collaboratifs et j'apprécie résoudre des problèmes complexes pour fournir des solutions de haute qualité.

En dehors du codage, j'aime rester actif, explorer de nouvelles technologies et contribuer à des projets open-source.


`;

export const EDUCATIONS = [
  {
    year: "2023 - 2025",
    role: "Diplôme Technicien spécialisé en développement informatique",
    School: "ESET",
  },
  {
    year: "2021 - 2022",
    role: "Baccalauréat sciences physiques",
    School: "Abo Abas Esebti ",
  },
];

export const PROJECTS = [
  {
    title: "Weather App",
    image: project1,
    url: "https://weather-app-five-rust-51.vercel.app/",
    description:
      "Cette application météo fournit des mises à jour météorologiques en temps réel pour n'importe quelle ville. Elle utilise l'API Fetch pour récupérer les données météorologiques d'une API externe, tandis que Redux gère la gestion d'état dans l'application. Les utilisateurs peuvent consulter des détails météorologiques clés tels que la température, l'humidité et la vitesse du vent. L'application intègre également la gestion des erreurs pour les noms de ville invalides ou les requêtes échouées, et son design réactif garantit un fonctionnement fluide sur les ordinateurs de bureau et les appareils mobiles.",
    technologies: ["HTML", "Redux", "CSS", "React", "Fetch"],
  },
  {
    title: "Portfolio",
    image: project3,
    url: "#",
    description:
      "Ce portfolio personnel met en valeur des projets et des compétences avec un design interactif et moderne. Il utilise Framer Motion pour des animations et des transitions fluides, offrant une expérience utilisateur dynamique. Tailwind CSS est utilisé pour un style rapide et réactif, garantissant que le portfolio soit agréable à regarder sur tous les appareils. Le projet met en avant des réalisations clés et intègre des principes de design propres et efficaces.",
    technologies: [" React", "Framer Motion", "TailwindCSS"],
  },
  {
    title: "Bazaar",
    image: project4,
    url: "https://bazaarya.store",
    description:
      "Bazaar est une application web responsive développée pour mon projet de fin d'études (PFE), dédiée à la vente de produits artisanaux marocains. L'application est construite avec React, Redux pour le frontend, et utilise une API Laravel  Sanctum pour le backend.",
    technologies: [
      "React",
      "Redux RTK",
      "Laravel",
      "Responsive Design",
      "TailwindCSS",
    ],
  },
];
export const EXPERIENCE = [
  {
    year: "August 2025",
    role: "Stage PFE",
    company: "Webcinq",
    tasks:
      "Stage de fin d'études (PFE) : Participation à un projet de développement web complet, intégration de technologies modernes et gestion de projet en équipe.",
  },
  // RED WALLS (original)
  {
    year: "Juin 2025",
    role: "Stage PFE",
    company: "RED WALLS",
    tasks:
      "Stage de fin d'études (PFE) : Participation à un projet de développement WordPress avancé, gestion de l'intégration de plugins et optimisation des performances.",
  },
];
export const CONTACT = {
  address: "CM BLOCK 2 APT 15 DAWDIYAT MARRAKECH ",
  phoneNo: "+212-669499842",
  email: "mohamedesseddyqqy@gmail.com",
  gmailLink: "mohamedesseddyqqy@gmail.com",
};
// Liste des compétences principales
export const TECHNOLOGIES = [
  {
    name: "React.js",
    icon: "react",
  },
  {
    name: "Laravel",
    icon: "laravel",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
  },
  {
    name: "PHP",
    icon: "php",
  },
  {
    name: "MySQL",
    icon: "mysql",
  },
];
