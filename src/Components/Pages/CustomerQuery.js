import React from 'react';

const CustomerQuery = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-10'>Have Any Query</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:px-20 lg:gap-10 gap-5 m-2 my-10'>
                <div className='flex mx-auto'>
                    <h2 className='lg:text-2xl font-bold bg-gradient-to-r to-violet-400 from-fuchsia-700 '><span className='lg:p-20 p-5 text-white'>Already Asked Query</span>   <button className="btn btn-outline rounded-none "><i class="fa-solid fa-arrow-right mx-5 text-2xl text-white"></i></button>
                    </h2>
                </div>
                <div className='flex mx-auto'>
                    <h2 className='lg:text-2xl font-bold bg-gradient-to-r to-violet-400 from-fuchsia-700 '><span className='lg:p-20 p-5 text-white'>Already Asked Query</span>   <button className="btn btn-outline rounded-none "><i class="fa-solid fa-arrow-right mx-5 text-2xl text-white"></i></button>
                    </h2>
                </div>
                <div className='flex mx-auto'>
                    <h2 className='lg:text-2xl font-bold bg-gradient-to-r to-violet-400 from-fuchsia-700 '><span className='lg:p-20 p-5 text-white'>Already Asked Query</span>   <button className="btn btn-outline rounded-none "><i class="fa-solid fa-arrow-right mx-5 text-2xl text-white"></i></button>
                    </h2>
                </div>
                <div className='flex mx-auto'>
                    <h2 className='lg:text-2xl font-bold bg-gradient-to-r to-violet-400 from-fuchsia-700 '><span className='lg:p-20 p-5 text-white'>Already Asked Query</span>   <button className="btn btn-outline rounded-none "><i class="fa-solid fa-arrow-right mx-5 text-2xl text-white"></i></button>
                    </h2>
                </div>
                
            </div>

            <div className='text-center my-10'>
                <label class="block">
                    <input class="placeholder:italic relative placeholder:text-slate-400 block bg-white w-1/2 mx-auto border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                </label>

            </div>

        </div>
    );
};

export default CustomerQuery;