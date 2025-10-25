import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Companies from '../Components/Companies';
import HowItWorks from '../Components/HowItWorks';
import AboutSection from '../Components/AboutSections';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <div>
                <Companies></Companies>
            </div>
            <div>
                <HowItWorks></HowItWorks>
            </div>
            <div>
            <AboutSection></AboutSection>
            </div>

        </div>
    );
};

export default HomeLayout;