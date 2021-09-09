import React from 'react';
import HeroSection from '../HeroSection';
import { homeObjThree } from './Data';

function Home() {
    return (
        <>
            <h1 className='welcome__back'>WELCOME</h1>
            <HeroSection {...homeObjThree} />

        </>
    )
}

export default Home;
