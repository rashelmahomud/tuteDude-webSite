import React from 'react';

const FullRefound = () => {
    return (
        <div className='lg:px-24 px-5'>
            <div>
                <h1 className='text-4xl my-10 p-3 rounded font-bold shadow text-fuchsia-600'>An IIT Delhi Alamin Initive</h1>
            </div>

            <div className='grid grid-cols-2'>
                <div className='text-left '>
                    <p className='font-bold text-fuchsia-600'>The Only Programme With </p>
                    <h1 className='text-4xl font-bold my-2 text-fuchsia-800'>FULL</h1>
                    <h2 className='text-4xl font-bold text-fuchsia-800'>REFOUND</h2>
                    <p className='my-2 font-bold text-fuchsia-600'>On Course Complete</p>

                    <button className="btn btn-outline rounded-none lg:mr-5 bg-violet-500 text-white bg-gradient-to-r from-violet-700 to-violet-400">Know HOW?</button>

                </div>

                <div>hi</div>
            </div>
            <div className='mt-10'>
                <button className="btn btn-outline rounded-none lg:mr-5 bg-violet-500 text-white bg-gradient-to-r from-violet-700 to-violet-400">How does it Work?</button>

            </div>

        </div>
    );
};

export default FullRefound;