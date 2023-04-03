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
    hackreactor,
    me,
    katy,
    greenthumb,
    carcar,
    threejs,
} from "../assets";

export const myGithub = "https://github.com/MeganR106"

export const myGitlab = "https://gitlab.com/megann1006"

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "resume",
        title: "Resume",
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
        title: "Frontend Developer",
        icon: creator,
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
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Software Engineer Student",
        company_name: "Hack Reactor",
        icon: hackreactor,
        iconBg: "#E6DEDD",
        date: "November 2022 - March 2023",
        points: [
            "Developed and maintained web applications using React.js and other related technologies.",
            "Complete 774 hours of coursework with JavaScript and Python.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "3rd Grade Teacher",
        company_name: "Katy ISD",
        icon: katy,
        iconBg: "#E6DEDD",
        date: "August 2021 - May 2022",
        points: [
            "Planned and used appropriate instructional strategies, assessments, activities, materials, and technology that reflect accommodations for individual needs of 12 students.",
            "Worked cooperatively with 3 other teachers to modify curricula for special education students according to guidelines established in Individual Education Plans (IEP) that allowed the student to learn on pace with district expectations.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Megan is a pleasure to work with; she is a skilled software engineer who can deliver an impressive amount of quality work in a timely manner while keeping up team morale with her positive attitude and fresh ideas. Megan is capable of picking up new skills quickly and has shown on multiple occasions that she can use those skills to help others.",
        name: "Matthew Sun",
        designation: "Full Stack Software Engineer",
        // company: "Acme Co",
        image: "https://media.licdn.com/dms/image/D5603AQFs-0Bx1URGcA/profile-displayphoto-shrink_800_800/0/1675178011680?e=1684972800&v=beta&t=eS3EdQWpJE1G4lpqt1wBFD6HMsseaTOE7nrfqMbjkc8",
    },
];

const myWords = [
    {
        text: "Here you can download my Resume by clicking on the Download button.",
        name: "Megan Rodriguez",
        designation: "The owner",
        image: me,
    },
]

const projects = [
    {
        name: "Green Thumb",
        description:
            "House plant web application to view plant details and favorite plants to see quick care needs.",
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
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: greenthumb,
        source_code_link: "https://gitlab.com/megann1006/module3-project-gamma",
        demo_link: "https://megann1006.gitlab.io/module3-project-gamma"
    },
    {
        name: "CarCar",
        description:
            "Web application that manages everything related to the inventory of an automobile dealership, service center, sales, customers, and employees.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "django",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: carcar,
        source_code_link: "https://gitlab.com/megann1006/carcar",
    },
];

export { services, technologies, experiences, testimonials, myWords, projects };
