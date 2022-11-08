import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
const {title,img,price,hotel,description}= useLoaderData()
  
 return (
<div className='grid md:grid-cols-2'>
 <div className="card w-10/12 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
        <h2 className="card-title">{ title}</h2>
        <h2 className="card-title">Price: ${ price}</h2>
        <h2 className="card-title">Hotel: ${ hotel}</h2>
        <p>{ description}</p>
    </div>   
    </div>
    <section>Review</section>
   </div>
            
            
    );
};

export default ServiceDetails;