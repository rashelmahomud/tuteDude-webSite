import React from 'react';

const Review = ({ review }) => {

    const { name, img, description, address } = review;

    return (
        <div>

            <div className="card w-96  bg-base-300 shadow-xl p-5">
                <div className='flex'>
                    <figure className="px-10  w-36">
                        <img src={img} alt="Shoes" className="rounded-xl rounded-full mx-3 " />

                    </figure>
                    <div className=''>
                        <p className='w-full text-sm'><i className="fa-solid fa-house p-2 text-blue-500"></i>{address}</p>
                    </div>

                </div>
                <div className="card-body">

                    <p className='text-left'>{description}</p>

                </div>
           
            </div>


        </div>
    );
};

export default Review;