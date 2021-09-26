import React from 'react';
import './About.css';

function About() {

    return (
        <div className='about__page'>
            <h1 className='about__title'>About</h1>
            <img 
                className='main__bild'
                src="/images/Profilbild_3.jpg"
                alt=""
             />
            <p className='text'>
                Hi, ich bin Sebastian
            </p>
            <p className='text'>und Schüler der 9. Klasse</p>
            <p className='description__text'>an einer bayrischen Realschule.</p>
            <p className='text'>
            Ich liebe Sport
            </p>
            <p className='text'>& alles was mit Technik zu tun hat.</p>
            <h2 className='second__title'>Kompetenzen</h2>
            <li className='about__list'>Designbibliotheken</li>
            <li className='about__list'>Lieferung hochwertiger und moderner Produkte</li>
            <li className='about__list'>Toolset: Html, Css, Javascript, Reactjs</li>
            <h2 className='second__title'>Hobbies</h2>
            <h3 className='third__title'>programmieren</h3>
            <img 
                className='programm__bild'
                src="/images/programmieren.jpg"
                alt="hund"
             />
            <h3 className='third__title'>mein Hund</h3>
            <img 
                className='hobbie__bild'
                src="/images/rocky.jpg"
                alt="hund"
             />
             <h3 className="third__title">Tennis</h3>
             <img 
                className='hobbie__bild'
                src="/images/tennis.jpg"
                alt="tennis"
             />
            <h3 className='third__title'>Mountainbiken</h3>
            <img 
                className='hobbie__bild'
                src="/images/bike.jpg"
                alt="bike"
             />
             <h3 className='third__title'>Reisen</h3>
             <img 
                className='hobbie__bild'
                src="/images/strand.jpg"
                alt="strand"
             />
            <h2 className='second__title'>Kontakt</h2>
            <p className='about__text'>
            Bei Fragen oder Anregungen können Sie mir gerne  <a className='link' href="mailto:sfritzsche148@gmail.com">eine E-Mail schreiben.</a>
            </p>
            <p className='about__linkedin'>
                Oder schreiben sie mir eine Nachricht bei  <a className='link' href="////www.linkedin.com/in/sebastian-fritzsche-1393281b1/">LinkedIn.</a>
             </p>
             <p className='top'></p>
        </div>
    )
}

export default About;