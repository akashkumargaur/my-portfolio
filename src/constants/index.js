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
    subhod,
    carrent,
    jobit,
    tripguide,
    threejs,
    APS,
    Course,
    ECommerce
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
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
      title: "MCA",
      company_name: "S S JAIN SUBODH PG COLLEGE",
      icon: subhod,
      iconBg: "#383E56",
      date: "2022 - 2023",
      points: [
        "currently pursuing.",
      ]
    },
    {
      title: "BCA",
      company_name: "S S JAIN SUBODH PG COLLEGE",
      icon: subhod,
      iconBg: "#E6DEDD",
      date: "2018 - 2021",
      points: [
        "RESULT-72%(in Percentage) .",
      ],
    },
    {
      title: "12th",
      company_name: "Army Public School ,jaipurify",
      icon: APS,
      iconBg: "#383E56",
      date: " 2017 - 2018",
      points: [
        "Commerce with Information Practices -65%.",
      ],
    },
    {
      title: "10th",
      company_name: "Army Public School ,jaipur",
      icon: APS,
      iconBg: "#E6DEDD",
      date: " 2015 - 2016",
      points: [
        "CBSE Board-7.4(in CGPA) .",
      ],
    },
  ];
  
  const projects = [
    {
      name: " Cource  Plateform",
      description:
        "Web-based platform that allows users to search, and Purchase Course available on platform, providing a convenient and efficient solution for Students  needs.",
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
      image: Course,
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
  
  export { services, technologies, experiences, projects };