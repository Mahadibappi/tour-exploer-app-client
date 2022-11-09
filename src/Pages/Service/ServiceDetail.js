import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
   
   const {title,img,price,hotel,description}= useLoaderData()
  
    return (

 <div className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
        <h2 className="card-title">{ title}</h2>
        <h2 className="card-title">Price: ${ price}</h2>
        <h2 className="card-title">Hotel: ${ hotel}</h2>
        <p className='w-1/2'>{ description}</p>
    </div>   
    </div>
  
            
            
    );
};

export default ServiceDetail;