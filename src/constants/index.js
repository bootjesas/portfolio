import {
    mobile,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    codecademy,
    threejs,
    jammming,
    fitclub,
    infopilot,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "Designer",
      icon: web,
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
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "AP Hogeschool",
      company_name: "Grafische en digitale media",
      icon: codecademy,
      iconBg: "#204056",
      date: "19 Sept 2021 - 31 Dec 2021",
      points: [
        "Basisprincipes van HTML",
        "Basisprincipes van CSS",
        "Basisprincipes van XD",
      ],
    },
    {
      title: "AP Hogeschool",
      company_name: "Grafische en digitale media",
      icon: codecademy,
      iconBg: "#204056",
      date: "1 Jan 2022 - 24 Jun 2022",
      points: [
        "Basisprincipes van webdesign",
        "Een website responsive maken",
        "CSS-overgangen en animaties"
      ],
    },
    {
      title: "AP hogeschool",
      company_name:"Grafische en digitale media",
      icon: codecademy,
      iconBg: "#204056",
      date: "14 sept 2022 -  31 Dec 2022",
      points: [
        "Basisprincipes javascript",
        "Interactieve websites bouwen",
        "Basisprincipes Figma",
      ],
    },
    {
      title: "AP hogeschool",
      company_name: "Grafische en digitale media",
      icon: codecademy,
      iconBg: "#204056",
      date: "1 Jan - Present",
      points: [
        "github gebruiken",
        "JavaScript canvas ",
        "Asynchroon JavaScript",
        "Web Apps",
        "React Framework"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Valeriu proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Valeriu does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Valeriu optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "TeamCheer",
      description: "TeamCheer is een dashboard gemaakt voor supporters van een volleybalteam. Supporters die een match moeten missen wegens omstandigheden.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        
      ],
      image: infopilot,
      source_code_link: "https://www.figma.com/proto/gIt8Tl85GGDUET52VPhECL/opdracht-2-dashboard-TeamCheer?page-id=0%3A1&node-id=1-2&starting-point-node-id=116%3A1894&scaling=scale-down",
      demo_link: "https://www.figma.com/proto/gIt8Tl85GGDUET52VPhECL/opdracht-2-dashboard-TeamCheer?page-id=0%3A1&node-id=1-2&starting-point-node-id=116%3A1894&scaling=scale-down"
    },
    {
      name: "SalaMe game",
      description: "SalaMe is een local based game in hartje van stad anwerpen. Het is de bedoeling dat je alle ingrediënten voor de pizza's van klanten terug vindt. Het is geschreven met javascript",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "white-text-gradient",
        },
      ],
      image: jammming,
      source_code_link: "https://www.figma.com/file/SfGh0V6QwMzFCw24dW4fkK/prototype?node-id=0%3A1&t=4JZIOWyNPTIAvpwO-1",
      demo_link: "https://salame.netlify.app"
    },
    {
      name: "Velo app",
      description: "De velo app is een app voor alle gebruikers van velo fietsjes in antwerpen. Die zo kunnen zien waar er nog een fietsje vrij is. Met behulp van Api Key.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: fitclub,
      source_code_link: "https://github.com/bootjesas/opdracht-react-",
      demo_link: "https://www.figma.com/proto/VXAK5MNO7S8BFgv92DDddW/coding?page-id=0%3A1&node-id=16-10&starting-point-node-id=16%3A10"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };