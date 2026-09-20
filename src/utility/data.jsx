import { FaReact, FaHtml5, FaCss3Alt, FaSass,FaCode,FaServer,FaTools, FaBootstrap, FaJava, FaGitAlt, FaGithub, FaFigma, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrOracle } from "react-icons/gr";
import { BiLogoVisualStudio } from "react-icons/bi";
import smartNotes from './images/smartNotes.png'
import recipeGenie from './images/recipeGenie.png'
import wordGuessingGame from './images/wordGuessingGame.png'
import pokemonFinder from './images/pokemonFinder.png'

import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiAxios,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiGooglechrome,
  SiPostman,
  SiGithubcopilot,
  SiOpenaigym,
} from "react-icons/si";
 
import { TbApi, TbDatabase, TbBrandReact, TbPointer } from "react-icons/tb";

const skillSet = [
    {
        category: "Frontend Development",
        categoryIcon:<FaCode className="category-icon" />,
        skills: [
            { name: "ReactJS", icon: <FaReact className="react-icon" /> },
            { name: "JavaScript (ES6+)", icon: <IoLogoJavascript className="js-icon" /> },
            { name: "TypeScript", icon: <SiTypescript className="ts-icon" /> },
            { name: "HTML5", icon: <FaHtml5 className="html-icon" /> },
            { name: "CSS3", icon: <FaCss3Alt className="css-icon" /> },
            { name: "SCSS", icon: <FaSass className="scss-icon" /> },
            { name: "Bootstrap", icon: <FaBootstrap className="bootstrap-icon" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="tailwind-icon" /> },
            { name: "Redux Toolkit", icon: <SiRedux className="redux-icon" /> },
            { name: "Context API", icon: <TbBrandReact className="context-icon" /> },  
            { name: "Hooks", icon: <TbBrandReact className="hooks-icon" /> },  
            { name: "Axios", icon: <SiAxios className="axios-icon" /> },
            { name: "REST API Integration", icon: <TbApi className="restapi-icon" /> } 
        ]
    },
    {
        category: "Backend Development",
        categoryIcon:<FaServer className="category-icon" />,
        skills: [
            { name: "Java", icon: <FaJava className="java-icon" /> },
            { name: "Spring Boot", icon: <SiSpringboot className="springboot-icon" /> },
            { name: "JDBC", icon: <TbDatabase className="jdbc-icon" /> },  
            { name: "Hibernate", icon: <SiHibernate className="hibernate-icon" /> },
        ]
    },
    {
        category: "Databases",
        categoryIcon:<FaDatabase className="category-icon" />,
        skills: [
            { name: "MySQL", icon: <SiMysql className="mysql-icon" /> },
            { name: "Oracle DB", icon: <GrOracle className="oracle-icon" /> },
            { name: "SQL", icon: <FaDatabase className="sql-icon" /> },  
        ]
    },
    {
        category: "Tools & Technologies",
        categoryIcon:<FaTools className="category-icon" />,
        skills: [
            { name: "Git", icon: <FaGitAlt className="git-icon" /> },
            { name: "GitHub", icon: <FaGithub className="github-icon" /> },
            { name: "VS Code", icon: <BiLogoVisualStudio className="vscode-icon" /> },
            { name: "Chrome DevTools", icon: <SiGooglechrome className="chrome-icon" /> },
            { name: "Postman", icon: <SiPostman className="postman-icon" /> },
            { name: "Figma", icon: <FaFigma className="figma-icon" /> },
            { name: "GitHub Copilot", icon: <SiGithubcopilot className="copilot-icon" /> },
            { name: "Cursor", icon: <TbPointer className="cursor-icon" /> },  
            { name: "ChatGPT", icon: <SiOpenaigym className="chatgpt-icon" /> },  
        ]
    }
];

export default skillSet;


export const project = [
    {
        title: 'SmartNotes Manager',
        desc: 'Responsive notes management app with full CRUD, search, and filtering.',
        features: [
            'CRUD functionality with advance search and filtering',
            'Persistent storage using localStorage',
            'Reusable components for usability and maintainability'
        ],
        skills: ['React', 'TailwindCSS', 'localStorage'],
        img: smartNotes,
        url: 'https://smart-notes-manager-omega.vercel.app/',
        github: 'https://github.com/Gayatri-kumari/Smart-Notes-Manager'
    },
    {
        title: 'Recipe Genie',
        desc: 'AI-powered app that suggests recipes based on ingredients you have on hand.',
        features: [
            'Dynamic prompt generation using OpenRouter AI models',
            'Ingredient add/remove with retry search options',
            'Loading states and error handling for AI responses'
        ],
        skills: ['React', 'OpenRouter AI', 'Prompt Engineering'],
        img: recipeGenie,
        url: 'https://recipegeniee.netlify.app/',
        github: 'https://github.com/Gayatri-kumari/Recipe-Genie'
    },
    {
        title: 'Assembly Endgame',
        desc: 'Interactive word-guessing game built with React and conditional game logic.',
        features: [
            'Custom hints and a game rules modal',
            'State-based gameplay logic with conditional rendering',
            'Animations for an engaging user experience'
        ],
        skills: ['React', 'Hooks', 'Conditional Rendering'],
        img: wordGuessingGame,
        url: 'https://wordguessergame.netlify.app/',
        github: 'https://github.com/Gayatri-kumari/EndGame'
    },
    {
        title: 'Pokémon Finder',
        desc: 'Real-time Pokémon search app built with vanilla JavaScript and a public API.',
        features: [
            'Asynchronous calls to the PokéAPI',
            'Dynamic DOM manipulation for real-time search',
            'Fully responsive layout with no framework overhead'
        ],
        skills: ['JavaScript', 'API integration', 'DOM Manipulation'],
        img: pokemonFinder,
        url: 'https://gayatri-kumari.github.io/pokemonFinder/',
        github: 'https://github.com/Gayatri-kumari/pokemonFinder'
    }
];

export const educationList = [
    {
    degree: "10th (SSC)",
    institute: "TATA D.A.V Public School",
    address:"Ramgarh, India",
    year: "2015",
    score: "CGPA: 9.6"
  },
    {
        degree: "Intermediate (12th) - MPC",
        institute: "Sri Chaitanya Junior College",
        address:"Visakhapatnam, India",
        year: "2017",
        score: "74.4%"
    },
    {
      degree: "B.Tech in Computer Science",
      institute: "GITAM Deemed to be University",
      address:"Visakhapatnam, India",
      year: "2021",
      score: "CGPA: 9.02"
    }
];

 
export const statNotes = [
  { number: "3+", label: "Years Experience", rotate: -6, z: 3, translateX: "0px", translateY: "10px", color: "amber" },
  { number: "4+", label: "Projects Built", rotate: 8, z: 2, translateX: "70px", translateY: "50px", color: "sage" },
  { number: "20+", label: "Technologies", rotate: -12, z: 1, translateX: "-50px", translateY: "60px", color: "clay" },
];

