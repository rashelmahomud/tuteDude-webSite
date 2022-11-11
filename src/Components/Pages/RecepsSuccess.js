import React from 'react';
import laptop from '../../assect/laptop.png'
import icon from '../../assect/icon.png'

const RecepsSuccess = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-5 text-fuchsia-800'>The TuteDude Reacipe of Success</h1>
            <div className='lg:px-24 px-2'>
                <div className='my-10 bg-blue-500 grid lg:grid-cols-2 grid-cols-1  bg-gradient-to-r from-violet-700 to-fuchsia-400 lg:p-16 rounded '>

                    <div className='p-2'>
                        <img className=' rounded mx-auto' src={laptop} alt='pc-men' />
                    </div>
                    <div className='text-left p-3'>
                        <div className='flex'>
                            <img className='w-10' src={icon} alt='img' />
                            <h2 className='text-2xl text-white ml-5'>Brighten up Yourself with some Latest Skills</h2>
                        </div>
                        <div className='flex my-3'>
                            <img className='w-10' src={icon} alt='img' />
                            <h2 className='text-2xl text-white ml-5'>Brighten up Yourself with some Latest Skills</h2>
                        </div>
                        <div className='flex my-3'>
                            <img className='w-10' src={icon} alt='img' />
                            <h2 className='text-2xl text-white ml-5'>Brighten up Yourself with some Latest Skills</h2>
                        </div>
                        <div className='flex my-3'>
                            <img className='w-10' src={icon} alt='img' />
                            <h2 className='text-2xl text-white ml-5'>Brighten up Yourself with some Latest Skills</h2>
                        </div>
                        <div className='flex my-3'>
                            <img className='w-10' src={icon} alt='img' />
                            <h2 className='text-2xl text-white ml-5'>Brighten up Yourself with some Latest Skills</h2>
                        </div>
                        <div className='flex'>
                            <img className='w-10' src={icon} alt='img' />
                            <h2 className='text-2xl text-white ml-5'>Brighten up Yourself with some Latest Skills</h2>
                        </div>

                       

                        <div className='mt-20'>
                            <button className="btn btn-outline bg-white rounded-none lg:mr-5 rounded border-2 border-fuchsia-800">Explore Programs</button>

                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default RecepsSuccess;