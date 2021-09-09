import React from 'react';
import './About.css';

function About() {

    return (
        <div className='about__page'>
            <h1 className='about__title'>About</h1>
            <img 
                className='main__bild'
                src="/images/Profilbild.jpg"
                alt=""
             />
            <p className='about__text'>
                Hi, ich bin Sebastian und Schüler der 9. Klasse an einer bayrischen Realschule.
            </p>
            <p className='about__text'>
            Ich liebe Sport und alles was mit Technik zu tun hat.
            </p>
            <h2 className='second__title'>Kompetenzen</h2>
            <li className='about__list'>Designbibliotheken</li>
            <li className='about__list'>Lieferung hochwertiger und moderner Produkte</li>
            <li className='about__list'>Toolset: Html, Css, Javascript, Reactjs</li>
            <h2 className='second__title'>Kontakt</h2>
            <p className='about__text'>
            Bei Fragen oder Anregungen können Sie mir gerne  <a className='link' href="mailto:sfritzsche148@gmail.com">eine E-Mail schreiben.</a>
            </p>
            <p className='about__linkedin'>
                Oder schreiben sie mir eine Naricht bei  <a className='link' href="////www.linkedin.com/in/sebastian-fritzsche-1393281b1/">LinkedIn.</a>
             </p>
             <p className='top'></p>
        </div>
    )
}

export default About;