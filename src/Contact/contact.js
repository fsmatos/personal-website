import React from 'react';
import './contact.css';

export const Contact = () => {
    return (
        <section className = "contactInfo">
            <h1>Have an interesting idea?</h1>
            <p>Feel free to send an e-mail to <strong>francisco.simoes.matos@gmail.com</strong></p>
            <ul className = "contactOptions">
                <li className = "contactOptionsItems">
                    <a target = "_blank" href = "https://www.behance.net/franciscosmatos">Behance</a>
                </li>
                <li className = "contactOptionsItems">
                    <a target = "_blank" href = "https://www.linkedin.com/in/francisco-matos-21b28685/">LinkedIn</a>
                </li>
                <li className = "contactOptionsItems">
                    <a target = "_blank" href = "https://github.com/fsmatos">GitHub</a>
                </li>
            </ul>
        </section>
    )
}