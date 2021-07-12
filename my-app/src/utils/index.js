import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import CrwnClothing from "../assets/images/crwn_clothing_landing.png";
import Codalorians from "../assets/images/codalorians.png";
import PixelDraw from "../assets/images/pixel_draw.png";
import Postbook from "../assets/images/postbook.png";
import RoboSearch from "../assets/images/robo_search.png";
import Turtle from "../assets/images/turtleBeach.jpg";

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
      description: "A full stack, e-commerce web-application in-progress that will guide users through a simple, easy-to-follow shopping experience for hip/trendy apparel. Users can currently browse a catalog of products, create an account, and sign-out of the application.",
      techHighlights: [
        "Utilized Google Firebase for user authentication",
        "Managed user data with queries to Firestore",
        "Designed frontend UI with Sass and custom CSS",
      ],
      links: [
        {text: "In Development", link: "https://peaceful-edison-ca2461.netlify.app/"},
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
      description: "A full stack, e-commerce web-application that guides users through an intuitive shopping experience. Users can browse a catalog of items, add/remove items from their cart, make purchases, & create product reviews.",
      techHighlights: [
        "Created API and database with Express.js, Node.js, and PostgreSQL to store and retrieve products",
        "Managed user authentication through bcrypt",
        "Designed frontend UI with Bootstrap CSS and custom CSS frameworks",
        "Developed templates for common elements such as forms to reduce redundancies"
      ],
      links: [
        {text: "Demo", link: "https://afternoon-brook-26059.herokuapp.com/home"},
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
      alt: "An image of an empty grid of blocks surrounded by a colored grid-palette",
      description: "A simple drawing web-application where users can choose from a palette of defined colors and create pixelated art.",
      techHighlights: [
        "Designed frontend UI within React.js library using custom CSS frameworks",
        "Developed custom, interactive buttons using logic based in JS",
      ],
      links: [
        {text: "Demo", link: "https://objective-volhard-a4bd7a.netlify.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/pixel_draw/tree/master/my-app"}
      ]
    }, 
    {
      id: 4,
      title: "Post Book",
      tech: "JS, Node.js, Express.js, jQuery, HTML, CSS, Bootstrap",
      cardCoverText: "An App Where Users Can Post Items For Sale",
      svgImg: `${Postbook}`,
      img: `${Postbook}`,
      alt: "A clickable card of an application called `PostBook`",
      description: "A 'Craigslist'-like clone that allows users to post objects for sale.  Users can interact with each other via message and coordinate purchases.",
      techHighlights: [
        "Created a UI with Express.js API and structured the app as a single-page application",
        "Implemented jQuery JS library to handle click events, state management, etc. ",
        "Designed UX with Bootstrap CSS framework"
      ],
      links: [
        {text: "Demo", link: "https://laughing-austin-fe12b7.netlify.app/#"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/strangersThings-PostBook-"}
      ]
    },
    {
      id: 5,
      title: "Robo Search",
      tech: "JS, React.js, HTML, CSS",
      cardCoverText: "An image filter",
      svgImg: `${RoboSearch}`,
      img: `${RoboSearch}`,
      alt: "A clickable card of an application called `Robo Search`",
      description: "A simple application and UI that allows users to browse and filter through images of Robots",
      techHighlights: [
        "Designed UI and UX with custom CSS",
        "Implemented basic filter logic allowing users to search cards"
      ],
      links: [
        {text: "Demo", link: "https://tpadilla10117.github.io/robo_search/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/robo_search"}
      ]
    },
    {
      id: 6,
      title: "Post Integration",
      tech: "JS, Node.js, Express.js, PostgreSQL, CSS, HTML, SASS, jsonwebtoken",
      cardCoverText: "A custom backend for a Tumblr clone",
      svgImg: ``,
      img: `${Turtle}`,
      alt: "An image of post data in JSON format",
      description: "A custom-built API and database intended to serve as the backend for a “Tumblr” clone. Users can create an account as well as view, create, delete, and edit posts with content.",
      techHighlights: [
        "Designed scalable, custom-built API",
        "Implemented user authentication through bcrypt",
        "Developed user post & tag content generation through CRUD methodology"
      ],
      links: [
        {text: "In Development", link: "https://murmuring-garden-99126.herokuapp.com/api/posts"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/post-integration"}
      ]
    }
    
  ]

  export const techSkills = [ 
    "JavaScript",
    "React",
    "CSS + Sass",
    "Figma"
  ]