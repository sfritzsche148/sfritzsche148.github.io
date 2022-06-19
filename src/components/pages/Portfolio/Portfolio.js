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
                <h1><a className='link' href='https://sfritzsche-tictactoe.netlify.app/'>TicTacToe</a></h1>
                <p>Das ist eine React App mit styled Components</p>
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