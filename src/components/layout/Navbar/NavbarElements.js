import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#07678E' : '#07678E;')};
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
    font-size: 1rem;
    font-family: 'Otomanopee One', sans-serif;
    position: fixed;
    top: 0;
    z-index: 10;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    opacity: .96;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80px;
    z-index: 1;
    width: 100%;
    /* padding: 0 24px; */
    /* max-width: 1100px; */
    /* justify-content: flex-end; */
    
`

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    letter-spacing: .08em;
    font-family: 'Otomanopee One', sans-serif;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    justify-content: flex-start;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-styled: none;
    text-align: center;
    /* margin-right: -22px; */
    height: 100%;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`

/* export const NavItem = styled.div`
    height: 80px;
    list-style: none;
    background: yellow;
` */

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    width: 100%;
    /* border-bottom: 3px solid #01bf71; */

    &.active {
        border-bottom: 3px solid #01bf71;
        background: yellow;
    }
`
export const NavLi = styled.li `
    text-decoration: none;
    list-style: none;
    color: white;
    padding: 0 2rem;
    text-transform: uppercase;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    letter-spacing: 1.5px;
    font-size: 1em;
    font-family: 'Otomanopee One', sans-serif;
    /* font-weight: 300; */
    /* margin-top: 4.5rem; */
    

    &:hover{
        color: var(--main-btn-color);
        transition: color 600ms ease 0s;
    }

    &.active {
        color: #fff;
        /* border-bottom: 3px solid var(--main-btn-color); */
        background: var(--main-btn-color);
        padding: 1.8rem;
        width: 100%;
        border-radius: 1px;
        transition: 0.5s ease;
        
    }
    
`


/* export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }
` */