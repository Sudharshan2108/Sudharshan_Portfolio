// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  backend,
  creator,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mobile,
  mongodb,
  nodejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  reactjs,
  tailwind,
  twitter,
  typescript,
  web,
  youtube
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/Sudharshan2108",
  },
] 

// Services
export const SERVICES = [
  {
    title: "HTML CSS JS ",
    icon: web,
  },
  {
    title: "Java ",
    icon: mobile,
  },
  {
    title: "Python ",
    icon: backend,
  },
  {
    title: "MYSQL",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "git",
    icon: git,
  },
 
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Client Document Services",
    company_name: "Access Healthcare",
    iconBg: "#383E56",
    date: "November 2021 - November 2022",
    points: [
      "Dedicated Client Document Services Professional",
      "Meticulous and Results-Driven",
      "Proven Expertise in Managing and Streamlining Document Processes.", 
      "Committed to Ensuring Accuracy, Security, and Compliance.",
      "Skilled in Client Communication and Relationship Building.",
      "Proficient in Document Lifecycle Management.",
    ],
  },

  
  {
    title: "Software Development Virtual Intern",
    company_name: "Accenture",
    iconBg: "#383E56",
    date: "Feb 2024 - Mar 2024",
    points: [
    "Completed a job simulation where I supported a client with a small development team overwhelmed by the growth of their code base.",
    "Wrote a class to perform search on an interactive website in Java using the Spring Boot framework.",
    "Set up automated builds using Jenkins to validate code changes on every push.",
    " Managed the team's workload by preparing for a sprint and writing usestories in an Agile planning session.",
    ],
  },
  {
    title: "Full stack  Web Development Intern",
    company_name: "Coding Raja Technologies",
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Apr 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;

// Testimonials
export const Myworkspace = [
  {
    myworkspace:
      "I love this processor",
    name: "AMD",
    designation: "Ryzen7",

    
    
  },
  {
    myworkspace:
      "Compactibility Wins......",
    name: "Lenovo Legion ",
    designation: "5",
    
  },
  {
    myworkspace:
    " High Performance........",
    name: "Nvidia ",
    designation: "RTX3050",
    
    
    
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: " JS ",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Sudharshan2108/Disney-Plus_Hotstar_Clone",
    live_site_link: "https://sudharshan2108.github.io/Disney-Plus_Hotstar_Clone/",
  },
  {
    name: "Weather Man",
    description:
    "Stay ahead of the forecast with Weather Man, your go-to web application for real-time weather updates. Whether you're planning a weekend getaway or just need to know.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Sudharshan2108/WeatherMan",
    live_site_link: "https://weatherman-dev.web.app/",
  },
  {
    name: "Online E-Commerce Website",
    description:
      " An Streamlined Admin Page , Login Page and Customer Page for a static E-Commerce.",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "APACHE TOMCAT",
        color: "green-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Sudharshan2108/Online_Shopping-E-Commerce-Website",
  },
  {
    name: "Bone Fracture Detection",
    description:
      "A Bone fracture Detection using python, keras, machine learning which gives the result whether the bone was fractured or not in elbow,hand...",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "keras",
        color: "green-text-gradient",
      },
      {
        name: "ML ",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Sudharshan2108/Bone_Fracture_Detection",
  },
  {
    name: "Google Clone Website",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Sudharshan2108/Google-Clone",
    live_site_link: "https://gooogle-clone-develper.web.app/",
  },
  {
    name: "Brain Wave ",
    description:
    "Unlock the Future with AI: Discover cutting-edge solutions for your business needs, powered by advanced artificial intelligence technology.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/Sudharshan2108/Brain_Wave-Ai",
    live_site_link: "https://brain-wave-ai-nine.vercel.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@ashwinsudharshan7213",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/shan2108",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/Sudharshan2108",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Sudharshan2108",
  },
] as const;
