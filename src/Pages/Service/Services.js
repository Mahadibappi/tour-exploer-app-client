import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import ServicesCard from './ServicesCard';

const Services = () => {
    const { loading } = useContext(AuthContext)
    const services = useLoaderData()
    if (loading) {
        return <button className="btn loading">loading</button>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
            }
        </div>
    );
};

export default Services;