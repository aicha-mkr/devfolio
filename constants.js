export const METADATA = {
  author: "Aicha Mokhtar",
  title: "Portfolio | Aicha Mokhtar",
  description:
    "Aicha Mokhtar is a passionate freelance Full-Stack Developer dedicated to building dynamic and user-friendly applications.",
  keywords: [
    "Shubh Porwal",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Web and Mobile Developer.",
  "UI/UX Designer",
  "Freelancer",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mokhtaraichaa@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/aicha-mokhtar-072600252/",
  },
  {
    name: "github",
    url: "https://github.com/aicha-mkr",
  },
  
  
];
export const SKILLS = {
    languagesAndTools: [
      "html",
      "css",
      "javascript",
      "php",
      "python",
      "typescript",
      "nodejs",
      "vite",
      "firebase",
      "figma",
      "flutter",
      "wordpress",
    ],
    librariesAndFrameworks: [
      "react",
      "nextjs",
      "laravel",
      "nestJS",
    ],
    databases: ["mysql", "mongodb"],
    other: ["git"],
  };

export const PROJECTS = [
  {
    name: "NY event Dijon",
    image: "/projects/NYevent.webp",
    blurImage: "/projects/blur/NYevent-blur.webp",
    description: "A booking website",
    url: "https://nyevenementsdijon.com/",
    gradient: ["#000066", "#6699FF"],
    tech: ["nestJS","nextjs","figma" ],
  },
  {
    name: "Asian Restaurant",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Asian Restaurant using Flutter",
    gradient: ["#F14658", "#DC2537"],
    tech: ["flutter"],
  },

  {
    name: "Planner",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/medium.blur.webp",
    description:      "An innovative e-commerce WordPress website specializing in the online sale of planners",

    gradient: ["#142D46", "#2E4964"],
    tech: ["wordpress"],
  },
  {
    name: "Limon",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Limon UI build with Flutter",
    gradient: ["#FFA62E", "#EA4D2C"],
    tech: ["flutter","figma" ],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "Summer internship",
      description:
      " Performance Optimization: Analyzing and enhancingthe performance of existing applications",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
       Application Development: Designing and implementing key features in .NET C# applications.
         </div>
      ),
    },
    
    
  ],
  AVIATE: [
    {
      title: "Summer internship",
      description:
        "A project that automates the generation and delivery of weekly business activity summaries using Valomnia's API. It provides businesses with a seamless way to receive insights on key performance indicators (KPIs) such as total revenue, total orders, total employees, and average sales. The solution is built using Angular for the frontend and Laravel for the backend, ensuring a robust and scalable application.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
            The project aims to develop a feature for sending weekly business activity summaries via an external web application.
        </div>

      ),
    },
    
  ],
  SPACENOS: [
    {
      title: "End of year project",
      description:
        "ongoing",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
        ongoing        </div>
      ),
    },
   
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
