import React from 'react';

const Banner = () => {
    return (
        <div className="hero  min-h-screen mb-5 rounded" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Adventure Begins Here</h1>
      <p className="mb-5">Choose from thousands of organised adventures in this country that help you more adventure and amazing tour experience.</p>
      <button className="btn btn-outline btn-accent">Explore Tour</button>
    </div>
  </div>
</div>
    );
};

export default Banner;