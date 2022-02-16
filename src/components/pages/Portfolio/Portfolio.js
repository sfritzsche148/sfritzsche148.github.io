import React from 'react';
import './Portfolio.css';

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
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;