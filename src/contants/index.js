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
    quizplanet,
    jobit,
    // tripguide,
    threejs,
    hostelnavigator,
    fasion,
    python,
    database,
    API,
    AWS,
    DP,
    DA,
    AI,
    internship,
    Java,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "work",
    },
    {
        id: "certifications",
        title: "Certifications",  // Add this for the Certification section
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Fontend Developer",
        icon: mobile,
    },
    {
        title: " API-Integration",
        icon: API,
    },
    {
        title: "Database Manager",
        icon: database,
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
        name: "Typescript",
        icon: python,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "C++",
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
        name: "JAVA",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Android",
        icon: figma,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "QuizPlanet",
        description:
            "An interactive and dynamic online quiz platform where users can participate in exciting quizzes, challenge their knowledg.",
        tags: [
            {
                name: "Django",
                color: "blue-text-gradient",
            },
            {
                name: "Postgres",
                color: "green-text-gradient",
            },
            {
                name: "Bootstarap",
                color: "pink-text-gradient",
            },
        ],
        image: quizplanet,
        source_code_link: "https://github.com/LoveleshSingh24/QuizPlanet.git",
    },
    {
        name: "Hostel Navigator",
        description:
            "At HostelNavigator, our mission is to provide comfortable and affordable accommodation for students and young professionals.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "pink-text-gradient",
            },
        ],
        image: hostelnavigator,
        source_code_link: "https://github.com/LoveleshSingh24/HostelNavigator_Project.git",
    },
    {
        name: "Fasion Extraa - Crown",
        description:
            "A comprehensive Fasion Store that allows users to shop latest fasion outfit and make the shoping more affordable and trendy",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Redux",
                color: "pink-text-gradient",
            },
        ],
        image: fasion,
        source_code_link: "https://github.com/LoveleshSingh24/Fasion-Extraa.git",
    },
];

const certifications = [
    {
        name: "AWS Academy Cloud Architecting",
        description:
            "The AWS Academy Graduate - AWS Academy Cloud Architecting certification is a credential designed for individua",
        provider: "AWS-Academy",
        date: "April 2024",
        tags: [
            {
                name: "AWS",
                color: "blue-text-gradient",
            },
        ],
        image: AWS,  // Image representing the certification
        certification_link: "",
    },
    {
        name: "Java Intenship",
        description:
            "During a 1-month internship in Java Development at Osis Infobyte, you gained hands-on experience in designing, developing, and debugging Java applications.",
        provider: "Oasis-Infobyte",
        date: "April 2023",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
        ],
        image: internship,  // Image representing the certification
        certification_link: "",
    },
    {
        name: "Exploratory data analysis ",
        description:
            " Exploratory Data Analysis (Level 2 - AI Ready) certification from AI ASCEND by Accenture. This credential signifies a strong proficiency in Data Analysis for future oriented skills Data Analysis for future oriented skills",
        provider: "Accenture",
        date: "December 2023",
        tags: [
            {
                name: "Data-Analytics",
                color: "blue-text-gradient",
            },
        ],
        image: DA,  // Image representing the certification
        certification_link: "",
    },
    {
        name: "Generative AI from Google Cloud",
        description:
            "The Generative AI certification from Google Cloud demonstrates expertise in utilizing Google Cloud’s tools and services to build and deploy generative AI models",
        provider: "Google Cloud",
        date: "December 2023",
        tags: [
            {
                name: "Generative AI",
                color: "blue-text-gradient",
            },
        ],
        image: AI,  // Image representing the certification
        certification_link: "",
    },
    {
        name: "Java Oracle",
        description:
            "Java Oracle certifications validate your expertise in Java programming and application development. These credentials, offered by Oracle, cover various levels and specializations, including Java SE (Standard Edition) for core Java skills.",
        provider: "Oracle",
        date: "June 2023",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
        ],
        image: Java,  // Image representing the certification
        certification_link: "",
    },
    {
        name: "Data Processing and Visualization",
        description:
            "The Data Processing and Visualization certification by Accenture focuses on equipping professionals with essential skills for managing and interpreting data.",
        provider: "Accenture",
        date: "December 2024",
        tags: [
            {
                name: "Data Processing and Visualization",
                color: "blue-text-gradien",
            },
        ],
        image: DP,  // Image representing the certification
        certification_link: "",
    },
];

export { services, technologies, experiences, testimonials, projects, certifications};