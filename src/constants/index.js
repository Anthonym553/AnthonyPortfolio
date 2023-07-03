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
    python,
    java,
    cpp,
    postgresql,
    meta,
    starbucks,
    tesla,
    shopify,
    mgbw,
    ecu,
    carrent,
    jobit,
    tripguide,
    piknic,
    oneManArmy,
    threejs,
    nickportrait,
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
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
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
      name: "Three JS",
      icon: threejs,
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
      name: "PostgreSQL",
      icon: postgresql,
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
      title: "Inventory Management/Product Inspector",
      company_name: "Mitchell Gold + Bob William",
      icon: mgbw,
      iconBg: "#383E56",
      date: "Jan 2019 - July 2022",
      points: [
        "Reduced aged/underused inventory using data analysis and reporting.",
        "Collaborating with cross-functional teams including designers, product managers, and other departments to create high-quality products.",
        "Revision of works in preparation to be sent to production.",
      ],
    },
    {
      title: "Computer Science Undergrad",
      company_name: "East Carolina University",
      icon: ecu,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - May 2023",
      points: [
        "Obtained a B.S. in Computer Science.",
        "Underwent curriculum focused on practice and development of software.",
        "Included heavy study of subjects such as Discrete Math, OOP, Web Dev, SWE architecture, OS, DB management, etc ",
        "Participated in a plethora of different teams to build different projects or complete various task within the Comp Sci curriculum.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Placeholder: I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Placeholder: I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Anthony is so easy to get along with. He understood exactly what we needed and how to get it done.",
      name: "Nick Terrell",
      designation: "Digital Platforms",
      company: "Coastal Credit Union",
      image: nickportrait,
    },
  ];
  
  const projects = [
    {
      name: "Piknic",
      description:
        "Web application that enables users to search for local restaurants based on a crave or cuisine.",
      tags: [
        {
          name: "FastAPI",
          color: "blue-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "green-text-gradient",
        },
        {
          name: "MapBox API",
          color: "pink-text-gradient",
        },
      ],
      image: piknic,
      source_code_link: "https://github.com/Anthonym553/Piknic/tree/main/placeholder",
    },
    {
      name: "One Man Army",
      description:
        "The One Man Army mobile application provides a platform for small business owners to display their expertise and advertise their services. Additionally, it enables individuals who lack certain skill sets to locate competent professionals and outsource work to them.",
      tags: [
        {
          name: "Android Studio",
          color: "blue-text-gradient",
        },
        {
          name: "Kotlin",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: oneManArmy,
      source_code_link: "https://github.com/Anthonym553/BusinessProprietorApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };