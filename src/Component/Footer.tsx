import React from 'react';
import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className='border-t mt-22'>

            <div className='max-w-6xl mx-auto px-6 pt-16'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

                    <div className='grid gap-4'>
                        <img
                            src={logo}
                            alt=""
                            className='w-32'
                        />
                        <p className='text-sm text-gray-500 max-w-sm'>
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className='flex gap-5 text-sm font-medium'>
                            <h3 className='hover:text-pink-500 cursor-pointer'>
                                GitHub
                            </h3>

                            <h3 className='hover:text-pink-500 cursor-pointer'>
                                Twitter
                            </h3>

                            <h3 className='hover:text-pink-500 cursor-pointer'>
                                LinkedIn
                            </h3>
                        </div>

                    </div>


                    <div>

                        <h1 className='font-semibold text-sm mb-5'>
                            PRODUCT
                        </h1>

                        <ul className='grid gap-3 text-sm text-gray-500'>

                            <li className='hover:text-black cursor-pointer'>
                                Home
                            </li>

                            <li className='hover:text-black cursor-pointer'>
                                Technologies
                            </li>

                            <li className='hover:text-black cursor-pointer'>
                                Projects
                            </li>

                        </ul>

                    </div>


                    <div>

                        <h1 className='font-semibold text-sm mb-5'>
                            COMPANY
                        </h1>

                        <ul className='grid gap-3 text-sm text-gray-500'>

                            <li className='hover:text-black cursor-pointer'>
                                About
                            </li>

                            <li className='hover:text-black cursor-pointer'>
                                Contact
                            </li>

                            <li className='hover:text-black cursor-pointer'>
                                Careers
                            </li>

                        </ul>

                    </div>


                    <div>

                        <h1 className='font-semibold text-sm mb-5'>
                            LEGAL
                        </h1>

                        <ul className='grid gap-3 text-sm text-gray-500'>

                            <li className='hover:text-black cursor-pointer'>
                                Privacy Policy
                            </li>

                            <li className='hover:text-black cursor-pointer'>
                                Terms of Service
                            </li>

                        </ul>

                    </div>

                </div>

                <div className='border-t mt-14 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-400'>

                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className='flex gap-6'>

                        <p className='hover:text-black cursor-pointer'>
                            Privacy
                        </p>

                        <p className='hover:text-black cursor-pointer'>
                            Terms
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;