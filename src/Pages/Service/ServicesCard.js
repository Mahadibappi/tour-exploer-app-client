import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const {_id,title,img,price,description} = service
    return (

    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
        <h2 className="card-title">{ title}</h2>
        <h2 className="card-title">Price: ${ price}</h2>
        <p>{ description.slice(0,100)+'...'}</p>
        <div className="card-actions">
        <Link to={`/services/${_id}`}>
        <button className="btn btn-primary">See Details</button>
         </Link>
    </div>
    </div>   
    </div>
            
            
    );
};

export default ServicesCard;