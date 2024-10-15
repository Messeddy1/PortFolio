import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
export const HERO_CONTENT = `Je suis un développeur full stack passionné, axé sur la création d'applications web robustes et évolutives. Avec une expérience pratique dans des technologies front-end comme React, Tailwind CSS, Bootstrap et Framer Motion, je crée des interfaces modernes, réactives et visuellement engageantes. En ce qui concerne le back-end, je travaille avec des technologies telles que Node.js, MongoDB et Express, et j'ai également mis en place des systèmes d'authentification sécurisés utilisant JWT et Bcrypt. Tout en continuant à développer mes compétences, j'ai pour objectif de créer des solutions innovantes qui favorisent la croissance des entreprises et offrent des expériences utilisateur exceptionnelles.`;
export const ABOUT_TEXT = `
Je suis un développeur full stack dévoué et polyvalent, passionné par la création d'applications web efficaces et conviviales. Bien que j’aie 3 mois d'expérience professionnelle, j'ai rapidement acquis de solides bases en technologies telles que React, Node.js, MongoDB et Bootstrap. Mon parcours dans le développement web a commencé par une grande curiosité pour le fonctionnement des choses, évoluant vers une carrière où je m'efforce continuellement d'apprendre et de m'adapter à de nouveaux défis. Je m'épanouis dans des environnements collaboratifs et j'apprécie résoudre des problèmes complexes pour fournir des solutions de haute qualité. En dehors du codage, j'aime rester actif, explorer de nouvelles technologies et contribuer à des projets open-source.
`;

export const EDUCATIONS = [
  {
    year: "2021 - 2022",
    role: "baccalauréat",
    School: "Abo Abas Esebti ",
  },
  {
    year: "2023 - 2024",
    role: "diplôme en développement informatique",
    School: "ESET",
  },
];
// export const EXPERIENCES = [
//   {
//     year: "2021 - 2022",
//     role: "baccalauréat",
//     company: "Abo Abas Esebti ",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["HTML", "CSS", "React.js", "Express", "MongoDB"]
//   },
//   {
//     year: "2023 - 2024",
//     role: "diplôme en développement informatique",
//     company: "ESET",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "React.js", "Express", "MongoDB"]
//   },
// ];

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
    title: "Authentication",
    image: project2,
    url: "https://authontication-nodejsapi.onrender.com/",
    description:
      "Cette API fournit des fonctionnalités d'authentification sécurisée et de gestion des utilisateurs. Elle utilise JWT (JSON Web Token) pour des sessions utilisateur sécurisées et Bcrypt pour le hachage des mots de passe afin d'assurer la protection des données. MongoDB sert de base de données, tandis qu'Express est utilisé pour construire la logique côté serveur. L'API prend en charge l'inscription des utilisateurs, la connexion et l'authentification, garantissant l'intégrité et la sécurité des données tout au long du processus.",
    technologies: ["Nodejs", "MongoDB", "Express", "JWT", "Bcrypt"],
  },
  {
    title: "Portfolio",
    image: project3,
    url: "#",
    description:
      "Ce portfolio personnel met en valeur des projets et des compétences avec un design interactif et moderne. Il utilise Framer Motion pour des animations et des transitions fluides, offrant une expérience utilisateur dynamique. Tailwind CSS est utilisé pour un style rapide et réactif, garantissant que le portfolio soit agréable à regarder sur tous les appareils. Le projet met en avant des réalisations clés et intègre des principes de design propres et efficaces.",
    technologies: [" React", "Framer Motion", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "CM BLOCK 2 APT 15 DAWDIYAT MARRAKECH ",
  phoneNo: "+212-669499842",
  email: "mohamedesseddyqqy@gmail.com",
};
