import React from 'react';
import './Header.css';
import frame from '../../assests/images/logos/Frame.png'
const Header = () => {
    return (
        <div className='relative'>
            <div className='header-container h-[540px]'>
                <div class=" w-full ">
                    <div class="h-[480px] flex flex-col justify-center items-center lg:justify-evenly md:flex-row lg:flex-row ">
                        <div className=''>
                            <h1 class="text-2xl lg:text-4xl font-bold max-w-sm">Let’s Grow Your
                                Brand To The
                                Next Level</h1>
                            <p class="py-2 lg:py-6 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <button class="btn btn-primary">Hire Us</button>
                        </div>
                        <img src={frame} class="w-[20rem]  lg:w-[24rem]  rounded-lg " />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;