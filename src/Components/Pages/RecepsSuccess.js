import React from 'react';
import laptop from '../../assect/laptop.png'
import icon from '../../assect/icon.png'
import icon1 from '../../assect/icon/app (1).svg'
import icon2 from '../../assect/icon/app.svg'
import icon3 from '../../assect/icon/java.png'
import icon4 from '../../assect/icon/python.png'
import icon5 from '../../assect/icon/reactnative.svg'

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
                            <img className='w-10' src={icon5} alt='img' />
                            <h2 className='text-2xl text-white ml-5'>React up Yourself with some Latest Skills</h2>
                        </div>
                        <div className='flex my-3'>
                            <img className='w-10' src={icon2} alt='img' />
                            <h2 className='text-2xl text-white ml-5'>Brighten up Yourself with some Latest Skills</h2>
                        </div>
                        <div className='flex my-3'>
                            <img className='w-10' src={icon3} alt='img' />
                            <h2 className='text-2xl text-white ml-5'>Java up weself with some Latest Skills</h2>
                        </div>
                        <div className='flex my-3'>
                            <img className='w-10' src={icon4} alt='img' />
                            <h2 className='text-2xl text-white ml-5'>Brighten up HowSeft with some Latest Skills</h2>
                        </div>
                        <div className='flex'>
                            <img className='w-10' src={icon2} alt='img' />
                            <h2 className='text-2xl text-white ml-5'>Phone up WeSelf with some Latest Skills</h2>
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