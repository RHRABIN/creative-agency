import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "./logoSlider.css";
import { Pagination } from "swiper";

import service1 from '../../assests/images/carousel-1.png'
import service2 from '../../assests/images/carousel-2.png'
import service3 from '../../assests/images/carousel-3.png'
import service4 from '../../assests/images/carousel-4.png'
import service5 from '../../assests/images/carousel-5.png'
const works = [service1, service2, service3, service4, service5]
const OurWorks = () => {
    return (
        <div style={{ backgroundColor: '#171130' }} className='min-h-[524px] mt-20'>
            <h1 className='text-white text-xl lg:text-2xl text-center py-20'>Here are some of <span className='text-secondary '>our works</span></h1>
            <>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={5}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >

                    {
                        works.map(work => <SwiperSlide className=''>
                            <img className="" src={work} alt="" />
                        </SwiperSlide>)
                    }

                </Swiper>
            </>
        </div>
    );
};

export default OurWorks;