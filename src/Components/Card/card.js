import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setWhere } from '../../Features/AllProjects/allProjectsSlice';
import './card.css'
import { Link } from 'react-router-dom';

export const Card = (props) => {
    const dispatch = useDispatch();
    const {id, title, brief, tools, image, color} = props;
    return(
        <Link to={'/'+id} onClick={() => dispatch(setWhere(id))} className='project-card'>
            <div className='card-image' style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
            <div className='card-info'>
                <h1>{title}</h1>
                <p>{brief}</p>
            </div>
            {/*{<style>{`.project-card {background-image: url(${image}); background-repeat: no-repeat; background-size: cover; background-position:center}`}</style>}*/}
        </Link>
    )
}