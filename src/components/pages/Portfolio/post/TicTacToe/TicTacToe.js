import React from 'react';
import './tictactoe.css';

function TicTacToe() {
    return (
        <div className='tictactoe__page'>
            <h1 className='tictactoe__title'>Tic Tac Toe</h1>
            <img
                className='portfolio__bild'
                src="/images/tictactoe.jpg"
                alt=""
            />
            <p className='text'>Hier kommen sie zum <a className='link' href='//sfritzsche-tictactoe.netlify.app'>Spiel</a></p>
            <p className='text'>Die Web-App habe ich mit React programmiert.</p>
            <p className='text'>Um eine React App zu erstellen müssen sie <a className='higlighting'>npm create-react-app my-website</a> eingeben.</p>
            <p className='text'>Danach müssen sie <a className='higlighting'>cd my-website</a> eingeben um in den erstellten Ordner zu gelangen.</p>
            <p className='text'>Jetzt müssen sie <a className='higlighting'>code .</a> in der Kommandozeile eingeben um den Editor zu öffnen.</p>
            <p className='text'>Danach müssen sie <a className='higlighting'>npm start</a> eingeben und dann öffnet sich ein Fenster im Browser in dem Sie den Fortschritt ihrer Webseite verfolgen können.</p>
        </div>
    )
}

export default TicTacToe;
