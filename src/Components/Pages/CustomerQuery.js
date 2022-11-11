import React from 'react';

const CustomerQuery = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-10'>Have Any Query</h1>
            <div className='grid grid-cols-2 lg:px-20 gap-10 my-10'>
                <div className='flex mx-auto'>
                    <h2 className='text-2xl font-bold bg-gray-300 '><span className='lg:p-20 p-5'>Already Asked Query</span>   <button className="btn btn-outline rounded-none "><i class="fa-solid fa-arrow-right mx-5 text-2xl"></i></button>
                    </h2>
                </div>
                <div className='flex mx-auto'>
                    <h2 className='text-2xl font-bold bg-gray-300 '><span className='lg:p-20 p-5'>Already Asked Query</span>   <button className="btn btn-outline rounded-none "><i class="fa-solid fa-arrow-right mx-5 text-2xl"></i></button>
                    </h2>
                </div>
                <div className='flex mx-auto'>
                    <h2 className='text-2xl font-bold bg-gray-300 '><span className='lg:p-20 p-5'>Already Asked Query</span>   <button className="btn btn-outline rounded-none "><i class="fa-solid fa-arrow-right mx-5 text-2xl"></i></button>
                    </h2>
                </div>
                <div className='flex mx-auto'>
                    <h2 className='text-2xl font-bold bg-gray-300 '><span className='lg:p-20 p-5'>Already Asked Query</span>   <button className="btn btn-outline rounded-none "><i class="fa-solid fa-arrow-right mx-5 text-2xl"></i></button>
                    </h2>
                </div>
            </div>

            <div className='text-center my-10'>
            {/* <i class="fa-solid fa-magnifying-glass mt-10 absolute"></i> */}
                <label class="block">
                
                    <input class="placeholder:italic relative placeholder:text-slate-400 block bg-white w-1/2 mx-auto border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                     
                </label>
               
            </div>

        </div>
    );
};

export default CustomerQuery;