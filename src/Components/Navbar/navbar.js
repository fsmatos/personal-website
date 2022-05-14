import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setWhere, projectsSelector } from '../../Features/AllProjects/allProjectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './navbar.css';

export const Navbar = () => {
    const dispatch = useDispatch();
    const [hoverLogo, setHoverLogo] = useState(false);
    const [hoverShowcase, setHoverShowcase] = useState(false);
    const [hoverContact, setHoverContact] = useState(false);
    const [hoverCV, setHoverCV] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const {projects, where} = useSelector(projectsSelector);

    //Manage logo color
    let logoStyle;
    if(hoverLogo && where !== "") {
        logoStyle = {filter:projects[where].colors.logo_color_highlight}
    } else if(hoverLogo && where === "") {
        logoStyle = {filter: "invert(29%) sepia(0%) saturate(1319%) hue-rotate(142deg) brightness(99%) contrast(93%)"}
    } else if (!hoverLogo && where !== "") {
        logoStyle = {filter:projects[where].colors.logo_color_normal}
    } else {
        logoStyle = {filter:"invert(69%) sepia(0%) saturate(0%) hue-rotate(143deg) brightness(81%) contrast(85%)"}
    }

    //Manage Showcase link color
    let showcaseStyle;
    if(hoverShowcase && where !== "") {
        showcaseStyle = {color:projects[where].colors.highlight, fontWeight:"bold"}
    } else if(hoverShowcase && where === "") {
        showcaseStyle = {color: "#4D4D4D", fontWeight:"bold"}
    } else if (!hoverShowcase && where !== "") {
        showcaseStyle = {color:projects[where].colors.text}
    } else {
        showcaseStyle = {color:"#8C8C8C"}
    }

    //Manage Contact link color
    let contactStyle;
    if(hoverContact && where !== "") {
        contactStyle = {color:projects[where].colors.highlight, fontWeight:"bold"}
    } else if(hoverContact && where === "") {
        contactStyle = {color: "#4D4D4D", fontWeight:"bold"}
    } else if (!hoverContact && where !== "") {
        contactStyle = {color:projects[where].colors.text}
    } else {
        contactStyle = {color:"#8C8C8C"}
    }

    //Manage CV link color
    let cvStyle;
    if(hoverCV && where !== "") {
        cvStyle = {color:projects[where].colors.highlight, fontWeight:"bold"}
    } else if(hoverCV && where === "") {
        cvStyle = {color: "#4D4D4D", fontWeight:"bold"}
    } else if (!hoverCV && where !== "") {
        cvStyle = {color:projects[where].colors.text}
    } else {
        cvStyle = {color:"#8C8C8C"}
    }

    //Manage open menu when size decreases
    return (
        <div className='main-navigation'>
            <div className = "logo">
                <Link onClick={() => dispatch(setWhere(''))} to='/' className='logo'  onMouseEnter={() => setHoverLogo(!hoverLogo)}  onMouseLeave={() => setHoverLogo(!hoverLogo)} >
                    <img alt='logo' src='/monogramBlack.svg' style={logoStyle}></img>
                </Link>
            </div>
            <nav className = "navbar">
                <ul className = {openMenu?"nav-list open":"nav-list"} style={where!==''?{backgroundColor:projects[where].colors.background}:{backgroundColor:"#e8eef4"}}>
                   <li className = {openMenu?"list-item open-design":"nav-list"}>
                        <Link onClick={() => dispatch(setWhere(''))} to='/' className='link' onMouseEnter={() => setHoverShowcase(!hoverShowcase)}  onMouseLeave={() => setHoverShowcase(!hoverShowcase)} style={showcaseStyle} >SHOWCASE</Link>
                    </li>
                    <li className = {openMenu?"list-item open-design":"nav-list"}>
                        <Link onClick={() => dispatch(setWhere(''))} to='/contact' onMouseEnter={() => setHoverContact(!hoverContact)}  onMouseLeave={() => setHoverContact(!hoverContact)} style={contactStyle} className='link'>CONTACT</Link>
                    </li>
                    <li className = {openMenu?"list-item open-design":"nav-list"}>
                        <a href='/CV.pdf' target="_blank" rel="noopener noreferrer" className='link' onMouseEnter={() => setHoverCV(!hoverCV)}  onMouseLeave={() => setHoverCV(!hoverCV)} style={cvStyle} onClick={() => dispatch(setWhere(''))}>CV</a>
                    </li>
                </ul>
                <div className='icon-menu'>
                    <FontAwesomeIcon onClick={() => setOpenMenu(!openMenu)} icon={faBars} />
                </div>
            </nav>
        </div>
    )
}
