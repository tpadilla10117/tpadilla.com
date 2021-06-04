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
        cName: 'nav-text'
    },

    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <FaIcons.FaProjectDiagram />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoMdPhonePortrait />,
        cName: 'nav-text'
    },
    {
        title: 'Resume',
        path: '/resume',
        icon: <AiIcons.AiOutlineFilePdf />,
        cName: 'nav-text'
    }
    

]

export const NavbarData = [

    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },

    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <FaIcons.FaProjectDiagram />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoMdPhonePortrait />,
        cName: 'nav-text'
    },
    {
        title: 'Resume',
        path: '/resume',
        icon: <AiIcons.AiOutlineFilePdf />,
        cName: 'nav-text'
    }
    

]