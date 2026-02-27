export const profileData = {
    name: "Anya Huang",
    tagline: "Computer Engineering @Uwaterloo",
    bio: "Like art, math, and technology.",
    links: {
        github: "https://github.com/AnyaH0831",
        linkedin: "https://linkedin.com/in/anyahuang07",
        email: "anyahuang0831@gmail.com"
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
            "Built Python recipes in Dataiku to process and manage large scale datasets",
            "Deployed and integrated a Vector Database (ChromaDB) using Python",
            "Used Ollama models to generate summaries for SaaS Q&A checklists excel sheets"
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
        shortDescription: "A chrome extension to live translate your comics.",
        // fullDescription: "[comming soon...]",
        technologies: ["Python", "PaddleOCR", "JavaScript", "HTML/CSS"],
        image: "rbc_1.png", //need a good image for this
        achievements: [
            "On the Digital Investment (DI) Online team to automate UI and API test cases using Java and Selenium",
            "Increased QA efficiency per release, saving 34 hours of regression testing time"
        ]
    }
]