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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// ✅ NAVIGATION LINKS
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

// ✅ SERVICES
export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Next.js Developer",
    icon: creator,
  },
];

// ✅ TECHNOLOGIES
export const technologies = [
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

// ✅ EXPERIENCES (Fresher POV)
export const experiences = [
  {
    title: "Frontend Development (React.js)",
    company_name: "Self Learning",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Built multiple landing pages and UI components using React.js and Tailwind CSS.",
      "Practiced creating responsive, accessible designs across different screen sizes.",
      "Learned component-based architecture, props, state management, and routing.",
      "Used Git for version control and GitHub for hosting personal projects.",
    ],
  },
  {
    title: "Backend Development (Node.js)",
    company_name: "Personal Practice",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Created simple RESTful APIs using Express.js for user authentication and data handling.",
      "Connected MongoDB and MySQL databases for data storage and queries.",
      "Handled environment variables, middleware, and basic error handling.",
    ],
  },
  {
    title: "3D Web Exploration (Three.js)",
    company_name: "Learning Phase",
    icon: threejs,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Experimenting with 3D scenes and animations using Three.js.",
      "Integrated 3D objects into landing pages for modern UI design.",
      "Understanding camera, lights, meshes, and geometry basics.",
    ],
  },
  {
    title: "Mini Projects & Personal Portfolio",
    company_name: "Project-Based Learning",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Developed a personal portfolio to showcase projects and skills.",
      "Created a job search UI, car rental page, and basic CRUD apps.",
      "Worked with project folder structures, reusable components, and API fetch logic.",
    ],
  },
];

// ✅ TESTIMONIALS
export const testimonials = [
  {
    testimonial: ".",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: ".",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// ✅ PROJECTS
export const projects = [
  {
    name: "Code-Quiz",
    description:
      "Interactive quiz app for testing coding knowledge with real-time feedback and score tracking.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Himayathullah3333/Code-Quizz.git",
  },
  {
    name: "E-commerce",
    description:
      "Responsive e-commerce site with product browsing, cart, and secure checkout integration",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Himayathullah3333/E-commerce.git",
  },
  {
    name: "3D-Landing page",
    description:
      "A visually engaging 3D landing page built with interactive animations and smooth scrolling.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "three.js", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "",
  },
];
