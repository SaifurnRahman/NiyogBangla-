import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Companies from '../Components/Companies';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <div>
                <Companies></Companies>
            </div>

        </div>
    );
};

export default HomeLayout;