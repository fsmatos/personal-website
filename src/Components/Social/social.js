import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { projectsSelector } from '../../Features/AllProjects/allProjectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import './social.css';

export const Social = () => {
    const [hoverLinkedIn, setHoverLinkedIn] = useState(false);
    const [hoverGitHub, setHoverGitHub] = useState(false);
    const {projects, where} = useSelector(projectsSelector);

    //Manage LinkedIn link color
    let linkedinStyle;
    if(hoverLinkedIn && where !== "") {
        linkedinStyle = {color:projects[where].colors.highlight, fontWeight:"bold"}
    } else if(hoverLinkedIn && where === "") {
        linkedinStyle = {color: "#4D4D4D", fontWeight:"bold"}
    } else if (!hoverLinkedIn && where !== "") {
        linkedinStyle = {color:projects[where].colors.text}
    } else {
        linkedinStyle = {color:"#8C8C8C"}
    }

    //Manage GitHub link color
    let githubStyle;
    if(hoverGitHub && where !== "") {
        githubStyle = {color:projects[where].colors.highlight, fontWeight:"bold"}
    } else if(hoverGitHub && where === "") {
        githubStyle = {color: "#4D4D4D", fontWeight:"bold"}
    } else if (!hoverGitHub && where !== "") {
        githubStyle = {color:projects[where].colors.text}
    } else {
        githubStyle = {color:"#8C8C8C"}
    }


    return(
        <ul className = "contactOptions">
            <li className = "contactOptionsItems">
                <a target = "_blank" rel="noreferrer" href = "https://www.linkedin.com/in/francisco-matos-21b28685/">
                    <FontAwesomeIcon className="icons" onMouseEnter={() => setHoverLinkedIn(!hoverLinkedIn)}  onMouseLeave={() => setHoverLinkedIn(!hoverLinkedIn)} style={linkedinStyle} icon={faLinkedin} />
                </a>
            </li>
            <li className = "contactOptionsItems">
                <a target = "_blank" rel="noreferrer" href = "https://github.com/fsmatos">
                    <FontAwesomeIcon className="icons"  onMouseEnter={() => setHoverGitHub(!hoverGitHub)}  onMouseLeave={() => setHoverGitHub(!hoverGitHub)} style={githubStyle} icon={faGithub} />
                </a>
            </li>
        </ul>
    )
}