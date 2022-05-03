import React from 'react';
import './greetings.css';

export const Greetings = () => {
    return(
        <div>
            <h1>Hi, my name is <strong>Francisco Matos.</strong></h1>
            <p>I'm a <strong>front-end developer</strong> based in Portugal. I started my journey in 2018 and recently finished my degree in Communication and Multimedia Design.
            <br/>I divide my free time between running and watching a good movie.</p>
            <ul className = "contactOptions">
                <li className = "contactOptionsItems">
                    <a target = "_blank" rel="noreferrer" href = "https://www.behance.net/franciscosmatos">Behance</a>
                </li>
                <li className = "contactOptionsItems">
                    <a target = "_blank" rel="noreferrer" href = "https://www.linkedin.com/in/francisco-matos-21b28685/">LinkedIn</a>
                </li>
                <li className = "contactOptionsItems">
                    <a target = "_blank" rel="noreferrer" href = "https://github.com/fsmatos">Github</a>
                </li>
            </ul>
        </div>
    )
}