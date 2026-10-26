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
  gpa?: string;
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

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhaiminul Islam Tafsir",
    shortName: "Tafsir",
    title: "Software Engineer & Machine Learning Specialist",
    tagline: "Building intelligent software systems & predictive machine learning models.",
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
    signature: "/signature.png",
    statusBadge: "Available for Software Engineering & ML Roles",
  },
  stats: [
    { label: "B.Sc. in CSE", value: "IUBAT", description: "Graduating Engineer" },
    { label: "Featured Projects", value: "4+", description: "Full-Stack & ML Models" },
    { label: "Core Focus", value: "SE & ML", description: "Algorithms & AI" },
    { label: "Certification", value: "EDGE", description: "Govt. Digital Economy" },
  ],
  skills: {
    programming: [
      { name: "Python", level: "Primary", highlight: true },
      { name: "C++", level: "Core", highlight: true },
      { name: "C", level: "Core", highlight: false },
    ],
    machineLearning: [
      { name: "ML Model Implementation", level: "Advanced", highlight: true },
      { name: "AI Integration", level: "Proficient", highlight: true },
      { name: "Predictive Analytics", level: "Proficient", highlight: true },
      { name: "Statistical Modeling", level: "Proficient", highlight: false },
      { name: "Clinical Data Evaluation", level: "Applied", highlight: false },
    ],
    coreEngineering: [
      { name: "Data Structures & Algorithms", level: "Fundamental", highlight: true },
      { name: "API Integration", level: "Applied", highlight: true },
      { name: "Problem Solving", level: "Core", highlight: true },
      { name: "Desktop GUI Development", level: "Applied", highlight: false },
      { name: "Real-time Messaging & Sockets", level: "Applied", highlight: false },
    ],
    tools: [
      { name: "Visual Studio Code", level: "Primary IDE", highlight: true },
      { name: "Git", level: "VCS", highlight: true },
      { name: "GitHub", level: "Collaboration", highlight: true },
      { name: "PyQt5", level: "Framework", highlight: false },
    ],
    personal: [
      "Management Skills",
      "Leadership",
      "Creativity",
      "Fast Learning",
      "Communication",
      "Negotiation",
      "Attention to Details",
    ],
    languages: [
      { name: "Bengali", proficiency: "Native" },
      { name: "English", proficiency: "Professional Working" },
      { name: "Hindi", proficiency: "Conversational" },
    ]
  },
  projects: [
    {
      id: "quick-tutor",
      title: "Quick Tutor — Online Learning Platform",
      category: "se",
      categoryLabel: "Software Engineering & Web",
      shortDescription: "An interactive online learning platform enabling students to explore courses, schedule sessions, and interact with tutors in real time.",
      fullDescription: "Quick Tutor is a comprehensive educational platform designed to bridge the gap between students and qualified tutors. The system provides intuitive course discovery, dynamic session scheduling, and real-time interactive communication tools to streamline remote learning workflows.",
      technologies: ["Python", "API Integration", "Real-Time Sockets", "Web Architecture", "Git & GitHub"],
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
      id: "heart-attack-risk",
      title: "Heart Attack Risk Prediction using Machine Learning",
      category: "ml",
      categoryLabel: "Machine Learning & Healthcare",
      shortDescription: "Predictive machine learning models developed on clinical patient data to assess heart-attack risk for early detection and preventative healthcare.",
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
    },
    {
      id: "student-mental-health",
      title: "ML Predictive Models to Assess Depression, Anxiety & Stress",
      category: "ml",
      categoryLabel: "Machine Learning & Behavioral Analytics",
      shortDescription: "Machine learning research models predicting depression, anxiety, and stress levels among university students using survey data and statistical analysis.",
      fullDescription: "Mental health across university environments is a critical yet underserved domain. This academic research project analyzes validated psychometric survey data through machine learning and statistical modeling to quantify and predict levels of depression, anxiety, and stress among tertiary students.",
      technologies: ["Python", "Machine Learning", "Statistical Analysis", "Survey Data Modeling", "Data Science"],
      githubUrl: "https://github.com/muhaiminul-tafsir/Machine-Learning-Predictive-Models-to-Assess-depression-Anxiety-and-Stress-among-University-Students",
      highlights: [
        "Engineered data pipelines for psychometric survey response normalization",
        "Applied statistical correlation and regression techniques to isolate stress factors",
        "Implemented predictive algorithms to identify students at risk of psychological distress",
        "Provided empirical findings to support university student welfare interventions"
      ],
      role: "Researcher & ML Engineer — Statistical Modeling & Data Pipelines",
      iconName: "brain"
    },
    {
      id: "age-calculator",
      title: "Age Calculator Desktop Application",
      category: "se",
      categoryLabel: "Desktop Software Engineering",
      shortDescription: "A precision desktop application built with PyQt5 that calculates a person's exact chronological age down to years, months, and days.",
      fullDescription: "A clean, responsive desktop utility crafted with Python and PyQt5. Designed with strict date-time arithmetic that gracefully handles calendar variations, leap years, and date verification with an intuitive user interface.",
      technologies: ["Python", "PyQt5", "GUI Architecture", "Event Handling", "Date Algorithms"],
      githubUrl: "https://github.com/muhaiminul-tafsir/Age-Calculator",
      highlights: [
        "Developed custom GUI layout with PyQt5 components and responsive window sizing",
        "Implemented rigorous date algorithms taking into account variable month lengths and leap years",
        "Provides precise breakdown of age in years, months, days, and milestone countdowns",
        "Engineered error prevention for invalid dates and future timestamp inputs"
      ],
      role: "Desktop Application Developer — UI & Logic Implementation",
      iconName: "calculator"
    }
  ] as ProjectItem[],
  experience: [
    {
      role: "Software Engineering & Machine Learning Practitioner",
      company: "Academic & Open-Source Projects (IUBAT)",
      period: "2022 — Present",
      type: "Academic & Project Experience",
      location: "Dhaka, Bangladesh",
      description: "Developing production-grade desktop applications, web-based tutoring systems, and predictive machine learning models addressing healthcare and student wellness.",
      keyAchievements: [
        "Architected full-featured desktop GUI utilities and real-time collaborative web systems",
        "Engineered end-to-end machine learning workflows: data cleansing, feature extraction, model training, and performance validation",
        "Implemented algorithmic problem-solving across core computer science challenges using Python and C++",
        "Collaborated with academic faculty on data-driven research initiatives"
      ],
      skillsUsed: ["Python", "C++", "ML Models", "Data Structures", "API Integration", "Git & GitHub"]
    },
    {
      role: "Trainee — Python with Machine Learning",
      company: "EDGE Project (Enhancing Digital Government & Economy)",
      period: "Specialized Training Certification",
      type: "Government Tech Initiative",
      location: "Bangladesh",
      description: "Intensive government-sponsored professional training program focusing on modern Python engineering, applied machine learning algorithms, and real-world data pipelines.",
      keyAchievements: [
        "Mastered advanced machine learning pipelines and mathematical foundations",
        "Implemented supervised and unsupervised algorithms on diverse industry datasets",
        "Completed hands-on capstones focused on predictive modeling and digital economy automation"
      ],
      skillsUsed: ["Python", "Machine Learning", "Data Processing", "AI Integration", "Statistical Models"]
    }
  ],
  education: [
    {
      institution: "IUBAT — International University of Business Agriculture and Technology",
      degree: "Bachelor's of Science in Computer Science and Engineering (B.Sc. in CSE)",
      period: "2022 — Present",
      status: "In Progress",
      gpa: "CGPA 3.29 / 4.00",
      description: "Specializing in software engineering, machine learning, data structures, algorithms, and applied computer systems."
    },
    {
      institution: "Tongi Gov’t College",
      degree: "Higher Secondary Certificate (HSC) — Science",
      period: "Passing Year: 2019",
      status: "Completed",
      gpa: "GPA 4.92 / 5.00",
      description: "Focused on higher mathematics, physics, and chemistry with distinguished academic standing."
    },
    {
      institution: "A.M. High School",
      degree: "Secondary School Certificate (SSC) — Science",
      period: "Passing Year: 2017",
      status: "Completed",
      gpa: "GPA 4.73 / 5.00",
      description: "Foundational science and mathematics with excellence in academic performance."
    }
  ] as EducationItem[],
  certifications: [
    {
      title: "Python With Machine Learning",
      issuer: "Enhancing Digital Government & Economy (EDGE) Project",
      focus: "Applied Machine Learning, Statistical Analysis, and Advanced Python Programming",
      badge: "Govt. of Bangladesh Certified"
    }
  ],
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

