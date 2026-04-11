export const profileData = {
    name: "Anya Huang",
    tagline: "Computer Engineering @Uwaterloo",
    bio: "Like art, math, and technology.",
    links: {
        github: "https://github.com/AnyaH0831",
        linkedin: "https://linkedin.com/in/anyahuang07",
        email: "mailto:anyahuang0831@gmail.com"
    }
};


export const timelineItems = [
    
    {
        id: 1,
        type: "work",
        title: "Software Developer Intern",
        company: "Royal Bank of Canada (RBC)",
        date: "July 2024 - August 2024",
        shortDescription: "QA Automation",
        // fullDescription: "[comming soon...]",
        technologies: ["Java", "Selenium"],
        image: "rbc_1.png", //need a good image for this
        achievements: [
            "On the Digital Investment (DI) Online team to automate UI and API test cases using Java and Selenium",
            "Increased QA efficiency per release, saving 34 hours of regression testing time"
        ]
    },

    {
        id: 2,
        type: "work",
        title: "Software Developer Intern",
        company: "Royal Bank of Canada (RBC)",
        date: "July 2025 - August 2025",
        shortDescription: "Web Development and internal tooling",
        // fullDescription: "[comming soon...]",
        technologies: ["JavaScript", "HTML/CSS", "Java", "MongoDB"],
        image: "rbc_2.jpg", //need a good image for this
        achievements: [
            "Designed and built a web application with HTML/CSS, JavaScript, Java, and Spring Boot to automate MongoDB backend message template",
            "Built API endpoints to create, edit, retrieve, and preview templates (JSON & HTML) across multiple message types (Message Centre, SMS/Push, OTP, Voice)",
            "Enabled non-technical teams to manage templates without direct database access, reducing template update time by 90%+ and removing developer dependency. Improved message template creation efficiency by 900%+ "
        ]
    },
 

    {
        id: 3,
        type: "extracurricular",
        title: "Software Engineer",
        company: "WATOnomous",
        date: "September 2025 - Present",
        shortDescription: "Vision Prototyping For The Humanoid Project",
        // fullDescription: "[comming soon...]",
        technologies: ["Python", "ROS2"],
        image: "goose.jpeg", //need a good image for this
        achievements: [
            "Added ROS2 Communication module"
        ]
    },

    {
        id: 4,
        type: "work",
        title: "Full Stack Developer Co-op",
        company: "Royal Bank of Canada (RBC)",
        date: "January 2026 - April 2026",
        shortDescription: "Third Party Risk Analysis Automation",
        // fullDescription: "[comming soon...]",
        technologies: ["Python", "MongoDB", "Dataiku", "ChromaDB"],
        image: "rbc_3.jpeg", //need a good image for this
        achievements: [
            "Built a React web application to automate SaaS security questionnaire analysis, integrating an enterprise LLM gateway with keyword-matching to classify 100+ compliance questions into binary YES/NO/UNKNOWN outputs to power a downstream risk agent",
            "Architected a LangChain ReAct agent for autonomous vendor risk analysis; classification outputs and correlation matrices generated from questionnaire data are ingested as agent inputs to surface risk insights across SaaS vendor portfolios",
            "Developed an analytics dashboard using React (Vite) and Tailwind CSS to visualize agent outputs, SaaS vendor risk profiles, and compliance data in a unified interface",
            "Designed ETL pipelines in Python (Dataiku) to consolidate and transform vendor datasets across MongoDB collections, enriching risk profiles for downstream LLM classification workflows"
        ]
    }
];

export const sideProjects = [
    {
        id: 1,
        type: "tech",
        title: "Comic Live Translator",
        status: "underdevelopment",
        date: "Current",
        github: "https://github.com/AnyaH0831/comic_translator",
        demo: "https://chromewebstore.google.com/detail/hbmnlhjiadooeibgnmpffahgpopbdhip?utm_source=item-share-cb",
        shortDescription: "A chrome extension to live translate your comics.",
        // fullDescription: "[comming soon...]",
        technologies: ["Python", "PaddleOCR", "JavaScript", "HTML/CSS"],
        image: "comic.png", 

    },

    {
        id: 2,
        type: "tech",
        title: "Algorithm Visualizer",
        status: "underdevelopment",
        date: "Current",
        github: "https://github.com/AnyaH0831/algovisual-pro",
        shortDescription: "A visualization of common leetcode algorithms.",
        // fullDescription: "[comming soon...]",
        technologies: ["HTML5 Canvas", "React", "JavaScript", "HTML/CSS"],
        // image: "rbc_1.png", //need a good image for this

    },

    {
        id: 3,
        type: "tech",
        title: "Caramel Huang",
        status: "Complete",
        date: "September 2025",
        github: "https://github.com/AnyaH0831/caramel_huang",
        demo: "https://caramel.anyahuang.page/",
        shortDescription: "Caramel's personal website.",
        // fullDescription: "[comming soon...]",
        technologies: ["Microsoft Azure", "JavaScript", "HTML/CSS"],
        image: "caramel.png", 
       
    },

    // {
    //     id: 4,
    //     type: "tech",
    //     title: "Caramel Huang",
    //     status: "Complete",
    //     date: "September 2025",
    //     shortDescription: "Caramel's personal website.",
    //     // fullDescription: "[comming soon...]",
    //     technologies: ["Microsoft Azure", "JavaScript", "HTML/CSS"],
    //     image: "rbc_1.png", //need a good image for this
    //     achievements: [
    //         "On the Digital Investment (DI) Online team to automate UI and API test cases using Java and Selenium",
    //         "Increased QA efficiency per release, saving 34 hours of regression testing time"
    //     ]
    // }
]