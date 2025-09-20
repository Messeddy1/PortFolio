import project1 from "../assets/projects/project1.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/bazaar.png";
import landing from "../assets/projects/landing.png";

// export const PROJECTS = [
//   {
//     title: "E-Commerce Platform",
//     description:
//       "A modern e-commerce platform built with React and Node.js. Features include product search, filtering, cart management, user authentication, and secure payment processing.",
//     longDescription: `A comprehensive e-commerce solution that provides users with a seamless shopping experience. 
//     The platform includes advanced features such as real-time inventory management, secure payment processing through Stripe, 
//     and a responsive design that works perfectly across all devices.`,
//     image: project4,
//     technologies: [
//       "React",
//       "Node.js",
//       "MongoDB",
//       "Express",
//       "Stripe",
//       "Redux",
//       "Tailwind CSS",
//     ],
//     github: "https://github.com/yourusername/ecommerce",
//     url: "https://your-ecommerce.com",
//   },
//   {
//     title: "Portfolio Website",
//     description:
//       "A modern and responsive portfolio website showcasing my projects and skills. Built with React and Tailwind CSS.",
//     longDescription: `A carefully crafted portfolio website that highlights my work and skills. 
//     The site features smooth animations, responsive design, and optimized performance.`,
//     image: project1,
//     technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
//     github: "https://github.com/yourusername/portfolio",
//     url: "https://your-portfolio.com",
//   },
//   {
//     title: "Task Management App",
//     description:
//       "A collaborative task management application with real-time updates and team features.",
//     longDescription: `A powerful task management solution that helps teams stay organized and productive. 
//     Features include real-time updates, task assignments, due dates, priority levels, and team collaboration tools.`,
//     image: project3,
//     technologies: ["React", "Firebase", "Material-UI", "Redux"],
//     github: "https://github.com/yourusername/task-manager",
//     url: "https://your-task-app.com",
//   },
//   {
//     title: "Landing Page Generator",
//     description:
//       "A drag-and-drop landing page builder with customizable templates and export functionality.",
//     longDescription: `An intuitive landing page builder that allows users to create professional landing pages without coding. 
//     Features include customizable templates, drag-and-drop interface, and export to HTML/CSS.`,
//     image: landing,
//     technologies: ["Vue.js", "Nuxt.js", "Node.js", "PostgreSQL"],
//     github: "https://github.com/yourusername/landing-builder",
//     url: "https://your-landing-builder.com",
//   },
// ];
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
      "Cette application météo fournit des mises à jour météorologiques en temps réel pour n'importe quelle ville. Elle utilise l'API Fetch pour récupérer les données météorologiques d'une API externe.",
    longDescription: `Cette application météo fournit des mises à jour météorologiques en temps réel pour n'importe quelle ville. 
    Elle utilise l'API Fetch pour récupérer les données météorologiques d'une API externe, tandis que Redux gère la gestion 
    d'état dans l'application. Les utilisateurs peuvent consulter des détails météorologiques clés tels que la température, 
    l'humidité et la vitesse du vent. L'application intègre également la gestion des erreurs pour les noms de ville invalides 
    ou les requêtes échouées, et son design réactif garantit un fonctionnement fluide sur les ordinateurs de bureau et les 
    appareils mobiles.`,
    technologies: ["React", "Redux", "CSS", "Weather API"],
    github: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Portfolio",
    image: project3,
    url: "#",
    description:
      "Portfolio personnel mettant en valeur projets et compétences avec un design interactif et moderne utilisant Framer Motion et Tailwind CSS.",
    longDescription: `Ce portfolio personnel met en valeur des projets et des compétences avec un design interactif et moderne. 
    Il utilise Framer Motion pour des animations et des transitions fluides, offrant une expérience utilisateur dynamique. 
    Tailwind CSS est utilisé pour un style rapide et réactif, garantissant que le portfolio soit agréable à regarder sur 
    tous les appareils. Le projet met en avant des réalisations clés et intègre des principes de design propres et efficaces.`,
    technologies: ["React", "Framer Motion", "TailwindCSS", "Vite"],
    github: "https://github.com/Messeddy1/PortFolio",
  },
  {
    title: "Bazaar",
    image: project4,
    url: "https://bazaarya.store",
    description:
      "Application e-commerce pour produits artisanaux marocains, construite avec React et Laravel Sanctum.",
    longDescription: `Bazaar est une application web responsive développée pour mon projet de fin d'études (PFE), 
    dédiée à la vente de produits artisanaux marocains. L'application est construite avec React et Redux pour le frontend, 
    et utilise une API Laravel Sanctum pour le backend. Elle offre une expérience d'achat complète avec gestion des 
    produits, panier, authentification et paiement sécurisé.`,
    technologies: [
      "React",
      "Redux",
      "Laravel",
      "TailwindCSS",
      "MySQL",
      "Stripe",
    ],
    github: "https://github.com/yourusername/bazaar",
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
