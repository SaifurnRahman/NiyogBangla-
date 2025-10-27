import React from "react";
import { useSpring, animated } from "@react-spring/web";
import HeroImage from "../assets/Hero.jpeg";

const HeroSection = ({ handleScroll }) => {

  const textAnim = useSpring({
    from: { opacity: 0, transform: "translateX(-40px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    config: { tension: 200, friction: 20 },
    delay: 400,
  });

  const imageAnim = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 180, friction: 15 },
    delay: 400,
  });

  const [hovered, setHovered] = React.useState(false);
  const btnAnim = useSpring({
    backgroundColor: hovered ? "#2563eb" : "transparent",
    color: hovered ? "#fff" : "#2563eb",
    border: "2px solid #2563eb",
  });

  return (
    <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">

      <animated.div style={textAnim} className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Find Your <span className="text-blue-600">Dream Job</span> in <br />Bangladesh
        </h1>
        <p className="text-gray-600 text-lg">
          NiyogBangla connects you with top employers across Bangladesh.
          Discover the right opportunities, apply easily, and move forward in
          your career — all in one place.
        </p>

        <div className="flex justify-center md:justify-start">
          <animated.button
            style={btnAnim}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleScroll}
            className="px-6 py-3 rounded-full font-medium transition-all duration-300"
          >
            Post a Job
          </animated.button>
        </div>
      </animated.div>

      <animated.div
        style={imageAnim}
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
      >
        <img
          src={HeroImage}
          alt="Career growth illustration"
          className="w-full max-w-md rounded-lg object-cover shadow-lg"
        />
      </animated.div>
    </section>
  );
};

export default HeroSection;