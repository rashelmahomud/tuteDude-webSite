import React from 'react';
import offer from '../../assect/discount.png'

const OurOffers = () => {
    return (
        <div>
            <div className='my-10 bg-blue-500 grid lg:grid-cols-2 grid-cols-1  bg-gradient-to-r to-violet-400 from-fuchsia-700 lg:p-16 rounded '>

                <div className='p-2'>
                    <img className='rounded mx-auto' src={offer} alt='pc-men' />
                </div>
                <div className='text-left lg:px-20 p-3'>
                    <span className='text-3xl text-white font-bold bg-violet-400 p-2 rounded '>TodeDode Money Back Offers</span> <br />

                    <h3 className='text-3xl text-white font-bold p-3'>Money Back reward</h3>
                    <p className='text-white font-bold mt-5'>You pay ZERO on completing Tutedude online certification course, become elligible for Tutedude REFUND PROGRAMME, and get Tutedude Certified at the cost of 0 INR</p>
                    <div className='mt-10'>
                        <button className="btn btn-outline bg-white rounded-none lg:mr-5 rounded border-2 border-fuchsia-800">Know MORE</button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default OurOffers;