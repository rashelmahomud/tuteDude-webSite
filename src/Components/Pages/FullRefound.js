import React from 'react';
import banner from '../../assect/fsd.png'

const FullRefound = () => {
    return (
        <div className='lg:px-24 px-5'>
            <div>
                <h1 className='text-4xl my-10 p-3 rounded font-bold shadow text-fuchsia-600'>An IIT Delhi Alamin Initive</h1>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className='text-left '>
                    <p className='font-bold text-fuchsia-600 text-2xl'>The Only Programme With </p>
                    <h1 className='text-5xl font-bold my-3 text-fuchsia-800'>FULL</h1>
                    <h2 className='text-5xl font-bold text-fuchsia-800'>REFOUND</h2>
                    <p className='my-3 font-bold text-fuchsia-600'>On Course Complete</p>

                    <button className="btn btn-outline rounded-none lg:mr-5 bg-violet-500 text-white bg-gradient-to-r from-violet-700 to-violet-400">Know HOW?</button>

                </div>

                <div>
                    <img className='' src={banner} alt='side-baner' />
                </div>
            </div>
            <div className='mt-10'>
                <button className="btn btn-outline rounded-none lg:mr-5 rounded border-2 border-fuchsia-800">How does it Work?</button>

            </div>

        </div>
    );
};

export default FullRefound;