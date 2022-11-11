import React from 'react';
import pcMen from '../../assect/photoshop1.jpg'

const ExploreProgram = () => {
    return (
        <div className='lg:px-24 px-2'>
            <div className='my-10 bg-blue-500 grid lg:grid-cols-2 grid-cols-1  bg-gradient-to-r from-violet-700 to-fuchsia-400 lg:p-16 rounded '>

                <div className='text-left p-3'>
                    <h2 className='text-3xl text-white font-bold'>Brighten up Yourself with some Latest Skills</h2>
                    <p className='text-white font-bold my-2'>Learn any skill at your own pace with personal mentorship and immediate doubt clearing by your own dude Hello personal mentorship and immediate doubt clearing by your own dude</p>
                    <div className='mt-20'>
                        <button className="btn btn-outline bg-white rounded-none lg:mr-5 rounded border-2 border-fuchsia-800">Explore Programs</button>

                    </div>

                </div>
                <div className='p-2'>
                    <img className='w-72 rounded mx-auto' src={pcMen} alt='pc-men' />
                </div>
            </div>

        </div>

    );
};

export default ExploreProgram;