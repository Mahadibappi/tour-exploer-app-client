import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
   
   const {title,img,price,hotel,description}= useLoaderData()
  
    return (
<div >
 <div className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl w-1/2" />
  </figure>
  <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">{ title}</h2>
        <h2 className="card-title">Price: ${ price}</h2>
        <h2 className="card-title">Hotel: { hotel}</h2>
        <p className='w-1/2'>{ description}</p>
    </div>   
    </div>
        <div >
             <h3 className='text-4xl text-center mt-8'>Review Services</h3>
         <form className='flex justify-center'>
            
            <div className='grid grid-cols-1 gap-4 mt-3 mx-auto'>
                <input type="text" name='firstName' placeholder="Your Name" className="input input-bordered input-primary w-full" />
                <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered input-primary w-full" required />
                <input type="text" name='email' placeholder="Your email" className="input input-bordered input-primary w-full" readOnly />
                <div>
                    <textarea name='message' className="textarea textarea-primary w-full" placeholder="Your Message"></textarea>
                    <input type="submit" value="Add review" className='mt-3 btn  btn-outline btn-success' />
                </div>
          </div>
        </form>
     </div>
   </div>
            
            
    );
};

export default Details;