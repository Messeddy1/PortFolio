import project1 from "../assets/projects/project1.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/bazaar.png";
import Project5 from "../assets/projects/LocationCars/locationHome.png";
import project2 from "../assets/projects/ResumePhoto/AI-Resume-Home.png";
import resume1 from "../assets/projects/ResumePhoto/AI-Resume-Home2.png";
import resume2 from "../assets/projects/ResumePhoto/AI-Resume-Login.png";
import resume3 from "../assets/projects/ResumePhoto/AI-Resume-Dashboard.png";
import resume4 from "../assets/projects/ResumePhoto/AI-Resume-create-name-of-rasume.png";
import resume5 from "../assets/projects/ResumePhoto/Reed-Woods-Info.png";
import resume6 from "../assets/projects/ResumePhoto/education.png";
import resume7 from "../assets/projects/ResumePhoto/lang.png";
import resume8 from "../assets/projects/ResumePhoto/professional-Experience.png";
import resume9 from "../assets/projects/ResumePhoto/skills.png";
import resume10 from "../assets/projects/ResumePhoto/summary.png";
import location1 from "../assets/projects/LocationCars/dashboardLocation.png";
import location2 from "../assets/projects/LocationCars/filterLocationProject.png";
import location3 from "../assets/projects/LocationCars/rentalLocation.png";

export const HERO_CONTENT = `Développeur web débutant et motivé, passionné par la création de solutions digitales modernes et performantes.
Avec déjà 3 mois d'expérience dans le développement web, je suis à la recherche de mon premier emploi ou stage rémunéré pour continuer à apprendre et mettre mes compétences en pratique.

Je me concentre sur l'écriture d'un code propre, réutilisable et évolutif pour garantir une expérience utilisateur fluide et une performance optimale.
Mon objectif est de contribuer à des projets web utiles, accessibles et pensés pour les utilisateurs.
`;

export const ABOUT_TEXT = `
Je suis un développeur full stack débutant, passionné par la création d'applications web efficaces et conviviales.
En 3 mois d'expérience pratique, j'ai acquis des compétences en React.js, Tailwind CSS, Bootstrap, Laravel, PHP et MySQL, et je suis impatient de les mettre en application dans un environnement professionnel.

Mon parcours a commencé par une curiosité pour le fonctionnement des technologies, et aujourd'hui je cherche à rejoindre une équipe pour continuer à apprendre, relever de nouveaux défis et contribuer à des projets concrets.

En dehors du codage, j'aime explorer de nouvelles technologies, apprendre continuellement et m'impliquer dans des projets open-source pour développer mon expérience.
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
    github: "https://github.com/Messeddy1/weather-app",
    galleryImages: [],
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
    galleryImages: [],
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
    github: "https://github.com/Messeddy1/project_Bazaar_front_end",
    galleryImages: [],
  },
  {
    title: "Resume Builder",
    image: project2,
    url: "https://drive.google.com/file/d/1Cg9rw6mex-qGZmNt6g5ovQNWhShx4EG4/view?usp=drive_link",
    description:
      "Application web innovante pour générer des CV personnalisés avec IA, utilisant React.js, Clerk et Strapi.",
    longDescription: `J’ai développé une application web innovante permettant de générer automatiquement des résumés et descriptions personnalisées grâce à l’intelligence artificielle.
L’application est construite avec React.js pour le front-end, intégrée avec Clerk afin de gérer l’authentification sécurisée des utilisateurs, et repose sur Strapi comme back-end pour la gestion des données et du contenu.

L’outil offre à l’utilisateur la possibilité de créer un CV professionnel en quelques clics, d’obtenir des suggestions de contenu optimisées par IA, et de télécharger ou partager facilement son CV au format souhaité.

Ce projet met en valeur mes compétences en développement full-stack (React.js, API, Strapi), en intégration de solutions d’authentification modernes (Clerk), et en exploitation de l’IA pour améliorer l’expérience utilisateur.`,
    technologies: ["React.js", "Clerk", "Strapi", "TailwindCSS", "OpenAI API"],
    github: "https://github.com/Messeddy1/resume_ai",
    galleryImages: [
      resume1,
      resume2,
      resume3,
      resume4,
      resume5,
      resume6,
      resume7,
      resume8,
      resume9,
      resume10,
    ],
  },
  {
    title: "Location Voiture",
    image: Project5,
    url: "https://drive.google.com/file/d/1I6kpAsMuMC_633cLqGnZoC49rAhpJMm1/view?usp=sharing",
    description:
      "Mon application De Voutuer est une plateforme moderne de location et de réservation de voitures, développée avec Laravel API pour la partie back-end et React.js pour le front-end.",
    longDescription: `Mon application De Voutuer est une plateforme moderne de location et de réservation de voitures, développée avec Laravel API pour la partie back-end et React.js pour le front-end.

L’interface utilisateur est conçue avec Tailwind CSS, ce qui offre un design élégant, réactif et moderne.
Pour la gestion des états de l’application, j’ai utilisé Context API combiné avec Axios afin de gérer efficacement les appels API et la communication entre le client et le serveur.

Cette application permet aux utilisateurs de parcourir les voitures disponibles, de réserver en ligne, et aux administrateurs de gérer facilement le parc automobile et les réservations via une interface intuitive.

C’est une solution complète qui met l’accent sur la performance, l’expérience utilisateur et la simplicité d’utilisation.`,

    technologies: ["React.js", "Laravel", "TailwindCSS", "MySQL", "Axios"],
    github: "https://github.com/Messeddy1/loacation",
    galleryImages: [location1, location2, location3],
  },
];
export const EXPERIENCE = [
  {
    year: "October 2025 - Présent",
    role: "Développeur Web Stagiaire",
    company: "IntegralTech",
    tasks:
      "Participation active à des projets de développement web, apprentissage de nouvelles technologies, contribution au code côté front-end et back-end, et collaboration au sein d'une équipe professionnelle.",
  },

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
