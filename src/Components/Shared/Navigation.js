import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assect/logo.png'
const Navigation = () => {

    const naivations = <>

        <li><Link to='/programs'>Explor-Programs</Link></li>
        <li><Link to='/refoud'>Refoud-Advantag</Link></li>
        <li><Link to='/about'>About-us</Link></li>

    </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 w-52 font-sans text-violet-500">
                        {naivations}
                    </ul>
                </div>
                <Link to='/'><img className='w-32 ml-5' src={logo} alt='img' /></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-sans text-violet-800 font-bold">

                    {naivations}
                </ul>
            </div>
            <div className="navbar-end">

                <button className="btn btn-outline rounded-none lg:mr-5">Login</button>
                <button className="btn btn-outline rounded-none lg:mr-5 bg-violet-800 font-bold text-white bg-gradient-to-r from-violet-300 to-violet-700">Sign Up</button>
            </div>
        </div>
    );
};

export default Navigation;