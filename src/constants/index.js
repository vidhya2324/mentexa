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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import Project_1 from "../assets/Project_1.png";
import Project_2 from "../assets/Project_2.png";
import Project_3 from "../assets/Project_3.png";
import Project_4 from "../assets/Project_4.png";
import Project_5 from "../assets/Project_5.png";
import Project_6 from "../assets/Project_6.png";
import Project_7 from "../assets/Project_7.png";
import Project_8 from "../assets/Project_8.png";
import Project_9 from "../assets/Project_9.png";
//import Project_10 from "../assets/Project_10.png";

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
    title: "Web Development & UI/UX Design",
    icon: web,
  },
  {
    title: "Flutter Development & Machine Learning ",
    icon: mobile,
  },
  {
    title: "Idea Guidance & Internship",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Week 1 – Spark & Strategy",
    company_name: "Kickoff Phase",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Week 1",
    points: [
      "Listening to your idea and vision.",
      "Research and locking key features.",
      "Quick sketches & wireframes for flow.",
      "Clear roadmap with milestones.",
    ],
  },
  {
    title: "Week 2 – Design in Motion",
    company_name: "Creative Sprint",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Week 2",
    points: [
      "Turning ideas into clean UI/UX.",
      "Interactive prototypes for early feel.",
      "Consistent look across platforms.",
      "Tweaks based on your feedback.",
    ],
  },
  {
    title: "Week 3 – Build & Develop",
    company_name: "Creation Phase",
    icon: shopify,
    iconBg: "#383E56",
    date: "Week 3",
    points: [
      "Frontend magic with React/Flutter.",
      "Backend, APIs & databases in action.",
      "Features built & tested step by step.",
      "Progress updates keep you involved.",
    ],
  },
  {
    title: "Week 4 – Test, Launch & Learn",
    company_name: "Delivery & Growth",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Week 4",
    points: [
      "Testing on devices & browsers.",
      "Bug fixes & performance polish.",
      "Final walkthrough before launch.",
      "Go live 🎉 + post-launch support & mentoring.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Before joining Mentexa, I was struggling to shape my startup idea. The mentors here not only guided me but also connected me with the right people. Now my project is on track, and I feel unstoppable!",
    name: "Aarav Sharma",
    designation: "Student Entrepreneur",
    company: "IIT Delhi",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Mentexa is not just a platform; it’s a community. The way they connect students and startups is something I haven’t seen anywhere else. They really care about turning ideas into real impact.",
    name: "Meera Nair",
    designation: "Innovation Lead",
    company: "Startup Kerala Mission",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I had skills but lacked direction. Through Mentexa, I got guidance, feedback, and opportunities that completely changed my journey. Today, I’m confident about building my dream company.",
    name: "Reshma Reddy",
    designation: "Founder",
    company: "TechSphere Labs",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];


const projects = [
  {
    name: "Finance Management System",
    description:
      "A full-stack web app to manage personal finances by tracking income, expenses, and visualizing budgets.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
    ],
    image: Project_1,
    source_code_link: "https://finance-ten-ashen.vercel.app/",
  },
  {
    name: "Nexrise-AI Career Coach",
    description:
      "A platform connecting teachers and students with features for doubt resolution and community building.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "Neon", color: "orange-text-gradient" },
      { name: "Clerk", color: "purple-text-gradient" },
    ],
    image: Project_2,
    source_code_link: "https://nex-rise-21u3.vercel.app/",
  },
  {
    name: "Neural Network Project",
    description:
      "Implemented a simple neural network to understand deep learning fundamentals and model training.",
    tags: [
      { name: "RNN", color: "blue-text-gradient" },
      { name: "CNN", color: "green-text-gradient" },
      { name: "Tensorflow", color: "pink-text-gradient" },
      { name: "Keras", color: "orange-text-gradient" },
    ],
    image: Project_3,
    source_code_link: "https://github.com/vidhya2324/Neutral_network.git",
  },
  {
    name: "Streamlit Diabetes Prediction",
    description:
      "Interactive data visualization dashboard built using Streamlit for quick data exploration, focusing on diabetes.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
      { name: "Pandas", color: "pink-text-gradient" },
      { name: "Model Training", color: "orange-text-gradient" },
    ],
    image: Project_4,
    source_code_link:
      "https://github.com/vidhya2324/Deploy_Diabetes_Streamlit.git",
  },
  {
    name: "Chatbot Development",
    description:
      "Developed a conversational chatbot integrating NLP techniques for customer support automation.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NLTK", color: "green-text-gradient" },
      { name: "TensorFlow", color: "pink-text-gradient" },
    ],
    image: Project_5,
    source_code_link: "https://github.com/vidhya2324/Chatbot.git",
  },
  {
    name: "Machine Learning Project",
    description:
      "Built with LSTM to predict stock prices based on historical financial data and market trends.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "LSTM", color: "green-text-gradient" },
      { name: "SVM", color: "pink-text-gradient" },
      { name: "Finance", color: "orange-text-gradient" },
    ],
    image: Project_6,
    source_code_link:
      "https://github.com/vidhya2324/Machine_learning_starting_project.git",
  },
  {
    name: "Chatbot using Gemini API",
    description:
      "Conversational chatbot powered by Gemini API for natural language understanding and interactive dialogue.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Gemini API", color: "green-text-gradient" },
      { name: "Chatbot", color: "pink-text-gradient" },
      { name: "NLP", color: "orange-text-gradient" },
    ],
    image: Project_7,
    source_code_link: "https://github.com/vidhya2324/ChatBot_gemini_API.git",
  },
  {
    name: "Chatbot with Hugging Face",
    description:
      "Developed a chatbot using Hugging Face transformers to enable contextual conversations with users.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Hugging Face", color: "green-text-gradient" },
      { name: "Transformers", color: "pink-text-gradient" },
      { name: "NLP", color: "orange-text-gradient" },
    ],
    image: Project_8,
    source_code_link: "https://github.com/vidhya2324/ChatBot_Hugging_Face.git",
  },
  {
    name: "AI-Powered Blood Test Analyzer",
    description:
      "A Flutter-based mobile app that interprets blood test results using OpenAI's API, offering health insights.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Dart", color: "green-text-gradient" },
      { name: "OpenAI API", color: "pink-text-gradient" },
      { name: "Healthcare", color: "orange-text-gradient" },
    ],
    image: Project_9,
    source_code_link: "https://github.com/vidhya2324/Flutter-OpenAI-main",
  },
];

export { services, technologies, experiences, testimonials, projects };
