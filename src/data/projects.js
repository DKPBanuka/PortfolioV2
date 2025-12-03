import portfolioImg from '../assets/projects/Portfolio.png';
import devopsImg from '../assets/projects/devops.webp';
import portfolio1Img from '../assets/projects/Portfolio1.png';
import portfolio2Img from '../assets/projects/Portfolio2.png';

// New Project Images
import lankaReliefImg from '../assets/projects/LankaReleif.jpg';
import lingoLeapImg from '../assets/projects/LingoLeap.jpg';
import pocketKadeImg from '../assets/projects/PocketKade.png';
import classPayImg from '../assets/projects/ClassPay.png';

// CI/CD Gallery Images
import cicd1 from '../assets/projects/CI_CD/1.jpg';
import cicd2 from '../assets/projects/CI_CD/2.jpg';
import cicd3 from '../assets/projects/CI_CD/3.jpg';
import cicd4 from '../assets/projects/CI_CD/4.jpg';
import cicd5 from '../assets/projects/CI_CD/5.jpg';

export const projects = [
  {
    name: 'LankaRelief - Disaster Management Platform',
    description: 'A centralized platform connecting donors, victims, and volunteers for real-time disaster coordination.',
    features: [
      'Architected a full-stack solution using React (Vite) and Firebase for real-time data synchronization.',
      'Implemented a robust CI/CD pipeline using GitHub Actions and Docker to automate deployment.',
      'Integrated Google Gemini AI to power an intelligent assistant and refine user-submitted help requests.'
    ],
    liveDemo: 'https://lanka-relief.web.app/',
    github: 'https://github.com/DKPBanuka/LankaRelief',
    linkedin: 'https://www.linkedin.com/posts/pasindubanuka001_reactjs-typescript-firebase-ugcPost-7401624553350696960-2_7t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVscvIBDafF4JQyPkZxhRJm0GczupXj9Yo', // Placeholder for user to update
    image: lankaReliefImg,
    gallery: [],
    techStack: [
      { name: 'React', icon: 'react' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Docker', icon: 'docker' },
      { name: 'GitHub Actions', icon: 'github' }
    ],
  },
  {
    name: 'Azure DevOps CI Migration',
    description: 'Migrated CI pipelines for a microservices-based application from GitHub Actions to Azure DevOps.',
    features: [
      'Configured a Self-Hosted Linux Agent on an Azure VM to execute build jobs securely.',
      'Created multi-stage YAML Pipelines to build and push Docker images to Azure Container Registry (ACR).',
      'Implemented path-based triggers to optimize build times for individual services (Vote, Result, Worker).'
    ],
    liveDemo: '',
    github: 'https://github.com/DKPBanuka/example-voting-app',
    linkedin: 'https://www.linkedin.com/posts/pasindubanuka001_azuredevops-cicd-devops-ugcPost-7397537908074631168-x6IX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVscvIBDafF4JQyPkZxhRJm0GczupXj9Yo',
    image: devopsImg,
    gallery: [cicd1, cicd2, cicd3, cicd4, cicd5],
    techStack: [
      { name: 'Azure DevOps', icon: 'azure' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
      { name: 'ACR', icon: 'cloud' }
    ],
  },
  {
    name: 'LingoLeap - AI-Powered Language Learning',
    description: 'An interactive language learning platform featuring AI-generated content and voice training.',
    features: [
      'Built a modern web application using Next.js 15 and ShadCN UI for a premium user experience.',
      'Integrated Google Genkit to generate dynamic quizzes and personalized learning content.',
      'Implemented a "Voice Trainer" module to analyze user pronunciation using web audio technologies.'
    ],
    liveDemo: 'https://lingo-leap.vercel.app',
    github: 'https://github.com/DKPBanuka/LingoLeap',
    image: lingoLeapImg,
    gallery: [],
    techStack: [
      { name: 'Next.js', icon: 'next' },
      { name: 'Google Genkit', icon: 'ai' },
      { name: 'ShadCN UI', icon: 'ui' }
    ],
  },
  {
    name: 'Pocket Kade - AI-Powered Inventory SaaS',
    description: 'A multi-tenant SaaS solution for inventory management with AI features.',
    features: [
      'Built a scalable SaaS platform using Next.js and Firebase with real-time data syncing.',
      'Integrated Google Gemini AI to provide smart line-item suggestions, enhancing user efficiency.',
      'Implemented Role-Based Access Control (RBAC) and automated stock tracking workflows.'
    ],
    liveDemo: 'https://pocket-kade.vercel.app',
    github: 'https://github.com/DKPBanuka/Pocket-Kade',
    image: pocketKadeImg,
    gallery: [],
    techStack: [
      { name: 'Next.js', icon: 'next' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Genkit', icon: 'ai' },
      { name: 'Docker', icon: 'docker' }
    ],
  },
  {
    name: 'AgriVision Pro - Smart Farming System',
    description: 'An advanced farm management dashboard with 3D visualization.',
    features: [
      'Developed a full-stack system to monitor crop yields, livestock, and financial analytics.',
      'Utilized Three.js for interactive 3D farm visualization within the browser.'
    ],
    liveDemo: '',
    github: 'https://github.com/DKPBanuka/AgriVisionPro',
    image: portfolioImg, // Using generic portfolio image as no specific one found
    gallery: [],
    techStack: [
      { name: 'PHP', icon: 'php' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Three.js', icon: '3d' }
    ],
  },
  {
    name: 'UniWiz - Job Portal Platform',
    description: 'A comprehensive recruitment platform connecting students with part-time jobs.',
    features: [
      'Designed a decoupled architecture with a secure PHP REST API and React frontend.',
      'Implemented real-time messaging, CV uploads, and company verification systems.'
    ],
    liveDemo: '',
    github: 'https://github.com/DKPBanuka/UniWiz_Parttime',
    image: portfolio1Img, // Using generic portfolio image
    gallery: [],
    techStack: [
      { name: 'React', icon: 'react' },
      { name: 'PHP', icon: 'php' },
      { name: 'MySQL', icon: 'mysql' }
    ],
  },
  {
    name: 'ClassPay - Teacher Payment Manager',
    description: 'An offline-first Progressive Web App for managing class fees.',
    features: [
      'Engineered a PWA with Service Workers for fully offline functionality.',
      'Created a "Glass Morphism" design and automated receipt generation features.'
    ],
    liveDemo: 'https://dkpbanuka.github.io/ClassPay/',
    github: 'https://github.com/DKPBanuka/ClassPay',
    image: classPayImg,
    gallery: [],
    techStack: [
      { name: 'HTML5', icon: 'html' },
      { name: 'Tailwind', icon: 'tailwind' },
      { name: 'IndexedDB', icon: 'db' }
    ],
  }
];
