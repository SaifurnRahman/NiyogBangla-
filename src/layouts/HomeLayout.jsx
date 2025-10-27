import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Companies from '../Components/Companies';
import HowItWorks from '../Components/HowItWorks';
import AboutSection from '../Components/AboutSections';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    const howToWork = useRef(null)

     const handleScroll = () => {
  if (howToWork.current) {
    window.scrollTo({
      top: howToWork.current.offsetTop,
      behavior: "smooth",
    });
  }
};


    return (
        <div>
            <Navbar></Navbar>
            <HeroSection handleScroll={handleScroll}></HeroSection>
            <div>
                <Companies></Companies>
            </div>
            <div ref={howToWork}>
                <HowItWorks></HowItWorks>
            </div>
            <div>
            <AboutSection></AboutSection>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default HomeLayout;