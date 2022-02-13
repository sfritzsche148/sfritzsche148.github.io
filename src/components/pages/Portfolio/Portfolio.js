import React from 'react';
import './Portfolio.css';

import { Link } from 'react-router-dom';

function Portfolio() {

    return (
        <div className='portfolio__page'>
           <h1 className='portfolio__title'>Portfolio</h1>
           <section className='portfolio__link'>
           <Link to='/TicTacToe'>
                <a className='portfolio__link'>Tic Tac Toe</a>
           </Link>
           </section>
        </div>
    )
}

export default Portfolio;
