import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from "react-icons/gr";

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
      tech: "",
      /* svgImg: <Color />, */
      /* img: ColorImg, */
      alt: "Screenshot of the e-commerce app for Stylish, Trendy Clothing.",
      description: "",
      techHighlights: [
        "Utilized Redux reducers and action creators to centralize state management",
        "Applied Thunk as Redux middleware to handle asynchronous actions like API calls",
        "Designed SVGs in Illustrator to serve as the canvas templates",
        "Built a Rails backend API with a PostgreSQL database to store and retrieve finished images"
      ],
      links: [
        {text: "GitHub", link: "https://github.com/tpadilla10117/crwn-clothing"}
      ]
    }, 
    {
      id: 2,
      title: "Codalorians",
      tech: "",
      /* svgImg: <Volunteer />, */
      /* img: VolunteerImg, */
      alt: "",
      description: "",
      techHighlights: [
        "Styled the site with custom CSS based on mockups designed with Figma",
        "Enabled third-party login through GitHub using OmniAuth; used BCrypt and sessions to manage user authentication",
        "Utilized ActiveRecord query methods to develop a dashboard displaying core stats on engagement levels",
        "Developed partial templates for common elements like forms and error notifications to reduce code repetition"
      ],
      links: [
        /* {text: "Demo", link: "https://youtu.be/degqCx92P_c"}, */
        {text: "GitHub", link: "https://github.com/2006-cpu/codalorians"}
      ]
    },
    {
      id: 3,
      title: "Pixel Draw",
      tech: "",
      /* svgImg: <Zoo />, */
      /* img: ZooImg, */
      alt: "",
      description: "",
      techHighlights: [
        "Stored user-submitted images via Cloudinary and attached them to database records via ActiveStorage",
        "Created a frontend with object-oriented JavaScript and a Rails API to structure the app as a single-page application",
        "Used ActiveRecord scope methods and the gem Kaminari to enable sorting features and pagination for reviews"
      ],
      links: [
        {text: "Demo", link: "https://objective-volhard-a4bd7a.netlify.app/"},
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