// ===== SIRF YAHAN SE APNI DETAILS BADLO =====

export const ME = {
  name: "Aniket Gupta",
  roles: ["Frontend Developer", "Backend Developer", "MERN Stack Developer", "Web Developer"],
  tagline: "I build responsive and dynamic web applications with modern technologies.",
  photo: "/ani123.jpeg", // apni photo: public/me.jpg me rakho aur "/me.jpg" likho. Khali = initials
  email: "aniketgupta3071@gmail.com",
  phone: "9939323071",
  location: "Delhi, India",
  about:
    "Hi, I'm Aniket Gupta, a BCA student and aspiring MERN Stack Developer passionate about building modern, responsive, and user-friendly web applications. I have hands-on experience with MongoDB, Express.js, React.js, Node.js, JavaScript, MySQL, Tailwind CSS, Git, and GitHub. I enjoy solving real-world problems through code, learning new technologies, and continuously improving my development skills to become a successful Software Engineer.",
  stats: [["5", "Projects built"], ["1", "Internship"], ["MERN", "Stack focus"]],
  education: ["Bachelor of Computer Applications (BCA)", "DPG Degree College, Gurugram (Haryana)", "2023 - 2026"],
};

export const NAV = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

export const EXPERIENCE = {
  role: "Web Developer Intern",
  org: "InAmigos Foundation | Remote",
  date: "14 Sep 2026 - 27 Sep 2026",
  points: [
    "Developed and deployed a responsive website for InAmigos Foundation, an NGO, presenting its mission, initiatives, and key information clearly across mobile, tablet, and desktop.",
    "Designed a web page UI in Figma and converted it into a clean, responsive, working web page.",
    "Worked remotely, actively participated in team meetings, and completed assigned tasks on time.",
  ],
  link: "https://in-amigos-ngo-drab.vercel.app/",
};

export const SKILLS = [
  ["HTML", "Markup Language"], ["CSS", "Style & Layout"], ["JavaScript", "Interactivity"], ["MySQL", "Database"],
  ["React.js", "Framework"], ["Node.js", "JavaScript Runtime"], ["Express.js", "Framework"], ["MongoDB", "Database"],
];

export const TECH = ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Tailwind CSS", "Git", "GitHub"];

// Har project ka screenshot public/projects/ folder me rakho,
// aur yahan image: "/projects/filename.png" me wahi naam likho.
export const PROJECTS = [
  { title: "Smart Study Planner", type: "Web App", stack: ["React"], desc: "A responsive Smart Study Planner built with React.", link: "https://study-planner-omega-olive.vercel.app/", c: ["#7C5CFF", "#22D3EE"], image: "/projects/study-planner.png" },
  { title: "Tic Tac Toe", type: "Game", stack: ["HTML", "CSS", "JavaScript"], desc: "A responsive Tic Tac Toe game built with HTML, CSS and JavaScript.", link: "https://tic-tac-toe-theta-liart.vercel.app/", c: ["#FF5CAA", "#FFB86B"], image: "/projects/tictactoe.png" },
  { title: "Calculator", type: "Utility", stack: ["HTML", "CSS", "JavaScript"], desc: "A responsive calculator built with HTML, CSS and JavaScript.", link: "https://calculator-dun-delta.vercel.app/", c: ["#22D3EE", "#4ADE80"], image: "/projects/calculator.png" },
  { title: "InAmigos Website (NGO)", type: "Website", stack: ["HTML", "CSS"], desc: "A responsive awareness page for InAmigos Foundation (NGO), linking directly to their official website.", link: "https://in-amigos-ngo-drab.vercel.app/", c: ["#A78BFA", "#FF5CAA"], image: "/projects/inamigos.png" },
  { title: "AI Trading Research Assistant", type: "Full Stack", stack: ["MERN", "Google Gemini"], desc: "AI-powered MERN app that turns natural language trading questions into structured, testable experiments using Google Gemini.", link: "https://ai-trading-research-assistant-seven.vercel.app/", c: ["#7C5CFF", "#FF5CAA"], image: "/projects/ai-trading.png" },
];