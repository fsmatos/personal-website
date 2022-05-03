import React from 'react';
import './footer.css';

export const Footer = () => {
    return (
        <div className="foot">
            <p className = "footerName"> © 2022 Francisco Matos</p>
            <ul className = "footerMenu">
                <li className = "footerItems">
                    <a target = "_blank" rel="noreferrer" href = "https://www.behance.net/franciscosmatos">Behance</a>
                </li>
                <li className = "footerItems">
                    <a target = "_blank" rel="noreferrer" href = "https://www.linkedin.com/in/francisco-matos-21b28685/">LinkedIn</a>
                </li>
                <li className = "footerItems"> 
                    <a target = "_blank" rel="noreferrer" href = "https://github.com/fsmatos">GitHub</a>
                </li>
            </ul>
        </div>
    )
}