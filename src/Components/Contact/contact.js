import React from 'react';
import './contact.css';

export const Contact = () => {
    return (
        <div className='contact-container'>
            <section className = "contact-intro">
                <h1>Do you have an interesting idea?</h1>
                <p>I will get back to you as soon as possible</p>
            </section>
            <section className='contact-detail'>
                <div className='page-title'>
                    <h1>Contact me</h1>
                    <p>Feel free to send an e-mail to <a href="mailto:francisco.simoes.matos@gmail.com" target="_blank" rel="noopener noreferrer"><b>francisco.simoes.matos@gmail.com</b></a></p>                </div>
            </section>
        </div>
    )
}