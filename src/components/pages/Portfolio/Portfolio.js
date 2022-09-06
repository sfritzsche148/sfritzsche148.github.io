import React from 'react';
import './Portfolio.css';
import {  FaGithub } from 'react-icons/fa';

function Portfolio() {
  return (
    
    <div>
    
       <h1 className="portfolio-header">Portfolio</h1>
      <div className="portfolio-container">
        <div className="timeline">
          <ul>
            <li>
            <div className="timeline-content">
                <h1><a className='link' href='https://sfritzsche148.github.io/text-adventure_der-geisterwald/'>Text Adventure</a> 
                <a href="https://github.com/sfritzsche148/text-adventure_der-geisterwald" className='icon'>
                  <FaGithub />
                </a>
                </h1>
                <p>Ich habe ein Text Adventure mit HTML, Css und Javascript gebaut</p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1><a className='link' href='https://sfritzsche148.github.io/#/'>Portfolio</a> 
                <a href="https://github.com/sfritzsche148/sfritzsche148.github.io" className='icon'>
                  <FaGithub />
                </a>
                </h1>
                <p>Ich habe mein Portfolio mit React entwickelt. In diesem können sie etwas über mich erfahren.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;