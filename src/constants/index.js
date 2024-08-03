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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  dxc,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  postgresql,
  azure,
  python,
  gcp,
  f1,
  hr,
  karpator
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Conversational Assistant Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },//switch this: Python, Azure, GCP, PostgreSQL 
  {
    name: "python",
    icon: python,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "docker",
    icon: docker,
  },

  {
    name: "google cloud platform",
    icon: gcp,
  },
];

const experiences = [
  {
    title: "BSc Student",
    company_name: "Budapest University Of Technology And Economics",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - Jan 2024",
    points: [
      "Developing and maintaining android applications using Kotlin and other related technologies.",
      "Collaborating with instructors and other students to create high-quality end products.",
      "Implementing responsive design and ensuring multi-device compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Conversational Assistant Developer",
    company_name: "DXC Technology",
    icon: dxc,
    iconBg: "#E6DEDD",
    date: "Okt 2022 - Sept 2023",
    points: [
      "Creating and sustaining a conversational assistant applications using Python, Microsoft Bot Framework, Azure and other related technologies.",
      "Working in tandem with multidisciplinary teams, including designers, product managers, and fellow developers to deliver a top-notch product.",
      "Establishing a multi-functional responsive frontend design for the assistant.",
      "The production application was a great success with a 70% usage within the company.",
    ],
  },//#383E56
  {
    title: "Web Developer",
    company_name: "DXC Technology",
    icon: dxc,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Present",
    points: [
      "Building and managing web applications with the use of React.js, MantineUI, and similar technologies.",
      "Joining forces with diverse teams, including designers, product managers, and peer developers to craft superior products.",
      "Executing adaptable design and ensuring it works seamlessly on different browsers.",
      "Engaging in code reviews and offering valuable feedback to other developers.",
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
    name: "Formula 1 Fan Edition",
    description:
      "This is a Formula One app that displays various information about the current Formula One season, including driver standings, race schedules, race results, driver information, and world champions. The app is built using Kotlin and Jetpack Compose for the UI.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "jetpack compose",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: f1,
    source_code_link: "https://github.com/dikvsladik/FormulaOneFE",
  },
  {
    name: "Assistant UI",
    description:
      "This is a web application that empowers users to interact with a conversational assistant. Its built-in features include showing citations and code highlighting among others.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fluentui-v9",
        color: "green-text-gradient",
      },
      {
        name: "azure",
        color: "pink-text-gradient",
      },
    ],
    image: karpator,
    source_code_link: "https://github.com/",
  },
  {
    name: "HR Assistant",
    description:
      "The HR Assistant application is a tool that enables quick and efficient searching of resumes, recommendation of similar candidates, as well as the automatic sending of emails.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mantineui",
        color: "pink-text-gradient",
      },
    ],
    image: hr,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
