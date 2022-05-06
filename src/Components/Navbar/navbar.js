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
        logoStyle = {filter: "invert(48%) sepia(69%) saturate(2420%) hue-rotate(329deg) brightness(95%) contrast(99%)"}
    } else if (!hoverLogo && where !== "") {
        logoStyle = {filter:projects[where].colors.logo_color_normal}
    } else {
        logoStyle = {filter:"invert(8%) sepia(13%) saturate(4%) hue-rotate(325deg) brightness(89%) contrast(82%)"}
    }

    //Manage Showcase link color
    let showcaseStyle;
    if(hoverShowcase && where !== "") {
        showcaseStyle = {color:projects[where].colors.highlight}
    } else if(hoverShowcase && where === "") {
        showcaseStyle = {color: "#F24B4B"}
    } else if (!hoverShowcase && where !== "") {
        showcaseStyle = {color:projects[where].colors.text}
    } else {
        showcaseStyle = {color:"#262626"}
    }

    //Manage Contact link color
    let contactStyle;
    if(hoverContact && where !== "") {
        contactStyle = {color:projects[where].colors.highlight}
    } else if(hoverContact && where === "") {
        contactStyle = {color: "#F24B4B"}
    } else if (!hoverContact && where !== "") {
        contactStyle = {color:projects[where].colors.text}
    } else {
        contactStyle = {color:"#262626"}
    }

    //Manage CV link color
    let cvStyle;
    if(hoverCV && where !== "") {
        cvStyle = {color:projects[where].colors.highlight}
    } else if(hoverCV && where === "") {
        cvStyle = {color: "#F24B4B"}
    } else if (!hoverCV && where !== "") {
        cvStyle = {color:projects[where].colors.text}
    } else {
        cvStyle = {color:"#262626"}
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
                <ul className = {openMenu?"nav-list open":"nav-list"} style={where!==''?{backgroundColor:projects[where].colors.background}:{backgroundColor:"#dde3e8"}}>
                   <li className = {openMenu?"list-item open-design":"nav-list"}>
                        <Link onClick={() => dispatch(setWhere(''))} to='/' className='link' onMouseEnter={() => setHoverShowcase(!hoverShowcase)}  onMouseLeave={() => setHoverShowcase(!hoverShowcase)} style={showcaseStyle} >Showcase</Link>
                    </li>
                    <li className = {openMenu?"list-item open-design":"nav-list"}>
                        <Link onClick={() => dispatch(setWhere(''))} to='/contact' onMouseEnter={() => setHoverContact(!hoverContact)}  onMouseLeave={() => setHoverContact(!hoverContact)} style={contactStyle} className='link'>Contact</Link>
                    </li>
                    <li className = {openMenu?"list-item open-design":"nav-list"}>
                        <Link to="/" className='link' onMouseEnter={() => setHoverCV(!hoverCV)}  onMouseLeave={() => setHoverCV(!hoverCV)} style={cvStyle} onClick={() => dispatch(setWhere(''))}>CV</Link>
                    </li>
                </ul>
                <div className='icon-menu'>
                    <FontAwesomeIcon onClick={() => setOpenMenu(!openMenu)} icon={faBars} />
                </div>
            </nav>
        </div>
    )
}
