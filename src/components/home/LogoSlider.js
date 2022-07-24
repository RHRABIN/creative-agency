import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "./logoSlider.css";

import logo1 from '../../assests/images/logos/airbnb.png'
import logo2 from '../../assests/images/logos/netflix.png'
import logo3 from '../../assests/images/logos/google.png'
import logo4 from '../../assests/images/logos/netflix.png'
import logo5 from '../../assests/images/logos/slack.png'
import logo6 from '../../assests/images/logos/uber.png'

// import required modules
import { Pagination } from "swiper";
const LogoSlider = () => {
    return (
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
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img className="w-24" src={logo1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="w-24" src={logo2} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="w-24" src={logo3} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="w-24" src={logo4} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="w-24" src={logo5} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className="w-24" src={logo6} alt="" />
                </SwiperSlide>



            </Swiper>
        </>
    );
};

export default LogoSlider;