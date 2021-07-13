import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';


/* Transition doesn't work */
export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #07678E;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    /* transition: 0.3 ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; */
`
/* ------------------------------------------------------------------------------- */
/* These are the Styles for the "x" on the sidebar: */

    export const CloseIcon = styled(FaIcons.FaTimes)`
        color: #fff;
    `

    export const Icon = styled.div`
        position: absolute;
        top: 1.2rem;
        right: 1.5rem;
        background: transparent;
        font-size: 2rem;
        cursor: pointer;
        outline: nine;
    `
/* ------------------------------------------------------------------------------- */
export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    font-family: 'Otomanopee One', sans-serif;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 80px);
        
    }

    @media screen and (max-width: 768px) {
        grid-template-rows: repeat(6, 90px);
    }

    @media screen and (max-width: 1024px) {
        grid-template-rows: repeat(6, 90px);
    }

`;

/* Where You Style the <li> tags */
export const SidebarLi = styled.li`
    text-decoration: none;
    list-style: none;
    color: white;
    letter-spacing: 1px;
    font-size: 1.5em;
    font-family: 'Otomanopee One', sans-serif;
    /* font-weight: 500; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 20px);
    text-align: center;

    &:hover{
        color: var(--main-btn-color);
        transition: color 600ms ease 0s;
    }

    /* @media screen and (max-width: 1024px) {
        grid-template-rows: repeat(6, 30px);
        font-size: 2.5em;
    } */
`

export const SidebarLink = styled(LinkScroll)`
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    $:hover {
        color: #01bf71;
        transition: 0.2 ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }
`