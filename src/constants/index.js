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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
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
        title: "Intern (Mobile Developer)",
        company_name: "Vizuamatix Pvt. Ltd",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Aug 2017 - Jan 2018",
        points: [
            "Developing and maintaining mobile applications using React Native, express.js and other related technologies",
        ],
    },
    {
        title: "Associate Software Engineer",
        company_name: "Vizuamatix Pvt. Ltd",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Feb 2018 - Aug 2019",
        points: ["Working on live consumer-based products"],
    },
    {
        title: "Software Engineer",
        company_name: "Noetic Marketing Technologies Ltd",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Sep 2019 - Jul 2021",
        points: [
            "Working on live consumer-based products",
            "Reusable component and feature development",
            "Handle refund and payment process, Apple Pay payment integration",
            "Hands-on experience in Jira, Conﬂuence, Graylog, Jenkins, AWS",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Kognitiv Corporation",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jul 2021 - Apr 2022",
        points: [
            "Developing reusable widgets for the Liferay DXP based on the components",
            "Hands-on experience in Jira, Conﬂuence, Graylog, Jenkins, AWS",
        ],
    },
    {
        title: "Senior Software Engineer",
        company_name: "Kognitiv Corporaton",
        icon: shopify,
        iconBg: "#383E56",
        date: "Apr 2022 - Nov 2022",
        points: [
            "Managing development team, conducting releases, team code review",
            "Involving sprint planning, task breakdown and estimates, conducting retrospectives",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "DBF",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Nov 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js, three.js and other related technologies",
            "Collaborating with cross-functional teams to develop software tools for the AEC (Architecture, Engineering, and Construction) industry",
            "React.js, Redux, Express.js, Javascript, HTML, CSS, Three.js, react-three-fibre, Material UI",
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
