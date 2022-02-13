import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart, link
}) {
    return (
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
           <div className="container">
               <div className="row home__hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description} <Link to={link} className="hero__link">hier</Link></p>
                    </div>
                    </div>
                    <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img" />
                        </div>
                    </div>
               </div>
           </div>
        </div>
    );
}

export default HeroSection;
