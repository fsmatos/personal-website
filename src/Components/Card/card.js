import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setWhere } from '../../Features/AllProjects/allProjectsSlice';
import './card.css'
import { Link } from 'react-router-dom';

export const Card = (props) => {
    const dispatch = useDispatch();
    const {id, title, description, image} = props;
    return(
        <Link to={'/'+id} onClick={() => dispatch(setWhere(id))} className='project-card'>
            <div className='card-image'>
                <img src={image} />
            </div>
            <div className='card-info'>
                <h1>{title}</h1>
                <p>{description}</p>
                <button className='card-button'>SEE PROJECT</button>
            </div>
        </Link>
    )
}