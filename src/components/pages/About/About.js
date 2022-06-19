import React from 'react';
import './About.css';
import { FaHtml5, FaReact, FaWindows, FaUbuntu } from 'react-icons/fa';
import { DiCss3, DiMysql } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';

function About() {

    return (
        <div className='about__page'>
            <h1 className='about__title'>About</h1>
            <img 
                className='main__bild'
                src="/images/Profilbild_3.jpg"
                alt=""
             />
             <div>
                <p className='text'>
                    Hi, ich bin Sebastian
                </p>
                <p className='text'>und Schüler der 9. Klasse</p>
                <p className='description__text'>an einer bayrischen Realschule.</p>
                <p className='text'>
                Ich liebe Sport
                </p>
                <p className='text'>& alles was mit Technik zu tun hat.</p>
            </div>
            <div className='skillset'>
            <h2 className='second__title'>Skillset</h2>
                <div className='skillsetlist'>
                    <ul>
                        <li>
                            <div className='skillsetcontent'>
                                <h3 className='third__title'>Frontend</h3>
                                <a className='skillicon' href="https://de.wikipedia.org/wiki/HTML5">
                                    <FaHtml5 />
                                </a>
                                <a className='skillicon' href="https://de.wikipedia.org/wiki/Cascading_Style_Sheets">
                                    <DiCss3 />
                                </a>
                                <a className='skillicon' href="https://de.wikipedia.org/wiki/JavaScript">
                                    <IoLogoJavascript />
                                </a>
                                <a className='skillicon' href="https://reactjs.org/">
                                    <FaReact />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className='skillsetcontent'>
                                <h3 className='third__title'>Betriebssysteme</h3>
                                <a className='skillicon' href="https://www.microsoft.com/de-de/windows?r=1">
                                    <FaWindows />
                                </a>
                                <a className='skillicon' href="https://ubuntu.com/">
                                    <FaUbuntu />
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className='skillsetcontent'>
                                <h3 className='third__title'>Sonstige</h3>
                                <a className='skillicon' href="https://www.mysql.com/de/">
                                    <DiMysql />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='hobbies'>
                <h2 className='second__title'>Hobbies</h2>
                <div className='hobbielist'>
                    <ul>
                        <li>
                            <h3 className='third__title'>programmieren</h3>
                            <img 
                                className='programm__bild'
                                src="/images/programmieren.jpg"
                                alt=""
                            />
                        </li>
                        <li>
                            <h3 className='third__title'>mein Hund</h3>
                            <img 
                                className='rocky__bild'
                                src="/images/rocky_farb.jpeg"
                                alt="hund"
                            />
                        </li>
                        <li>
                            <h3 className="third__title">Tennis</h3>
                            <img 
                                className='hobbie__bild'
                                src="/images/tennis.jpg"
                                alt="tennis"
                            />
                        </li>
                        <li>
                            <h3 className='third__title'>Mountainbiken</h3>
                            <img 
                                className='hobbie__bild'
                                src="/images/bike.jpg"
                                alt="bike"
                            />
                        </li>
                        <li>
                            <h3 className='third__title'>Reisen</h3>
                            <img 
                                className='hobbie__bild'
                                src="/images/strand.jpg"
                                alt="strand"
                            />
                        </li>
                    </ul>
                </div>
             </div>
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