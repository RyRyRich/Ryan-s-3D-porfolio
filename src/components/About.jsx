import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

<a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </a>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText
        }>Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-5x1 leading-[30px]'

      >
        I am an aspiring Electrical and Computer Engineer with strong proficiency in C++, Python, and JavaScript. My expertise spans embedded systems, web development, and 3D interactive experiences using 
        frameworks like Three.js and React. I am passionate about solving complex problems, I thrive in fast-paced environments, 
        leveraging my analytical mindset and entrepreneurial spirit to develop innovative, scalable, and user-centric solutions.
         Whether it's optimizing systems, designing intelligent automation, or creating immersive digital experiences,
         I'm dedicated to pushing the boundaries of technology. Let’s build something remarkable together!

      </motion.p>
      <div className='mt-20 flex justify-center'>
        <div className='flex flex-wrap justify-center gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")