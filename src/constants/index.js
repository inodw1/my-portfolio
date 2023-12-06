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
    carrent,
    jobit,
    tripguide,
    threejs,
    sayjel,
    vikum,
    pasindu,
    dbf,
    kognitiv,
    noetic,
    vizuamatix,
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
        title: "Software Engineer",
        company_name: "Digital Blue Foam",
        icon: dbf,
        iconBg: "#383E56",
        date: "Nov 2022 - Present",
        points: [
            "Actively engaged in the entire software development lifecycle of key SaaS and Enterprise web applications, ensuring the delivery of production-quality code within an agile framework, and focusing on continuous optimization of the development process",
            "Design and develop features using component-based architecture patterns, emphasizing reusability, maintainability, and performance, while actively collaborating with cross-functional global teams across over 8 countries for requirement analysis and user-friendly web application development and maintenance",
            "Boosted system efficiency by 40% of their legacy product through optimization strategies, including a significant decrease in initial load times, reduction of initial HTTP requests, and smarter resource management",
            "Contributed to project success by actively participating in code and design reviews, along with providing detailed task analysis, accurate estimations, and identifying potential blockers",
            "Adapted swiftly to client and QA feedback, implementing necessary design changes and bug fixes",
        ],
    },
    {
        title: "Senior Software Engineer | Software Engineer",
        company_name: "Kognitiv Corporation",
        icon: kognitiv,
        iconBg: "#383E56",
        date: "Aug 2021 - Nov 2022",
        points: [
            "Supervised and led a team of 2 junior engineers, oversaw releases, and conducted team code reviews",
            "Actively involved with daily scrum, sprint reviews, retrospectives, and sprint planning while collaborating closely with the delivery manager on backlog grooming to keep product backlog relevant and prioritized, ensuring acceptance criteria were agreed upon and stories were ready for sizing, using agile management tools like JIRA & Confluence for status reporting and planning",
            "Contributed to the setup and development of live, consumer-facing web products, leveraging expertise in both front-end and back-end technologies as a senior developer",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Noetic Marketing Technologies",
        icon: noetic,
        iconBg: "#E6DEDD",
        date: "Sep 2019 - Aug 2021",
        points: [
            "Engaged in the development of live consumer-based web products, focusing on delivering high-quality, user-centric solutions",
            "Specialized in creating reusable and maintainable components and features, ensuring scalability and efficiency in application design",
            "Managed key processes including refunds, payments, and bookings, and successfully integrated Apple Pay",
            "Demonstrated hands-on expertise with a suite of development and deployment tools including Jira, Confluence, Graylog, Jenkins, and AWS, contributing to streamlined project management and deployment processes",
        ],
    },
    {
        title: "Software Engineer | Associate Software Engineer | Intern",
        company_name: "Vizuamatix Pvt. Ltd",
        icon: vizuamatix,
        iconBg: "#383E56",
        date: "Aug 2017 - Aug 2019",
        points: [
            "Developed, deployed (Playstore / AppStore) & maintained mobile applications",
            "Developed consumer-based products and services with a focus on reusability",
            "Partnered with a developer to implement RESTful APIs in NodeJS (Express)",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I've work closely with Inod, who is a talented and experienced software engineer. Inod is excels at solving complex problems and making smart decisions. He's an expert at turning client data into the kind our AI systems can use well. Inod's work makes our projects run smoothly, and he's a valuable part of the team. I highly recommend Inod for his technical skills and hard work.",
        name: "Sayjel Vijay Patel",
        designation: "Co-Founder & CTO",
        company: "Digital Blue Foam",
        image: sayjel,
    },
    {
        testimonial:
            "Inod is a brilliant developer and exceptional teammate one could wish to have in their side. i believe his curiousness and “wanting to know” attitude makes him lot stronger. He was in my team back when i was working with Noetic. Have managed him directly for couple of projects and i’m glad to mention Inod was a go-to guy in the team.",
        name: "Vikum Samaranayaka",
        designation: "Software Engineer",
        company: "Noetic Marketing Pvt. Ltd",
        image: vikum,
    },
    {
        testimonial:
            "Inod is a very good team player and a very dedicated employee. I have done several projects with Inod and He helped to me and to the project a lot. He is smart,professional. experienced, deadline oriented and intelligent person. He likes to learn a lot. Just give him a challenge and see, He won't stop until he achieve what he wanted. Doing R&D with him is really helpful.",
        name: "Pasindu Dineth Peiris",
        designation: "Senior Software Engineer",
        company: "Kognitiv Corporation",
        image: pasindu,
    },
];

const projects = [
    {
        name: "DBF SaaS Product (Web) & Takenaka Application (Web)",
        description: ` An advanced digital tool for the AEC sector which is supported to integrate environmental, and economic data to make eco-friendly design choices. The project emphasizes analysing local climate, environmental conditions, and urban regulations to improve design decisions. It uses advanced 3D modelling for visualization and simulation, enhancing project feasibility. It has automated design processes, boosting efficiency and productivity. The user-friendly web application makes complex design tools accessible, contributing significantly to urban planning and large-scale projects with a focus on sustainability and data-driven practices\n
            ● Conducted in-depth R&D for integrating photorealistic Google 3D tiles into existing 3D scenes, enhancing the visual and functional aspects of applications\n
            ● Developed and maintained key features with reusable, customizable, and maintainable custom components utilizing the latest technologies\n
            ● Handle email templates using the AWS SES (Simple Email Service)\n
            ● Worked on design changes and bug fixes based on the client's feedback\n
            ● Tackle performance bottlenecks and drive improvements to the frontend infrastructure\n`,
        tags: [
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "blue-text-gradient",
            },
            {
                name: "Three.js",
                color: "blue-text-gradient",
            },
            {
                name: "Material UI",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "blue-text-gradient",
            },
            {
                name: "AWS",
                color: "blue-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://app.saas.bluefoam.io",
        show_source_code_link: true,
    },
    {
        name: "Imperial London Hotels (Web)",
        description: `Imperial London is a famous hotel chain in central London, they own 7 hotels altogether. Their central reservation office handles all the contract bookings, bookings via telephone and at the front desk. The staff has a web app (CRO) to manage in-house bookings. Office staff can make contract bookings for the contractors, and direct customers through the web app\n
                ● Front-end development and middleware integrations\n
                ● Involving Task breakdown, Sprint planning, Daily scrum meetings\n
                ● Code reviewing, refactoring, and maintaining the code quality\n
                ● Sorting out issues regarding the requirements with relevant parties\n
                ● Managing testing and best practices\n
                ● Involved in technical discussions and designing\n
                ● Developing smarter higher-order components\n
                ● Integrated Refund flow, restructured and maintaining the payment process\n
                ● Code optimisations and refactoring\n
                ● Code peer reviews and maintaining good quality coding patterns\n
            `,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "SCSS",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "blue-text-gradient",
            },
            {
                name: "NodeJs(Express)",
                color: "blue-text-gradient",
            },
            {
                name: "Redis",
                color: "blue-text-gradient",
            },
            {
                name: "Socket.io",
                color: "blue-text-gradient",
            },
            {
                name: "Docker",
                color: "blue-text-gradient",
            },
            {
                name: "Craft 3 CMS",
                color: "blue-text-gradient",
            },
            {
                name: "Micro Services",
                color: "blue-text-gradient",
            },
            {
                name: "AWS",
                color: "blue-text-gradient",
            },
            {
                name: "Jenkins",
                color: "blue-text-gradient",
            },
            {
                name: "Graylog",
                color: "blue-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://www.imperialhotels.co.uk",
        show_source_code_link: false,
    },
    {
        name: "Infotel - 2018/19 (Mobile)",
        description: `The official mobile app for Infotel 2018, Sri Lanka's premier ICT exhibition, enhancing attendee experience with real-time information and interactive features
            ● User registration for exhibitions and symposiums via QR code\n
            ● Contact sharing among registered users through mobile devices, with the ability to send e-brochures to their emails\n
            ● Real-time chat feature enabling conversations with exhibitors\n
            ● An extensive image and video gallery\n
            ● Live video streaming capability\n
            ● Detailed display of stall information and floor plans\n
            ● Comprehensive presentation of all essential details about the exhibition and symposium\n
            ● A feature for users to rate stalls\n`,
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "NodeJs(Express)",
                color: "blue-text-gradient",
            },
            {
                name: "REST APIs",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "blue-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
        show_source_code_link: false,
    },
];

export { services, technologies, experiences, testimonials, projects };
