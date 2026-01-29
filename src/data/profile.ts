export const profile = {
  name: "Kevin Wielander",
  title: "Software Developer",
  location: "Vienna, Austria",
  email: "kevin.wielander@pm.me",
  phone: "+43 676 540 82 39",
  linkedin: "https://www.linkedin.com/in/kwielander/",
  github: "https://github.com/kevinwielander",
  summary:
    "Full Stack Developer specializing in distributed systems, microservices, and cloud-native applications. Passionate about building scalable software with clean architecture and great developer experience.",
};

export interface Experience {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Genetec",
    type: "Full-Time",
    period: "01/2025 - Present",
    location: "Vienna, Austria",
    highlights: [
      "Working on a microservice architecture on Azure with .NET and MSSQL",
      "Developing a microfrontend in React using signals for fine-grained reactivity",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Woschitz Group",
    type: "Part-Time",
    period: "08/2020 - 01/2025",
    location: "Vienna, Austria",
    highlights: [
      "Developed an internal offer generation system using Java Spring Boot, docx4j, and MongoDB",
      "Worked on a customizable forms application for document automation using Python, Firestore, and Angular",
      "Designed and implemented an agent for home office tracking and compliance checks with React and Python",
      "Deployed an on-prem GitLab server and established CI/CD pipeline standards",
      "Implemented a data connector scraping sensor data for ExoCloud simulations",
    ],
  },
  {
    title: "System Administration & User Support",
    company: "Woschitz Group",
    type: "Part-Time",
    period: "12/2019 - 08/2020",
    location: "Vienna, Austria",
    highlights: [
      "Reduced user downtime through proficient technical support and troubleshooting for 120 end-users",
      "Managed user accounts, permissions, and access rights within Active Directory",
      "Designed and implemented a distributed backup solution for 20TB of data",
    ],
  },
];

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
}

export const education: Education[] = [
  {
    degree: "M.Sc.",
    field: "Software Engineering & Internet Computing",
    institution: "Vienna University of Technology",
    period: "08/2023 - Present",
    location: "Vienna, Austria",
    details: [
      "Thesis (in Progress): A Neuro-Symbolic Approach to Semantic Conflict Resolution in Offline-First Architectures",
      "Teaching Assistant in Advanced Internet Computing & Software Testing",
      "GPA: 1.5",
    ],
  },
  {
    degree: "B.Sc.",
    field: "Software & Information Engineering",
    institution: "Vienna University of Technology",
    period: "10/2019 - 08/2023",
    location: "Vienna, Austria",
    details: [
      "Thesis: Improving Optical Character Recognition for Business Documents using Image Preprocessing",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "Meal Plan App with Dynamic Pricing",
    description:
      "Developed an app for generating meal plans and dynamic shopping lists by scraping recipe sites and local supermarkets. Implemented algorithms to match supermarket products with recipe ingredients taking fridge inventory into account, achieving 89% accuracy.",
    technologies: ["Python", "Web Scraping", "Algorithm Design"],
  },
  {
    title: "Deep Learning Image Reconstruction",
    description:
      "Engineered adversarial generative models (WGAN-GP, CycleGAN) and mixture-of-experts architectures from scratch in PyTorch, implementing gradient penalty enforcement, cycle consistency loss, and distributed end-to-end training pipelines.",
    technologies: ["PyTorch", "GANs", "Deep Learning"],
  },
  {
    title: "Microservice Architecture for Remote Sensing",
    description:
      "Built microservices for classifying remote sensing data using async messaging and deep learning. Enhanced redundancy with MinIO buckets. Boosted performance with Redis caching and RabbitMQ.",
    technologies: ["Microservices", "Redis", "RabbitMQ", "MinIO"],
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["C#", "Java", "JavaScript", "TypeScript", "Python", "Go", "SQL"],
  },
  {
    name: "Backend",
    skills: ["ASP.NET Core", "Spring Boot", "Node.js", "REST APIs", "GraphQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Angular", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["Azure", "Docker", "GitLab CI/CD", "Kubernetes"],
  },
  {
    name: "Databases",
    skills: ["MSSQL", "MongoDB", "PostgreSQL", "Redis", "Firestore"],
  },
  {
    name: "Architecture",
    skills: ["Microservices", "Event Sourcing", "Distributed Systems"],
  },
];
