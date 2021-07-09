import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from "react-icons/gr";

import CrwnClothing from "../assets/images/crwn_clothing_landing.png";
import Codalorians from "../assets/images/codalorians.png";
import PixelDraw from "../assets/images/pixel_draw.png";
import Postbook from "../assets/images/postbook.png";
import RoboSearch from "../assets/images/robo_search.png";

export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text',
        id: 2
    },

    {
        title: 'UX Portfolio',
        path: '/portfolio',
        icon: <FaIcons.FaProjectDiagram />,
        cName: 'nav-text',
        id: 3
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoMdPhonePortrait />,
        cName: 'nav-text',
        id: 4
    },
    {
        title: 'Resume',
        path: '/resume',
        icon: <AiIcons.AiOutlineFilePdf />,
        cName: 'nav-text',
        id: 5
    }
    

]

export const NavbarData = [

    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text',
        activeObject: null,
        id: 2
    },

  /*   {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <FaIcons.FaProjectDiagram />,
        cName: 'nav-text'
    }, */
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoMdPhonePortrait />,
        cName: 'nav-text',
        activeObject: null,
        id: 4
    },
    {
        title: 'Resume',
        path: '/resume',
        icon: <AiIcons.AiOutlineFilePdf />,
        cName: 'nav-text',
        activeObject: null,
        id: 5
    }
    

]

export const projects = [
    {
      id: 1,
      title: "Crwn Clothing",
      tech: "Sass, CSS, Firebase, HTML, React.js, JS",
      cardCoverText: "An e-commerce for Stylish, Trendy Clothing",
      svgImg: `${CrwnClothing}`,
      img: `${CrwnClothing}`,
      alt: "Screenshot of the e-commerce app for Stylish, Trendy Clothing.",
      description: "",
      techHighlights: [
        "Utilized Google Firebase for user authentication",
        "Managed user data with queries to Firestore",
        "Designed frontend UI with Sass and custom CSS",
      ],
      links: [
        {text: "GitHub", link: "https://github.com/tpadilla10117/crwn-clothing"}
      ]
    }, 
    {
      id: 2,
      title: "Codalorians",
      tech: "Express.js, JS, HTML, React.js, PostgreSQL, CSS, Node.js, Axios, Stripe, Bootstrap, Heroku, bcrypt",
      cardCoverText: "An e-commerce for Musical Instruments",
      svgImg: `${Codalorians}`,
      img: `${Codalorians}`,
      alt: "",
      description: "",
      techHighlights: [
        "Created API and database with Express.js, Node.js, and PostgreSQL to store and retrieve products",
        "Managed user authentication through bcrypt",
        "Designed frontend UI with Bootstrap CSS and custom CSS libraries.",
        "Developed templates for common elements such as forms to reduce redundancies"
      ],
      links: [
        /* {text: "Demo", link: "https://youtu.be/degqCx92P_c"}, */
        {text: "GitHub", link: "https://github.com/2006-cpu/codalorians"}
      ]
    },
    {
      id: 3,
      title: "Pixel Draw",
      tech: "JS, React.js, CSS, Node.js, HTML",
      cardCoverText: "A Simple, Grid-Based, Pixel-Art Creator",
      svgImg: `${PixelDraw}`,
      img: `${PixelDraw}`,
      alt: "",
      description: "",
      techHighlights: [
        "Designed frontend UI within React.js library using custom CSS frameworks",
        "Developed custom, interactive buttons using logic based in JS",
      ],
      links: [
        {text: "Demo", link: "https://objective-volhard-a4bd7a.netlify.app/"},
        {text: "GitHub", link: ""}
      ]
    }, 
    {
      id: 4,
      title: "Post Book",
      tech: "",
      cardCoverText: "An App Where Users Can Post Items For Sale",
      svgImg: `${Postbook}`,
      img: `${Postbook}`,
      alt: "A clickable card of an application called `PostBook`",
      description: "",
      techHighlights: [
        "Stored user-submitted images via Cloudinary and attached them to database records via ActiveStorage",
        "Created a frontend with object-oriented JavaScript and a Rails API to structure the app as a single-page application",
        "Used ActiveRecord scope methods and the gem Kaminari to enable sorting features and pagination for reviews"
      ],
      links: [
        {text: "Demo", link: "https://laughing-austin-fe12b7.netlify.app/#"},
        {text: "GitHub", link: ""}
      ]
    },
    {
      id: 5,
      title: "Robo Search",
      tech: "",
      cardCoverText: "An App Where Users Can Post Items For Sale",
      svgImg: `${RoboSearch}`,
      img: `${RoboSearch}`,
      alt: "A clickable card of an application called `Robo Search`",
      description: "",
      techHighlights: [
        "Stored user-submitted images via Cloudinary and attached them to database records via ActiveStorage",
        "Created a frontend with object-oriented JavaScript and a Rails API to structure the app as a single-page application",
        "Used ActiveRecord scope methods and the gem Kaminari to enable sorting features and pagination for reviews"
      ],
      links: [
        {text: "Demo", link: ""},
        {text: "GitHub", link: ""}
      ]
    }
    
  ]

  export const techSkills = [ 
    "JavaScript",
    "React",
    "CSS + Sass",
    "Figma"
  ]