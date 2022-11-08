import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = useLoaderData()
    console.log(services)
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service=> <ServicesCard key={service._id} service={service}></ServicesCard>)
            }
        </div>
    );
};

export default Services;