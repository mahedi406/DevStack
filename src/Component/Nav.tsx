import React from 'react';
import logo from '../assets/logo-text.png'
import hamburger from '../assets/hamburger.png'


const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">

            <div className='flex justify-between items-center p-4 container mx-auto'>
            <div>
            <img src={logo} alt="Logo"/>
            </div>

            <div className='hidden md:block'>
                <ul className='flex gap-4'>
                    <li className='hover:cursor-pointer hover:text-red-500'>Home</li>
                    <li className='hover:cursor-pointer hover:text-red-500'>Technologies</li>
                    <li className='hover:cursor-pointer hover:text-red-500'>Projects</li>
                    <li className='hover:cursor-pointer hover:text-red-500'>About</li>
                    <li className='hover:cursor-pointer hover:text-red-500'>Contact</li>
                    
                </ul>
            </div>

            <div className='flex gap-3'>
                <button className="btn rounded-full">Sign In</button>
                <button className="btn btn-active btn-error rounded-full ">Sign Up</button>
            </div>

             <div className="md:hidden text-2xl cursor-pointer">
                    <img src={hamburger} alt=""  className="w-8 h-8" />
                </div>


            </div>

        </nav>
    );
};

export default Nav;