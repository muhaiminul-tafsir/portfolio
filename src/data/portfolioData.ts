export interface ProjectItem {
  id: string;
  title: string;
  category: 'ml' | 'se' | 'all';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  highlights: string[];
  role: string;
  iconName: 'brain' | 'heart' | 'book' | 'calculator';
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status: string;
  gpa: string;
  description: string;
}

export interface ReferenceItem {
  name: string;
  title: string;
  institution: string;
  department: string;
  phone: string;
  email: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
  keyAchievements: string[];
  skillsUsed: string[];
  isCurrent?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  recipient: string;
  issuer: string;
  conductedBy: string;
  program: string;
  duration: string;
  dateOfIssue: string;
  serialNumber: string;
  image: string;
  pdf: string;
  skills: string[];
  description: string;
  badge: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhaiminul Islam Tafsir",
    shortName: "Tafsir",
    title: "Software Engineer & Machine Learning Specialist",
    currentRole: "Jr. Software Engineer at 3s Softech ltd",
    tagline: "Jr. Software Engineer building high-reliability software systems & predictive machine learning models.",
    about: "I am a dedicated professional with an academic background in Computer Science and Engineering (B.Sc. in CSE from IUBAT University), specializing in software engineering and machine learning. I have hands-on experience through engineering projects and problem-solving, communication, and teamwork abilities. I am eager to apply my technical knowledge to real-world industry challenges and contribute to impactful, high-quality solutions while continuously expanding my expertise.",
    location: "Joydebpur, Gazipur, Dhaka, Bangladesh",
    email: "muhaiminulislamtafsir@gmail.com",
    phone: "+8801629018711",
    github: "https://github.com/muhaiminul-tafsir",
    githubUsername: "muhaiminul-tafsir",
    linkedin: "https://linkedin.com/in/muhaiminul-islam-tafsir",
    linkedinUsername: "muhaiminul-islam-tafsir",
    resumePdf: "/Muhaiminul_Islam_Tafsir_Resume.pdf",
    photo: "/profile.png",
    statusBadge: "Jr. Software Engineer • 3s Softech ltd",
  },
  stats: [
    { label: "Current Company", value: "3s Softech", description: "Jr. Software Engineer" },
    { label: "B.Sc. in CSE", value: "3.29 CGPA", description: "IUBAT Class of 2026" },
    { label: "Key Stack", value: "React & Python", description: "Modern Web & ML" },
    { label: "Certification", value: "EDGE Certified", description: "Python with ML" },
  ],
  skills: {
    coreSkills: [
      { name: "React.js", category: "Frontend / Web", level: "Proficient", highlight: true },
      { name: "JavaScript", category: "Programming", level: "Proficient", highlight: true },
      { name: "Python", category: "Core & Data", level: "Primary", highlight: true },
      { name: "Machine Learning", category: "AI & Analytics", level: "Advanced", highlight: true },
      { name: "Git & GitHub", category: "Version Control", level: "Proficient", highlight: true },
      { name: "Problem Solving", category: "Core Engineering", level: "Advanced", highlight: true },
      { name: "Team Collaboration", category: "Workplace Skills", level: "Professional", highlight: true },
    ],
    technicalCategorized: {
      frontendAndLanguages: [
        { name: "React.js", level: "Modern Frontend", highlight: true },
        { name: "JavaScript", level: "ES6+ / Web Logic", highlight: true },
        { name: "Python", level: "Core Architecture & ML", highlight: true },
      ],
      machineLearningAndAI: [
        { name: "Machine Learning", level: "Supervised & Unsupervised", highlight: true },
        { name: "Predictive Modeling", level: "Clinical & Behavioral Data", highlight: true },
        { name: "Statistical Analysis", level: "Metric Extraction & Evaluation", highlight: false },
      ],
      toolsAndMethods: [
        { name: "Git & GitHub", level: "Version Control & CI/CD", highlight: true },
        { name: "Problem Solving", level: "Algorithmic & Debugging", highlight: true },
        { name: "Software Maintenance", level: "Tracking, Bug Fixes & Optimization", highlight: true },
      ]
    },
    personal: [
      "Team Collaboration",
      "Problem Solving",
      "Software Maintenance & Optimization",
      "Communication",
      "System Reliability",
      "Fast Learning",
    ],
    languages: [
      { name: "Bengali", proficiency: "Native" },
      { name: "English", proficiency: "Professional Working" },
    ]
  },
  projects: [
    {
      id: "quick-tutor",
      title: "Quick Tutor — Online Learning Platform",
      category: "se",
      categoryLabel: "Software Engineering & Web",
      shortDescription: "An interactive online learning platform enabling students to explore courses, schedule sessions, and interact with tutors in real time.",
      fullDescription: "Quick Tutor is a comprehensive educational platform designed to bridge the gap between students and qualified tutors. The system enables intuitive course discovery, dynamic session scheduling, and real-time interactive communication tools to streamline remote learning workflows.",
      technologies: ["React.js", "JavaScript", "Python", "API Integration", "Git & GitHub"],
      githubUrl: "https://github.com/muhaiminul-tafsir/Quick-Tutor---online-Learning-Platform",
      highlights: [
        "Enabled students to browse specialized courses and verify tutor qualifications",
        "Engineered real-time interaction channels between tutors and students",
        "Built dynamic calendar scheduling for 1-on-1 tutoring sessions",
        "Implemented robust authentication and session state management"
      ],
      role: "Lead Developer — Software Architecture & Real-time Integration",
      iconName: "book"
    },
    {
      id: "student-mental-health",
      title: "Machine Learning Predictive Models to Assess Depression, Anxiety and Stress among University Students",
      category: "ml",
      categoryLabel: "Machine Learning & Behavioral Analytics",
      shortDescription: "Built machine-learning models to predict depression, anxiety, and stress levels among university students using survey data and statistical analysis.",
      fullDescription: "Mental health across university environments is a critical domain. This academic research project analyzes validated psychometric survey data through machine learning and statistical modeling to quantify and predict levels of depression, anxiety, and stress among tertiary students.",
      technologies: ["Python", "Machine Learning", "Statistical Analysis", "Survey Data Modeling", "Data Science"],
      githubUrl: "https://github.com/muhaiminul-tafsir/Machine-Learning-Predictive-Models-to-Assess-depression-Anxiety-and-Stress-among-University-Students",
      highlights: [
        "Engineered data pipelines for psychometric survey response normalization",
        "Applied statistical correlation and regression techniques to isolate stress factors",
        "Implemented predictive algorithms to identify students at risk of psychological distress",
        "Provided empirical findings to support student welfare and intervention programs"
      ],
      role: "Researcher & ML Engineer — Statistical Modeling & Data Pipelines",
      iconName: "brain"
    },
    {
      id: "heart-attack-risk",
      title: "Heart Attack Risk Prediction using Machine Learning model",
      category: "ml",
      categoryLabel: "Machine Learning & Healthcare",
      shortDescription: "Developed ML models to predict heart-attack risk from clinical data for early detection and prevention.",
      fullDescription: "Cardiovascular health is a leading global medical concern. This project applies machine learning algorithms to clinical physiological indicators, extracting key risk factors and classifying patient cardiac vulnerability to facilitate early medical intervention.",
      technologies: ["Python", "Machine Learning", "Scikit-Learn", "Data Preprocessing", "Clinical Data Analysis"],
      githubUrl: "https://github.com/muhaiminul-tafsir/Heart-Attack-Risk-Prediction",
      highlights: [
        "Preprocessed multi-dimensional clinical parameters including biomarkers and vital signs",
        "Trained and evaluated classification models for early risk detection",
        "Analyzed feature importances to identify dominant cardiac risk predictors",
        "Optimized classification metrics to minimize false negative diagnoses"
      ],
      role: "ML Engineer — Data Preprocessing & Model Evaluation",
      iconName: "heart"
    }
  ] as ProjectItem[],
  experience: [
    {
      role: "Jr. Software Engineer",
      company: "3s Softech ltd",
      period: "2026",
      type: "Industry Professional Experience",
      location: "Dhaka, Bangladesh",
      isCurrent: true,
      description: "Working on the Software Maintenance System designed to support efficient tracking and management of software issues. Responsible for identifying and fixing bugs, improving system performance, and implementing feature updates. Collaborating with the team to ensure system reliability, smooth operation, and regular optimization of existing modules.",
      keyAchievements: [
        "Identified, investigated, and resolved software bugs to ensure optimal system stability",
        "Optimized module performance, query response times, and overall system efficiency",
        "Implemented feature updates and functional improvements across core maintenance modules",
        "Collaborated with cross-functional engineering team to ensure system reliability and operational continuity"
      ],
      skillsUsed: ["React.js", "JavaScript", "Python", "Problem Solving", "Git & GitHub", "Team Collaboration"]
    },
    {
      role: "Academic & Project Software Engineer",
      company: "IUBAT — International University of Business Agriculture and Technology",
      period: "2022 — 2026",
      type: "Degree & Research Practicum",
      location: "Dhaka, Bangladesh",
      isCurrent: false,
      description: "Applied computer science research and hands-on system development across collaborative web platforms, data structures, algorithms, and predictive machine learning models.",
      keyAchievements: [
        "Engineered Quick Tutor — a full-featured real-time online educational platform",
        "Conducted empirical ML research on university student psychological distress prediction",
        "Trained and evaluated clinical data classification models for heart attack risk prediction",
        "Graduating with B.Sc. in CSE with distinguished CGPA 3.29 / 4.00"
      ],
      skillsUsed: ["Python", "React.js", "JavaScript", "Machine Learning", "Git & GitHub", "Problem Solving"]
    }
  ] as ExperienceItem[],
  certificates: [
    {
      id: "edge-python-ml",
      title: "Python with Machine Learning",
      recipient: "Muhaiminul Islam Tafsir",
      issuer: "Bangladesh Computer Council, ICT Division",
      conductedBy: "Department of Computer Science and Engineering (CSE), Jagannath University",
      program: "Enhancing Digital Government and Economy (EDGE) Project",
      duration: "80 Hours (Nov 2024 to May 2025)",
      dateOfIssue: "22-Jul-2025",
      serialNumber: "EDGE-DSTS-106-2639-00032",
      image: "/edge_certificate.png",
      pdf: "/EDGE_Python_ML_Certificate_Muhaiminul_Islam_Tafsir.pdf",
      skills: ["Python", "Machine Learning", "Supervised Learning", "Unsupervised Learning", "Data Preprocessing", "Statistical Modeling"],
      description: "Successfully completed 80 hours of rigorous professional training on Python with Machine Learning under the national Enhancing Digital Government and Economy (EDGE) Project, conducted by the Department of Computer Science and Engineering at Jagannath University and certified by Bangladesh Computer Council, ICT Division.",
      badge: "Govt. of Bangladesh Certified"
    }
  ] as CertificateItem[],
  education: [
    {
      institution: "INTERNATIONAL UNIVERSITY OF BUSINESS AGRICULTURE AND TECHNOLOGY (IUBAT)",
      degree: "Bachelor's of Science in CSE",
      period: "Passing Year: 2026",
      status: "Graduating 2026",
      gpa: "CGPA: 3.29 / 4.00",
      description: "Comprehensive education in computer science, software engineering, machine learning, algorithmic problem solving, and modern web architectures."
    },
    {
      institution: "TONGI GOV’T COLLEGE",
      degree: "Completed HSC in Science background",
      period: "Passing Year: 2019",
      status: "Completed",
      gpa: "GPA: 4.92 / 5.00",
      description: "High academic distinction in physics, chemistry, and higher mathematics."
    },
    {
      institution: "A.M. HIGH SCHOOL",
      degree: "Completed SSC in Science background",
      period: "Passing Year: 2017",
      status: "Completed",
      gpa: "GPA: 4.73 / 5.00",
      description: "Foundational science and mathematics with excellence in academic performance."
    }
  ] as EducationItem[],
  references: [
    {
      name: "Dr. Utpal Kanti Das",
      title: "Professor & Chairman",
      institution: "IUBAT — International University of Business Agriculture and Technology",
      department: "Department of Computer Science and Engineering",
      phone: "+8801819199419",
      email: "ukd@iubat.edu"
    },
    {
      name: "Shahinur Alam",
      title: "Assistant Professor & Coordinator",
      institution: "IUBAT — International University of Business Agriculture and Technology",
      department: "Department of Computer Science and Engineering",
      phone: "+8801716950721",
      email: "shaheen@iubat.edu"
    }
  ] as ReferenceItem[]
};
