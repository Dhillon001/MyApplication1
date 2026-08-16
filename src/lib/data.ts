export const siteConfig = {
  name: "Harsharandeep Dhillon",
  nickname: "Sharan",
  title: "AI Software Engineer & Data Scientist",
  tagline:
    "Building production AI systems, RAG pipelines, and full-stack tools that turn complex data into actionable insights.",
  email: "Hdhillon001@berkeley.edu",
  phone: "510-634-2927",
  location: "Berkeley, CA",
  linkedin: "https://www.linkedin.com/in/harsharandeep-dhillon-26b291267/",
  github: "https://github.com/Dhillon001",
  resumeUrl: "/resume.pdf",
  availability: "Graduating May 2027 · Available for 2027 start",
};

export const education = {
  school: "University of California, Berkeley",
  degree: "B.S. Applied Mathematics",
  concentration: "Data Science Concentration",
  gpa: "3.7",
  graduation: "May 2027",
  location: "Berkeley, CA",
  honors: [
    "AI/ML Fellow Alum — Break Through Tech @ Cornell Tech",
    "Academic Honors List",
    "Women in Tech Club Member",
    "NSF STEM Scholarship",
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning Foundations",
    "Object-Oriented Programming",
    "Foundations of Data Science",
    "Calculus & Linear Algebra",
    "Discrete Mathematics",
    "Physics: Mechanics & E&M",
  ],
};

export const experiences = [
  {
    id: "zoox",
    company: "Zoox (Amazon Robotaxi)",
    role: "AI Software Engineer (Contract)",
    location: "Foster City, CA",
    period: "Jul 2026 – Present",
    highlights: [
      "Designed and deployed MCP server integrations connecting AI agents to production SCQR data — supplier scorecards, NCRs, and audit findings — cutting review time by ~60%.",
      "Built and shipped a production RAG pipeline (Docker + AWS) turning reliability and field quality records into an agent-queryable retrieval system, adopted within two weeks.",
      "Built a live ETL pipeline connecting Databricks to PostgreSQL via internal APIs, automating supplier part shipments through fleet-wide part cost reporting.",
      "Leading end-to-end full-stack internal tools across SCQR teams — from stakeholder requirements through Docker containerization and Kubernetes deployment.",
      "Provisioned AWS infrastructure (S3, EC2) and engineered large-scale Spark/Hadoop streaming for fleet and geospatial telemetry.",
    ],
    tags: ["MCP", "RAG", "AWS", "Docker", "Kubernetes", "Spark", "Databricks"],
  },
  {
    id: "multibeam",
    company: "Multibeam Corporation",
    role: "Data Engineering Intern",
    location: "Sunnyvale, CA",
    period: "Jan 2026 – Jun 2026",
    highlights: [
      "Developed a Python automation pipeline for large-scale SEM image validation and classification, reducing manual review by 80%.",
      "Queried and validated production datasets with SQL and custom Python tooling; implemented contrast normalization, edge detection, and noise filtering.",
      "Designed reusable Python modules and automated statistical validation workflows, improving data quality and reducing manual reporting by 40%.",
      "Collaborated cross-functionally with hardware and software teams on lithography system performance and root-cause analysis.",
    ],
    tags: ["Python", "SQL", "Computer Vision", "SEM", "Linux"],
  },
  {
    id: "kpmg",
    company: "KPMG × Break Through Tech",
    role: "Machine Learning Fellow",
    location: "Remote",
    period: "May 2025 – Dec 2025",
    highlights: [
      "Conducted LLM evaluation and benchmarking on the Hugging Face Energy Dataset (40K+ model runs) across open-source and proprietary models.",
      "Built an evaluation framework analyzing trade-offs between performance, energy usage, and CO₂ emissions for measurable ROI KPIs.",
      "Engineered AI evaluation workflows with Python (Pandas, NumPy, scikit-learn), R, and SQL; designed EDA visualizations with Matplotlib and Seaborn.",
      "Built and deployed an interactive Streamlit dashboard for real-time AI evaluation, ROI, and emissions metrics.",
    ],
    tags: ["LLMs", "Python", "Streamlit", "Hugging Face", "Statistics"],
  },
  {
    id: "cornell-btt",
    company: "Break Through Tech @ Cornell Tech",
    role: "AI/ML Fellow",
    location: "Remote",
    period: "May 2025 – Present",
    highlights: [
      "Selected from 3,000+ applicants for the Break Through Tech AI program.",
      "Developed foundational ML/AI skills using industry-relevant tools; earned Cornell University certification.",
      "Worked in teams to build industry-related AI projects in collaboration with industry advisors.",
    ],
    tags: ["Machine Learning", "AI", "Cornell Tech"],
  },
  {
    id: "stanford-ssg",
    company: "Stanford University — Science Small Groups (SSG)",
    role: "Machine Learning Research Mentee",
    location: "Stanford, CA",
    period: "Feb 2025 – Jul 2025",
    highlights: [
      "Served as a machine learning research mentee at Stanford University, conducting mentored research on how frequent fast-charging accelerates degradation in lithium-ion cell phone batteries.",
      "Studied battery aging mechanisms and analyzed state-of-health estimation models using capacity-cycle data and scientific literature.",
      "Applied hypothesis testing and trend analysis to identify long-term performance patterns for battery-health management.",
      "Synthesized research findings into technical reports and presentations delivered at the end of the program.",
    ],
    tags: ["Machine Learning", "Research", "Python", "Statistics"],
  },
  {
    id: "ul",
    company: "UL Solutions",
    role: "Test Engineering Intern",
    location: "Fremont, CA",
    period: "Jun 2024 – Aug 2024",
    highlights: [
      "Developed Python automation scripts for test signal generation and analysis, reducing debugging time by 20%.",
      "Built and tested RF hardware systems (power amplifiers, filters, oscillators) with hardware-software integration.",
      "Executed test plans, performed signal analysis and data validation in Linux-based environments.",
    ],
    tags: ["Python", "RF Hardware", "Linux", "Automation"],
  },
];

export const projects = [
  {
    id: "meeting-assistant",
    title: "AI Meeting Assistant",
    category: "Full-Stack AI Application",
    description:
      "AI-powered meeting transcript analyzer that generates structured summaries, to-do lists, and action items.",
    highlights: [
      "Next.js, TypeScript, Tailwind CSS with modular React components",
      "OpenAI-powered prompt engineering for transcript analysis",
      "Backend REST APIs deployed on Vercel and AWS with data governance",
    ],
    tags: ["Next.js", "TypeScript", "OpenAI", "AWS"],
    gradient: "from-violet-500/20 to-purple-600/20",
    githubUrl: "https://github.com/Dhillon001/AI-Meeting-Assistant",
  },
  {
    id: "kpmg-dashboard",
    title: "KPMG Trusted AI Dashboard",
    category: "Data Science & AI Studio",
    description:
      "Fall AI Studio project with KPMG: ROI calculator, model explainability, and energy usage dashboard for enterprise AI adoption.",
    highlights: [
      "Built Streamlit dashboard visualizing productivity, sustainability, and performance trade-offs",
      "Analyzed Hugging Face LLM Energy Dataset (40K+ runs) for ROI and emissions metrics",
      "Partnered with KPMG Trusted AI team on applied AI investment decision tooling",
    ],
    tags: ["Python", "Streamlit", "LLMs", "Data Viz"],
    gradient: "from-rose-500/20 to-pink-600/20",
    githubUrl: "https://github.com/Dhillon001/kpmg-trusted-ai-dashboard",
  },
  {
    id: "airbnb-price",
    title: "NYC Airbnb Price Classification",
    category: "Machine Learning",
    description:
      "Built predictive models on large-scale Airbnb listing data to classify and quantify pricing drivers across NYC markets.",
    highlights: [
      "Cleaned and analyzed real-world datasets to detect anomalies and engineer reliable features",
      "Built Spark-based distributed processing and Airflow workflows for ingestion and preprocessing",
      "Compared Linear Regression, Decision Trees, and Ridge Regression with cross-validation",
    ],
    tags: ["Python", "Spark", "Airflow", "scikit-learn"],
    gradient: "from-cyan-500/20 to-blue-600/20",
  },
  {
    id: "airbnb-superhost",
    title: "Airbnb Superhost Classification",
    category: "Machine Learning",
    description:
      "Logistic regression model to classify whether an Airbnb host qualifies as a Superhost based on listing attributes.",
    highlights: [
      "Engineered features from host behavior, review scores, and listing characteristics",
      "Trained and evaluated logistic regression with hyperparameter tuning",
      "Visualized patterns and correlations with Python EDA for data-driven insights",
    ],
    tags: ["Python", "Logistic Regression", "Pandas", "EDA"],
    gradient: "from-sky-500/20 to-indigo-600/20",
    githubUrl: "https://github.com/Dhillon001/airbnb-logistic-regression",
  },
  {
    id: "battery-research",
    title: "Battery Degradation Analysis from Fast Charging",
    category: "Stanford University Research",
    description:
      "Research project investigating how frequent fast-charging affects lithium-ion battery degradation and long-term health.",
    highlights: [
      "Reviewed capacity-cycle data, scientific literature, and modeling resources (LithMaps, Hugging Face)",
      "Applied hypothesis testing and trend analysis to identify long-term performance patterns",
      "Presented synthesized findings in technical reports as part of Stanford SSG mentorship",
    ],
    tags: ["Research", "Python", "Statistics", "ML"],
    gradient: "from-emerald-500/20 to-teal-600/20",
  },
  {
    id: "color-blindness",
    title: "Color Blindness Simulator",
    category: "Accessibility · Hackathon Winner 🏆",
    description:
      "Web tool that simulates common color-vision deficiencies on user-uploaded images to promote inclusive design.",
    highlights: [
      "Built front-end experience letting users preview content as seen with different color-blindness types",
      "Helped designers and developers create more accessible visual content",
      "Team won 1st place at the CSU East Bay Hackathon",
    ],
    tags: ["JavaScript", "HTML/CSS", "Accessibility", "React"],
    gradient: "from-fuchsia-500/20 to-purple-600/20",
  },
  {
    id: "climate-conscious",
    title: "Climate Change Awareness Site",
    category: "Web Development",
    description:
      "Responsive site promoting eco-friendly habits and helping users track and reduce their carbon footprint.",
    highlights: [
      "Built with HTML, CSS, and JavaScript for climate change education and awareness",
      "Encourages sustainable habits and personal carbon footprint tracking",
      "Designed for accessibility and mobile-first responsive layouts",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    gradient: "from-lime-500/20 to-green-600/20",
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    category: "Full-Stack Web Application",
    description:
      "Professional portfolio built with Next.js, TypeScript, Tailwind CSS, Prisma, and SQLite — with a working contact API.",
    highlights: [
      "Server-side API routes with Zod validation",
      "SQLite database for contact message persistence",
      "Responsive design with Framer Motion animations",
    ],
    tags: ["Next.js", "Prisma", "TypeScript", "Tailwind"],
    gradient: "from-amber-500/20 to-orange-600/20",
    githubUrl: "https://github.com/Dhillon001",
  },
];

export const certifications = [
  {
    id: "cornell-ml-foundations",
    title: "Machine Learning Foundations",
    issuer: "Cornell Tech",
    period: "2025",
    description:
      "Break Through Tech AI program certification covering core ML concepts, model evaluation, and industry-relevant tooling.",
  },
  {
    id: "cornell-ml-cert",
    title: "Certificate in Machine Learning",
    issuer: "Cornell University",
    period: "2025",
    description:
      "Formal certification earned through the Break Through Tech AI fellowship in collaboration with Cornell Tech.",
  },
  {
    id: "codepath-interview",
    title: "Intermediate Technical Interview Prep",
    issuer: "CodePath",
    period: "2025",
    description:
      "Advanced preparation in data structures, algorithms, and technical interview problem-solving.",
  },
  {
    id: "cisco-python-1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    period: "2024",
    description:
      "Fundamentals of Python programming including data types, control structures, functions, and modules.",
  },
  {
    id: "cisco-python-2",
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    period: "2024",
    description:
      "Advanced Python topics including OOP, file handling, error management, and standard libraries.",
  },
  {
    id: "kaggle-competitor",
    title: "Community Competitor",
    issuer: "Kaggle",
    period: "2024",
    description:
      "Kaggle community badge recognizing participation in data science competitions and notebooks.",
  },
];

export const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Go", "SQL", "R", "C++"],
  },
  {
    name: "AI & ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "LLMs",
      "RAG",
      "scikit-learn",
      "Information Retrieval",
      "Machine Learning",
    ],
  },
  {
    name: "Data & Cloud",
    skills: [
      "Spark",
      "Hadoop",
      "Databricks",
      "AWS (S3, EC2)",
      "PostgreSQL",
      "ETL",
      "Airflow",
    ],
  },
  {
    name: "Full Stack & DevOps",
    skills: [
      "Next.js",
      "React",
      "REST APIs",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
    ],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
