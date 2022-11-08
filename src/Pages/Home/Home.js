import React from 'react';
import Adventure from '../Adventure/Adventure';
import Service from '../Service/Service';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Adventure></Adventure>
        </div>
    );
};

export default Home;