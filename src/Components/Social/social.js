import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { projectsSelector } from '../../Features/AllProjects/allProjectsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import './social.css';

export const Social = () => {
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
        <ul className = "contactOptions">
            <li className = "contactOptionsItems">
                <a target = "_blank" rel="noreferrer" href = "https://www.behance.net/franciscosmatos">
                    <FontAwesomeIcon className="icons" onMouseEnter={() => setHoverBehance(!hoverBehance)}  onMouseLeave={() => setHoverBehance(!hoverBehance)} style={behanceStyle} icon={faBehance} />
                </a>
            </li>
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