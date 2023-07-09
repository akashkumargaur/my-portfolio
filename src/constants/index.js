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
    aPS,
    course,
    ludo,chat
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "My Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "resume",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Js",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mern Stack",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
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
      icon: aPS,
      iconBg: "#383E56",
      date: " 2017 - 2018",
      points: [
        "Commerce with Information Practices -65%.",
      ],
    },
    {
      title: "10th",
      company_name: "Army Public School ,jaipur",
      icon: aPS,
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
          name: "chakra UI",
          color: "pink-text-gradient",
        },
      ],
      image: course,
      source_code_link: "https://github.com/akashkumargaur/sampleCourse",
    },
    {
      name: "Ludo",
      description:
        "Web application that enables users to search for challenges created by other user and accept other user challenges with there personal profile and balance ",
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
      image: ludo,
      source_code_link: "https://github.com/akashkumargaur/ludo",
    },
    {
      name: "server group chat",
      description:
        "Create server into a group chat using socket.io and send message to all users in group chat. Takes input user name while opening a page and display chat",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "node js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/akashkumargaur/Chat-Room",
    },
  ];
  
  export { services, technologies, experiences, projects };