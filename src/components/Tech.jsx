import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { triggerOnce: false });

    observer.observe(document.querySelector('.tech'));

    return () => {
      observer.unobserve(document.querySelector('.tech'));
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className='tech flex flex-row flex-wrap justify-center gap-10'>
      {isMobile ? (
        technologies.slice(0, 5).map((technology,index) => (
          <motion.div animate={inView ? 'show' : 'hidden'} variants={fadeIn("right", "spring", index * 0.1, 0.75)} className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))
      ) : (
        technologies.map((technology,index) => (
          <motion.div animate={inView ? 'show' : 'hidden'} variants={fadeIn("right", "spring", index * 0.1, 0.75)} className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
