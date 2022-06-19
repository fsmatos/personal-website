import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setWhere } from '../../Features/AllProjects/allProjectsSlice';
import './card.css'
import { Link } from 'react-router-dom';

export const Card = (props) => {
    const dispatch = useDispatch();
    const {id, title, brief, description, image} = props;
    return(
        <div className='project-card'>
            <Link to={'/'+id} onClick={() => dispatch(setWhere(id))} className='card-image'>
                <img src={image} />
            </Link>
            <div className='card-info'>
                <h1>{brief}</h1>
                <p>{description}</p>
                <Link to={'/'+id} onClick={() => dispatch(setWhere(id))}>
                    <button className='card-button'>SEE PROJECT</button>
                </Link>                
            </div>
        </div>
    )
}