import {
    mobile,
    backend,
    creator,
    web,
    canva,
    java,
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
    meol,
    bogl,
    movieworld,
    greatshoe,
    loruki,
    typenspeak,
    carrent,
    jobit,
    tripguide,
    threejs,
    loyola,
    sathyabama,
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
        title: "UI / UX Design",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
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
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
    {
        name: "java",
        icon: java,
    },
    {
        name: "canva",
        icon: canva,
    },
];

const experiences = [
    {
        title: "Secondary School Certificate (CBSE)",
        company_name: "Loyola Convent School, Ranchi Jharkhand",
        icon: loyola,
        iconBg: "#E6DEDD",
        date: "2016 - 2018",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Higher Secondary Certificate (CBSE)",
        company_name: "Loyola Convent School, Ranchi Jharkhand",
        icon: loyola,
        iconBg: "#E6DEDD",
        date: "2018 - 2020",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "B.E in Computer Science and Engineering",
        company_name: "Sathyabama Institute of Science and Technology",
        icon: sathyabama,
        iconBg: "#E6DEDD", //#383E56
        date: "2020 - 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        name: "Meol",
        description:
            "Web-based platform that allows users to search, create, and manage pins, providing seamless image uploading and sharing, with features such as captions, download, save and tags.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "sanity",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: meol,
        source_code_link: "https://github.com/Sudip-Singha/Meol",
        project_link: "https://meol.netlify.app/",
    },
    {
        name: "Bogl",
        description:
            "Web application that enables users to create, manage, search blogs in multiple genre, provinding user-authentication, allowing authors to manage their profiles and bolg posts.",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: bogl,
        source_code_link: "https://github.com/Sudip-Singha/Bogl",
        project_link: "https://bogl.000webhostapp.com/",
    },
    {
        name: "Movie World",
        description:
            "Web-based platform that allows users to find information about their favrouite movies, the year movie launched and the sequels of the movie.",
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
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: movieworld,
        source_code_link: "https://github.com/Sudip-Singha/MovieWorld",
        project_link: "https://movieworldproject.netlify.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };