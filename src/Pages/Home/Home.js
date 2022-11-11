import React, { useEffect } from 'react';
import Adventure from '../Adventure/Adventure';
import Service from '../Service/Service';
import Support from '../Support/Support';
import Banner from './Banner';

const Home = () => {
    useEffect(() => {
        document.title = "Home"
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Adventure></Adventure>
            <Support></Support>
        </div>
    );
};

export default Home;