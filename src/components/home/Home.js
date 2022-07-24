import React from 'react';
import Header from './Header';
import LogoSlider from './LogoSlider';
import OurWorks from './OurWorks';
import Review from './Review';
import Services from './Services';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <LogoSlider></LogoSlider>
            <Services></Services>
            <OurWorks></OurWorks>
            <Review></Review>
        </div>
    );
};

export default Home;