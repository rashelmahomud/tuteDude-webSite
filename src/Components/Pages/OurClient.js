import React from 'react';
import CountUp from 'react-countup';

const OurClient = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 bg-fuchsia-400 lg:px-48 p-10'>
            <div className='bg-gradient-to-r from-slate-100 to-gray-300 p-5 rounded-md'>
                <h1 className='text-3xl font-bold text-fuchsia-700'><CountUp delay={2} end={21} /></h1>
                <h3 className='text-fuchsia-500 font-bold'>courses</h3>
            </div>
            <div className='bg-gradient-to-r from-slate-100 to-gray-300 p-5 rounded-md'>
                <h1 className='text-3xl font-bold text-fuchsia-700'><CountUp delay={2} end={200} />+</h1>
                <h3 className='text-fuchsia-500 font-bold'> hours content</h3>
            </div>
            <div className='bg-gradient-to-r from-slate-100 to-gray-300 p-5 rounded-md'>
                <h1 className='text-3xl font-bold text-fuchsia-700'><CountUp delay={1} end={700} />+</h1>
                <h3 className='text-fuchsia-500 font-bold'>Students doubts solved</h3>
            </div>

            <div className='bg-gradient-to-r from-slate-100 to-gray-300 p-5 rounded-md'>
                <h1 className='text-3xl font-bold text-fuchsia-700'><CountUp delay={1} end={456} />$</h1>
                <h3 className='text-fuchsia-500 font-bold'>return advantage</h3>
            </div>
            <div className='bg-gradient-to-r from-slate-100 to-gray-300 p-5 rounded-md'>
                <h1 className='text-3xl'>Highly Skilled &</h1>
                <h3 className='text-fuchsia-500 font-bold'>Structured course</h3>
            </div>
            <div className='bg-gradient-to-r from-slate-100 to-gray-300 p-5 rounded-md'>
                <h1 className='text-3xl font-bold text-fuchsia-700'><CountUp delay={2} end={7} /> Min</h1>
                <h3 className='text-fuchsia-500 font-bold'>doubt clearance</h3>
            </div>

        </div>
    );
};

export default OurClient;