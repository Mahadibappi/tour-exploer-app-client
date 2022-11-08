import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [card, serCard] = useState()
    useEffect(() => {
        fetch("http://localhost:5000/services")
         .then(res => res.json())
        .then(data=> serCard(data))
    },[])
    return (
        <div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {card?.slice(0, 3).map(card => <ServiceCard key={card._id} card={card}></ServiceCard>)}
            
            </div>
            <div className='mt-5 flex justify-center'>
                <Link to={'services'}>
                    <button className="btn btn-success ">See all</button>
                </Link>
            </div>
        </div>
        
    );
};

export default Service;