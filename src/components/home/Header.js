import React from 'react';
import './Header.css';
import frame from '../../assests/images/logos/Frame.png'
const Header = () => {
    return (
        <div className=''>
            <div className='header-container px-2 lg:px-20 h-[470px] '>
                <div class=" w-full ">
                    <div class=" flex flex-col justify-center items-start lg:items-center lg:justify-between md:flex-row lg:flex-row ">
                        <div className='mt-6 lg:mt-16'>
                            <h1 class="text-2xl lg:text-4xl font-bold max-w-sm">Let’s Grow Your
                                Brand To The
                                Next Level</h1>
                            <p class="py-2 lg:py-6 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <button class="btn btn-primary">Hire Us</button>
                        </div>
                        <img src={frame} class="w-[16rem]  lg:w-[28rem]  rounded-lg mt-6 lg:mt-10" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;