// // Portfolio Data - Update this file with actual content
// export const personalInfo = {
//     name: "Yalini T",
//     title: "Full Stack Developer",
//     roles: ["Frontend Developer", "UI/UX Enthusiast", "React Specialist", "Web Designer"],
//     bio: "Passionate full-stack developer with expertise in building modern, responsive web applications. I love creating beautiful user interfaces and solving complex problems with elegant code.",
//     email: "yalini@example.com",
//     phone: "+1 (555) 123-4567",
//     location: "San Francisco, CA",
//     avatar: "/avatar.jpg", // Add your avatar image to public folder
//     resume: "/resume.pdf",
//     social: {
//         github: "https://github.com/yalinit",
//         linkedin: "https://linkedin.com/in/yalinit",
//         twitter: "https://twitter.com/yalinit",
//         portfolio: "https://yalinit.dev"
//     }
// };

// export const stats = [
//     { label: "Years Experience", value: "3+", icon: "calendar" },
//     { label: "Projects Completed", value: "25+", icon: "code" },
//     { label: "Happy Clients", value: "15+", icon: "users" },
//     { label: "Code Commits", value: "1000+", icon: "git" }
// ];

// export const experience = [
//     {
//         id: 1,
//         role: "Senior Frontend Developer",
//         company: "Tech Innovations Inc.",
//         location: "San Francisco, CA",
//         duration: "Jan 2023 - Present",
//         type: "Full-time",
//         description: "Leading frontend development for enterprise web applications using React and modern web technologies.",
//         responsibilities: [
//             "Architected and developed scalable React applications serving 100K+ users",
//             "Implemented design system and component library used across 5+ products",
//             "Mentored junior developers and conducted code reviews",
//             "Optimized application performance, reducing load time by 40%"
//         ],
//         technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "Jest"],
//         icon: "briefcase"
//     },
//     {
//         id: 2,
//         role: "Full Stack Developer",
//         company: "Digital Solutions Co.",
//         location: "Remote",
//         duration: "Jun 2021 - Dec 2022",
//         type: "Full-time",
//         description: "Developed full-stack web applications and RESTful APIs for various client projects.",
//         responsibilities: [
//             "Built responsive web applications using React and Node.js",
//             "Designed and implemented RESTful APIs with Express.js",
//             "Collaborated with designers to implement pixel-perfect UIs",
//             "Integrated third-party services and payment gateways"
//         ],
//         technologies: ["React", "Node.js", "Express", "MongoDB", "AWS", "Docker"],
//         icon: "code"
//     },
//     {
//         id: 3,
//         role: "Junior Web Developer",
//         company: "StartUp Labs",
//         location: "New York, NY",
//         duration: "Jan 2020 - May 2021",
//         type: "Full-time",
//         description: "Contributed to various web development projects and learned modern development practices.",
//         responsibilities: [
//             "Developed responsive websites using HTML, CSS, and JavaScript",
//             "Assisted in migrating legacy applications to React",
//             "Participated in agile development processes",
//             "Fixed bugs and implemented new features based on user feedback"
//         ],
//         technologies: ["HTML", "CSS", "JavaScript", "React", "Git", "Figma"],
//         icon: "laptop"
//     }
// ];

// export const projects = [
//     {
//         id: 1,
//         title: "E-Commerce Platform",
//         description: "A modern e-commerce platform with real-time inventory management and payment processing.",
//         longDescription: "Built a comprehensive e-commerce solution featuring product catalog, shopping cart, checkout process, order management, and admin dashboard. Implemented real-time inventory updates and integrated Stripe for payment processing.",
//         image: "/projects/ecommerce.jpg", // Add project images to public/projects folder
//         technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
//         category: "Full Stack",
//         featured: true,
//         links: {
//             live: "https://example.com",
//             github: "https://github.com/yalinit/ecommerce",
//             demo: "https://demo.example.com"
//         },
//         highlights: [
//             "Processed 10K+ transactions",
//             "99.9% uptime",
//             "Mobile-first design"
//         ]
//     },
//     {
//         id: 2,
//         title: "Task Management App",
//         description: "Collaborative task management application with real-time updates and team features.",
//         longDescription: "Developed a Trello-like task management app with drag-and-drop functionality, real-time collaboration, team workspaces, and advanced filtering options.",
//         image: "/projects/taskapp.jpg",
//         technologies: ["React", "Firebase", "Material-UI", "Redux", "WebSockets"],
//         category: "Frontend",
//         featured: true,
//         links: {
//             live: "https://taskapp.example.com",
//             github: "https://github.com/yalinit/taskapp"
//         },
//         highlights: [
//             "Real-time collaboration",
//             "Drag & drop interface",
//             "Team workspaces"
//         ]
//     },
//     {
//         id: 3,
//         title: "Portfolio Website Builder",
//         description: "No-code platform for creating beautiful portfolio websites with customizable templates.",
//         longDescription: "Created a SaaS platform that allows users to build professional portfolio websites without coding. Features include drag-and-drop editor, template library, custom domains, and analytics.",
//         image: "/projects/portfolio-builder.jpg",
//         technologies: ["React", "Node.js", "PostgreSQL", "AWS S3", "Stripe"],
//         category: "Full Stack",
//         featured: false,
//         links: {
//             live: "https://portfoliobuilder.example.com",
//             github: "https://github.com/yalinit/portfolio-builder"
//         },
//         highlights: [
//             "500+ users",
//             "20+ templates",
//             "Custom domains"
//         ]
//     },
//     {
//         id: 4,
//         title: "Weather Dashboard",
//         description: "Beautiful weather dashboard with forecasts, maps, and location-based alerts.",
//         longDescription: "Built an interactive weather dashboard that displays current conditions, 7-day forecasts, weather maps, and severe weather alerts using multiple weather APIs.",
//         image: "/projects/weather.jpg",
//         technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js", "Tailwind CSS"],
//         category: "Frontend",
//         featured: false,
//         links: {
//             live: "https://weather.example.com",
//             github: "https://github.com/yalinit/weather-dashboard"
//         },
//         highlights: [
//             "Multiple data sources",
//             "Interactive maps",
//             "Location-based alerts"
//         ]
//     },
//     {
//         id: 5,
//         title: "Social Media Analytics",
//         description: "Analytics dashboard for tracking social media performance across multiple platforms.",
//         longDescription: "Developed a comprehensive analytics platform that aggregates data from Twitter, Instagram, and Facebook to provide insights on engagement, reach, and audience demographics.",
//         image: "/projects/analytics.jpg",
//         technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB", "OAuth"],
//         category: "Full Stack",
//         featured: true,
//         links: {
//             live: "https://analytics.example.com",
//             github: "https://github.com/yalinit/social-analytics"
//         },
//         highlights: [
//             "Multi-platform support",
//             "Real-time metrics",
//             "Custom reports"
//         ]
//     },
//     {
//         id: 6,
//         title: "Fitness Tracking App",
//         description: "Mobile-responsive fitness app for tracking workouts, nutrition, and progress.",
//         longDescription: "Created a comprehensive fitness tracking application with workout logging, nutrition tracking, progress photos, and goal setting features.",
//         image: "/projects/fitness.jpg",
//         technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
//         category: "Mobile",
//         featured: false,
//         links: {
//             github: "https://github.com/yalinit/fitness-tracker"
//         },
//         highlights: [
//             "Workout library",
//             "Nutrition database",
//             "Progress tracking"
//         ]
//     }
// ];

// export const skills = {
//     frontend: [
//         { name: "React", level: 95, icon: "⚛️" },
//         { name: "JavaScript", level: 90, icon: "🟨" },
//         { name: "TypeScript", level: 85, icon: "🔷" },
//         { name: "Next.js", level: 88, icon: "▲" },
//         { name: "HTML/CSS", level: 95, icon: "🎨" },
//         { name: "Tailwind CSS", level: 92, icon: "💨" },
//         { name: "Redux", level: 80, icon: "🔄" },
//         { name: "Framer Motion", level: 75, icon: "✨" }
//     ],
//     backend: [
//         { name: "Node.js", level: 85, icon: "🟢" },
//         { name: "Express.js", level: 82, icon: "🚂" },
//         { name: "MongoDB", level: 78, icon: "🍃" },
//         { name: "PostgreSQL", level: 75, icon: "🐘" },
//         { name: "GraphQL", level: 70, icon: "◈" },
//         { name: "REST APIs", level: 88, icon: "🔌" },
//         { name: "Firebase", level: 80, icon: "🔥" }
//     ],
//     tools: [
//         { name: "Git", level: 90, icon: "📦" },
//         { name: "Docker", level: 72, icon: "🐳" },
//         { name: "AWS", level: 68, icon: "☁️" },
//         { name: "Figma", level: 85, icon: "🎨" },
//         { name: "Jest", level: 75, icon: "🃏" },
//         { name: "Webpack", level: 70, icon: "📦" },
//         { name: "VS Code", level: 95, icon: "💻" }
//     ]
// };

// export const education = [
//     {
//         id: 1,
//         degree: "Bachelor of Science in Computer Science",
//         institution: "University of California, Berkeley",
//         location: "Berkeley, CA",
//         duration: "2016 - 2020",
//         gpa: "3.8/4.0",
//         description: "Focused on software engineering, web development, and data structures. Graduated with honors.",
//         achievements: [
//             "Dean's List all semesters",
//             "President of Web Development Club",
//             "Hackathon Winner - Best Web App 2019"
//         ],
//         icon: "graduation"
//     },
//     {
//         id: 2,
//         degree: "Full Stack Web Development Bootcamp",
//         institution: "General Assembly",
//         location: "San Francisco, CA",
//         duration: "2019",
//         description: "Intensive 12-week program covering modern web development technologies and best practices.",
//         achievements: [
//             "Built 5 full-stack projects",
//             "Learned MERN stack",
//             "Completed with distinction"
//         ],
//         icon: "certificate"
//     }
// ];

// export const testimonials = [
//     {
//         id: 1,
//         name: "John Smith",
//         role: "CTO at Tech Innovations",
//         company: "Tech Innovations Inc.",
//         content: "Yalini is an exceptional developer who consistently delivers high-quality work. Her attention to detail and problem-solving skills are outstanding.",
//         avatar: "/testimonials/john.jpg",
//         rating: 5
//     },
//     {
//         id: 2,
//         name: "Sarah Johnson",
//         role: "Product Manager",
//         company: "Digital Solutions Co.",
//         content: "Working with Yalini was a pleasure. She transformed our designs into pixel-perfect, performant web applications.",
//         avatar: "/testimonials/sarah.jpg",
//         rating: 5
//     }
// ];
// Portfolio Data - Updated using Resume Information

export const personalInfo = {
  name: "Yalini T",
  title: "Frontend Developer",
  roles: ["Frontend Developer", "React.js Developer", "Next.js Developer"],
  bio: "Frontend developer with experience in building user-friendly web applications. Skilled in React.js and Next.js with a strong focus on clean design, functionality, and performance. Actively contributes to project development and collaborates closely with teams to deliver effective solutions.",
  email: "yalinithirupathi@gmail.com",
  phone: "6379777908",
  location: "Madurai, Tamil Nadu, India",
  avatar: "/avatar.jpg",
  resume: "/Yalini.pdf",
  social: {
    github: "https://github.com/YaliniT", // add if available
    linkedin: "www.linkedin.com/in/yalini-t-329769277", // add if available

    portfolio: "https://yalinit.github.io/Portfolio/",
  },
};

export const stats = [
  { label: "Experience", value: "1+ Year", icon: "calendar" },
  { label: "Projects Completed", value: "3+", icon: "code" },
  { label: "Tech Stack", value: "10+", icon: "layers" },
  { label: "Weekly Commits", value: "25", icon: "git-commit" },
];

export const experience = [
  {
    id: 1,
    role: "Frontend Developer (React.js & Next.js)",
    company: "WingzoTech",
    location: "Madurai",
    duration: "Jun 2024 - Present",
    type: "Full-time",
    description:
      "Working as a frontend developer focusing on React.js and Next.js applications for e-commerce solutions.",
    responsibilities: [
      "Built a POS system for shop billing using React.js",
      "Developed product search, cart summary, and payment confirmation screens",
      "Integrated REST APIs to fetch products, update stock, and save orders",
      "Built admin dashboard for managing products, users, orders, and inventory",
      "Implemented responsive UI with reusable components",
      "Optimized frontend performance using code splitting and lazy loading",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "REST APIs",
    ],
    icon: "briefcase",
  },
];

export const projects = [
  {
    id: 1,
    title: "POS System for E-commerce",
    description:
      "POS billing interface for shops with fast and efficient billing flow.",
    longDescription:
      "Developed a POS system using React.js that allows cashiers to quickly search products, manage cart items, and complete billing. Integrated backend APIs for real-time stock updates and order storage.",
    image: "/projects/pos.jpg",
    technologies: ["React.js", "REST APIs", "HTML", "CSS"],
    category: "Frontend",
    featured: true,
    links: {},
    highlights: [
      "Fast billing workflow",
      "Real-time stock updates",
      "User-friendly interface",
    ],
  },
  {
    id: 2,
    title: "E-commerce Admin Panel",
    description: "Admin dashboard for managing e-commerce operations.",
    longDescription:
      "Built a full-featured admin panel to manage products, users, orders, and inventory. Used modular components and dynamic routing to improve scalability and maintainability.",
    image: "/projects/admin.jpg",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    category: "Frontend",
    featured: true,
    links: {},
    highlights: [
      "Modular component structure",
      "Responsive design",
      "Smooth user experience",
    ],
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Customer-facing e-commerce platform built using Next.js.",
    longDescription:
      "Developed a Next.js based e-commerce platform with dynamic product listings, authentication, and cart management. Optimized performance using code splitting, lazy loading, and image optimization.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "React.js", "REST APIs"],
    category: "Frontend",
    featured: false,
    links: {},
    highlights: [
      "Improved performance",
      "SEO-friendly pages",
      "Optimized image loading",
    ],
  },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "JavaScript", level: 85, icon: "🟨" },
    { name: "HTML", level: 90, icon: "📄" },
    { name: "CSS", level: 88, icon: "🎨" },
    { name: "Tailwind CSS", level: 85, icon: "💨" },
    { name: "Bootstrap", level: 80, icon: "🅱️" },
  ],
  backend: [
    { name: "Node.js (Beginner)", level: 60, icon: "🟢" },
    { name: "REST APIs", level: 75, icon: "🔌" },
  ],
  tools: [
    { name: "Git", level: 80, icon: "📦" },
    { name: "VS Code", level: 90, icon: "💻" },
  ],
};

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Fatima College",
    location: "Madurai",
    duration: "2022 - 2024",
    gpa: "8.4 CGPA",
    icon: "graduation",
  },
  {
    id: 2,
    degree: "B.Sc Computer Science",
    institution: "The Madura College",
    location: "Madurai",
    duration: "2019 - 2022",
    gpa: "7.9 CGPA",
    icon: "graduation",
  },
];

export const testimonials = [];
