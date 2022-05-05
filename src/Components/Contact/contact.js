import React from 'react';
import { Social } from '../Social/social';
import './contact.css';

export const Contact = () => {
    return (
        <section className = "contact-container">
            <h1>Have an interesting idea?</h1>
            <p>Feel free to send an e-mail to <strong>francisco.simoes.matos@gmail.com</strong></p>
            <Social />
        </section>
    )
}