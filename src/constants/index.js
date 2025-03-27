import {
  github,
  resume,
  linkedin,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Cfa,
  Honeywell,
  Threshold,
  Kickback,
  Cpp,
  Csharp,
  Memory,
  Bank,
  Hangman,
  Chatbot,
  Credit,
  Currency,

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
    title: "-GitHub-",
    icon: github,
    link: "https://github.com/RyRyRich"
  },
  {
    title: "-LinkedIn-",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ryan-richardson-b099b4294"
  },
  {
    title: "-Resume-",
    icon: resume,
    link: "https://docs.google.com/document/d/12pSaj8qwMpSuuw_ZwywZalCG0L78Dr-p/edit?usp=sharing&ouid=118276524255631017537&rtpof=true&sd=true"
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "C#",
    icon: Csharp,
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
    name: "C++",
    icon: Cpp,
  },
];

const experiences = [
  {
    title: "Co-Founder",
    company_name: "KickBack",
    icon: Kickback,
    iconBg: "#E6DEDD",
    date: "Decemember 2024 - Present",
    points: [
      "Co-founded a startup focused on developing a social gathering app using web development technologies.",
      "Lead the development and maintenance of the app's front-end using JavaScript, React.js and related technologies.",
      "Focus on creating responsive, interactive designs and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Honeywell Scholar/Apprentice",
    company_name: "Honeywell",
    icon: Honeywell,
    iconBg: "#E6DEDD",
    date: "August 2023-Present",
    points: [
      "Mentored by a senior-level electrical engineer, receiving guidance on academic challenges and career development.",
      "Coached through the exploration of the work-life balance and career path of an electrical engineer.",
      "Gained valuable insights into the industry, helping shape future career decisions and enhancing academic growth.",
    ],
  },
  {
    title: "Account Manager: Leadership",
    company_name: "Threshold Marketing",
    icon: Threshold,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Achieved a leadership role within a month by becoming the primary contact for clients, qualifying community members for benefit eligibility, and supporting them through the enrollment process.",
      "Collaborated with Senior Account Managers to refine brand development strategies and manage accounts, ensuring client satisfaction and effective campaign monitoring.",
      "Gained experience in telecommunications, sales, and business, focusing on building strong client relationships and driving business growth.",
    ],
  },
  {
    title: "Chick-Fil-a Trainer",
    company_name: "Chick-fil-a",
    icon: Cfa,
    iconBg: "#383E56",
    date: "July 2020 - August 2023",
    points: [
      "Led and trained 30+ new hires on food safety procedures, server etiquette, and cashier operations.",
      "Managed over 50 guest concerns, collaborating with the Shift Lead to ensure customer satisfaction and maintain a positive work environment",
      "Worked to enhance team efficiency, contributing to smoother operations and improved service delivery",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "Odera",
    designation: "Senior Electrical Engineer",
    company: "Honewell",
    image: "",
  },
];

const projects = [
  {
    name: "Memory Card Game",
    description:
      "The Memory Card game is a matching pairs game created using JavaScript, HTML, and CSS. Players are tasked with flipping over cards to find matching pairs. The game tracks the number of moves and offers a fun, interactive way to challenge memory and concentration skills.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Memory,
    source_code_link: "https://github.com/RyRyRich/Memory-Card-Game",
  },
  {
    name: "Currency Converter App",
    description:
      "The Currency Converter app is built using JavaScript, HTML, and CSS, and integrates with a currency exchange API to convert values between different currencies. The app provides real-time exchange rate data, allowing users to easily convert amounts between various currencies with an intuitive and user-friendly interface..",
    tags: [
      {
        name: "Javascript & API",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Currency,
    source_code_link: "https://github.com/RyRyRich/Currency-Converter-App",
  },
  {
    name: "Hangman Game",
    description:
      "The Hangman game is a classic word-guessing game developed using JavaScript, HTML, and CSS. The game allows players to guess letters of a hidden word, with a limited number of attempts before the game ends.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Hangman,
    source_code_link: "https://github.com/RyRyRich/HangMan",
  },
  {
    name: "AI Chatbot",
    description:
      "The AI Chatbot is built using JavaScript, HTML, and CSS, integrated with the Google Gemini API for natural language processing. The chatbot allows users to interact in a conversational interface, providing intelligent responses based on the queries asked.",
    tags: [
      {
        name: "Javascript & API",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: Chatbot,
    source_code_link: "https://github.com/RyRyRich/-Ryan-s-AI-Chatbot",
  },
  {
    name: "Banking Managment Program",
    description:
     "The Banking Management program in C++ allows for managing bank accounts, including creating new accounts, depositing and withdrawing money, modifying account details, and viewing account balances. It utilizes file handling to store and retrieve account information, supports different account types, and allows users to interact with the system through a simple menu-based interface.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      
      
    ],
    image: Bank,
    source_code_link: "https://github.com/RyRyRich/Bank-Management-Program",
  },
  {
    name: "Credit Card Validator",
    description:
      "The Credit Card Validator is a C++ program designed to validate credit card numbers using the Luhn algorithm. It checks whether the given credit card number is valid based on its length, checksum, and structure.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    image: Credit,
    source_code_link: "https://github.com/RyRyRich/Credit-Card-Validator-",
  },
];

export { services, technologies, experiences, testimonials, projects };