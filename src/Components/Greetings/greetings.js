import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Social } from '../Social/social';
import { projectsSelector } from '../../Features/AllProjects/allProjectsSlice';
import './greetings.css';

export const Greetings = () => {
    const [hoverBehance, setHoverBehance] = useState(false);
    const [hoverLinkedIn, setHoverLinkedIn] = useState(false);
    const [hoverGitHub, setHoverGitHub] = useState(false);
    const {projects, where} = useSelector(projectsSelector);

    //Manage Behance link color
    let behanceStyle;
    if(hoverBehance && where !== "") {
        behanceStyle = {color:projects[where].colors.highlight}
    } else if(hoverBehance && where === "") {
        behanceStyle = {color: "#F24B4B"}
    } else if (!hoverBehance && where !== "") {
        behanceStyle = {color:projects[where].colors.text}
    } else {
        behanceStyle = {color:"#262626"}
    }

    //Manage LinkedIn link color
    let linkedinStyle;
    if(hoverLinkedIn && where !== "") {
        linkedinStyle = {color:projects[where].colors.highlight}
    } else if(hoverLinkedIn && where === "") {
        linkedinStyle = {color: "#F24B4B"}
    } else if (!hoverLinkedIn && where !== "") {
        linkedinStyle = {color:projects[where].colors.text}
    } else {
        linkedinStyle = {color:"#262626"}
    }

    //Manage GitHub link color
    let githubStyle;
    if(hoverGitHub && where !== "") {
        githubStyle = {color:projects[where].colors.highlight}
    } else if(hoverGitHub && where === "") {
        githubStyle = {color: "#F24B4B"}
    } else if (!hoverGitHub && where !== "") {
        githubStyle = {color:projects[where].colors.text}
    } else {
        githubStyle = {color:"#262626"}
    }


    return(
        <div className='greetings-container'>
            <h1>Hi, my name is <strong>Francisco Matos.</strong></h1>
            <p>I'm a <strong>front-end developer</strong> based in Portugal. <br /> I started my journey in 2018 and recently finished my degree in Communication and Multimedia Design.</p>
            <Social />
        </div>
    )
}