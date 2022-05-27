import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import './social.css';

export const Social = () => {

    return(
        <ul className = "contactOptions">
            <li className = "contactOptionsItems">
                <a target = "_blank" rel="noreferrer" href = "https://www.linkedin.com/in/francisco-matos-21b28685/">
                    <FontAwesomeIcon className="social-icons" icon={faLinkedin} />
                </a>
            </li>
            <li className = "contactOptionsItems">
                <a target = "_blank" rel="noreferrer" href = "https://github.com/fsmatos">
                    <FontAwesomeIcon className="social-icons" icon={faGithub} />
                </a>
            </li>
        </ul>
    )
}