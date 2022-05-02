import React from 'react';
import './card.css'

const Card = () => {
    return(
        <div className = "project">
            <div className = "projectInfo">
                <h3 className = "projectTitle"></h3>
                <h4 className = "projectDate"></h4>
                <p className = "projectBrief"></p>
                <ul className = "projectTools">
                    <li></li>
                </ul>
            </div>
        </div>
    )
}