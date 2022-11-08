import React from 'react';

const Adventure = () => {
    return (
    <div className='my-10 bg-slate-600'>
    <h2 className='text-7xl text-center text-teal-500 text-bold  p-5'>Adventure for everyone</h2>
    <div className='grid grid-cols-3 p-20  rounded'> 
        
    <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://cdn.tourradar.com/s3/content-pages/391/1040x812/6C8RqH.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Family</h2>
    <p>Enjoy Best time with family</p>
    <div className="card-actions justify-end">
      <button className="btn outline-secondary">Explore</button>
    </div>
  </div>
</div>
    <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://cdn.tourradar.com/s3/content-pages/391/438x292/vplOao.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Group tour</h2>
    <p>Enjoy the beauty of nature</p>
    <div className="card-actions justify-end">
      <button className="btn outline-secondary">Explore</button>
    </div>
  </div>
</div>
    <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://cdn.tourradar.com/s3/content-pages/391/1040x812/Hnc8Zp.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Friends</h2>
    <p>Enjoy quality time with Friends</p>
    <div className="card-actions justify-end">
      <button className="btn outline-secondary">Explore</button>
    </div>
  </div>
</div>
</div>
</div>
    );
};

export default Adventure;