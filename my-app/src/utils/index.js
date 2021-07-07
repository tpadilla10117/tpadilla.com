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
      title: "Collab Color",
      tech: "React + Rails API",
      /* svgImg: <Color />, */
      /* img: ColorImg, */
      alt: "Screenshot of the Collab Color app featuring a half-colored square canvas covered in triangles beside a color picker.",
      description: "Users can contribute to a constantly evolving gallery page through this click-to-color app featuring low-poly style art. Select from 3 SVG-based canvases and add colors. Finished pieces are displayed on a gallery page enabled with pagination and sorting options.",
      techHighlights: [
        "Utilized Redux reducers and action creators to centralize state management",
        "Applied Thunk as Redux middleware to handle asynchronous actions like API calls",
        "Designed SVGs in Illustrator to serve as the canvas templates",
        "Built a Rails backend API with a PostgreSQL database to store and retrieve finished images"
      ],
      links: [
        {text: "Live", link: "https://collab-color.netlify.app"},
        {text: "Demo", link: "https://youtu.be/1vj96n49h8c"},
        {text: "GitHub", link: "https://github.com/staceymck/collab-color"}
      ]
    }, 
    {
      id: 2,
      title: "VolunteerLog",
      tech: "Ruby on Rails",
      /* svgImg: <Volunteer />, */
      /* img: VolunteerImg, */
      alt: "Screenshot of a volunteer profile page in the VolunteerLog app",
      description: "This app helps volunteer coordinators track and report on volunteer activity in their organization and features a central dashboard with monthly, yearly, and cummulative stats. Users can create volunteer profiles and roles while tracking individual volunteer engagements.",
      techHighlights: [
        "Styled the site with custom CSS based on mockups designed with Figma",
        "Enabled third-party login through GitHub using OmniAuth; used BCrypt and sessions to manage user authentication",
        "Utilized ActiveRecord query methods to develop a dashboard displaying core stats on engagement levels",
        "Developed partial templates for common elements like forms and error notifications to reduce code repetition"
      ],
      links: [
        {text: "Demo", link: "https://youtu.be/degqCx92P_c"},
        {text: "GitHub", link: "https://github.com/staceymck/volunteer-log"}
      ]
    },
    {
      id: 3,
      title: "STL Zoo Map",
      tech: "JavaScript + Rails API",
      /* svgImg: <Zoo />, */
      /* img: ZooImg, */
      alt: "Screenshot of a volunteer profile page in the VolunteerLog app",
      description: "This app features an interactive map based on the St. Louis Zoo that helps users discover the exhibits in the zoo's five zones. Users can also leave a review and browse reviews left by others.",
      techHighlights: [
        "Stored user-submitted images via Cloudinary and attached them to database records via ActiveStorage",
        "Created a frontend with object-oriented JavaScript and a Rails API to structure the app as a single-page application",
        "Used ActiveRecord scope methods and the gem Kaminari to enable sorting features and pagination for reviews"
      ],
      links: [
        {text: "Demo", link: "https://youtu.be/oFuOIL-6_yo"},
        {text: "GitHub", link: "https://github.com/staceymck/stl-zoo-map-frontend"}
      ]
    }
  ]

  export const techSkills = [ 
    "JavaScript",
    "React",
    "CSS + Sass",
    "Figma"
  ]