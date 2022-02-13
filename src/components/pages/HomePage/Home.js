import React from 'react';
import HeroSection from '../HeroSection';
import { homeObjOne, homeObjThree } from './Data';

function Home() {
    return (
        <>
            <h1 className='welcome__back'>WELCOME</h1>
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjOne}   />

        </>
    )
}

export default Home;
