import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';

export const Card = (props) => {
    const {id, title, brief, tools} = props;
    console.log(title)
    return(
        <Link to={'/'+id} className='project-card'>
            <h3>{title}</h3>
            <p>{brief}</p>
            <ul>
                {tools.map((tool, key) => <li key={key}>{tool}</li>)}
            </ul>
        </Link>
    )
}