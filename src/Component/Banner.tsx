import React from 'react';
import banner from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-4 container mx-auto '>

            <div className = 'max-w-[500px]'>
                <div>
                <h1 className='text-5xl font-bold'>Build Your Ideal</h1>
                <h1 className='text-5xl font-bold leading-tight bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent'>Development Stack</h1>
                </div>

                <div className='my-5'>
                    <p className='text-slate-600 text-lg'>Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that fits your next project.</p>
                </div>

                <div className='mt-5 flex gap-4'>
                    <button className="btn btn-secondary rounded-lg bg-gradient-to-r from-orange-500 to-pink-500">Explore Technologies</button>
                    <button className="btn rounded-lg">Learn More</button>
                </div>


            </div>

            <div>
                
            <img src={banner} alt="Banner" />
            </div>

            
        </div>
    );
};

export default Banner;