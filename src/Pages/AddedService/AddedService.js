import React, { useEffect, useState } from 'react';

const AddedService = () => {
    const [add, setAdd] = useState()
    useEffect(() => {
        fetch('https://travelers-server.vercel.app/added')
            .then(res => res.json())
            .then(data => setAdd(data))
    }, [])
    return (
        <div>
            <div className='my-10'>
                <h3 className='text-5xl text-bold text-center text-teal-400'>Added service</h3>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body ">
                    {add?.map(service => (
                        <>
                            <h2 className="card-title text-4xl">{service.serviceName}</h2>
                            <p className='text-1xl'>{service.name}</p>
                            <p>{service.message}</p>
                        </>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default AddedService;