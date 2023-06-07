import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  sixfab,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  acibadem,
  viveven,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Acibadem Healthcare Group",
    icon: acibadem,
    iconBg: "#E6DEDD",
    date: "March 2023 – Present..",
    points: [
      "We develop applications using international hospitals and health chains. (Cerebral Plus)",
      "C# · ASP.NET Core · Domain-Driven Design (DDD) · RabbitMQ  ",
      "· Git · Angular · Javascript · Typescript",
      "· Docker · Scrum · Design Patterns · Azure · Microservices",
    ],
  },
  {
    title: "Founder & Tech Lead",
    company_name: "Viveven",
    icon: viveven,
    iconBg: "#E6DEDD",
    date: "February 2023 – Present..",
    points: [
      "We develop our startup application within our company and also produce software solutions for contracted companies. (VivEvent, VivModel, Ecommerce Application, Customize Company Page)",
      "C# · ASP.NET Core · JavaScript · Domain-Driven Design (DDD) · RabbitMQ · React.js · Docker  ",
      "· Task Management · Scrum · Next.js · Design Patterns · Azure · MobX · DevOps · Microservices",
      "· TypeScript · TensorFlow · Test Driven Development  · Cloud Applications · Git",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Sixfab",
    icon: sixfab,
    iconBg: "#383E56",
    date: "November 2022 – March 2023",
    points: [
      "I used Python Flask framework for backend. In my API, this endpoints were designed to be JWT protected. I used MongoDB as database and mongoengine as ODM tool. I created a front-end with Vue.js and managed the state with Vuex. I dockerized the project.",
      "JavaScript · Docker · Python · MongoDB · Secure Shell (SSH) ",
      "· REST · Flask · Vue.js · Git",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Nextlua",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2022 – November 2022",
    points: [
      "IkinciYeni , Garenta, Getir Araç(Moov) CRM, CMS and various projects",
      "C# · ASP.NET Core · OOP (Object Orඈ ented Programmඈ ng) · JavaScript  ",
      "· Design Patterns · CSS · SQL · Microservices · Redis · Entity Framework · Data Structures",
      "· Domain-Driven Design (DDD) · RabbitMQ · Docker · HTML  · Microsoft SQL Server",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Elfatek",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2021– September 2021",
    points: [
      "I made an application like RealTerm Serial/TCP that does serial port communication, determines the type of data received or the type to be sent, and keeps them either on the screen or in MySQL database.",
      "C# · .NET · MySQL · WPF ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
