// data
import {
  aboutDataSR,
  aboutDataTextSR,
  years,
  clients,
  projects,
  gratitude,
} from '../../data/aboutData';

import { useState } from 'react';

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

function About() {
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <div className="bg-primary/30 xl:py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row mt-[100px]">
        {/* text part */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h1
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-3 h1"
          >
            <div>
              {aboutDataTextSR.title1}{' '}
              <span className="text-accent">{aboutDataTextSR.title2}</span>
            </div>
          </motion.h1>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[16px] md:text-xl max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            {aboutDataTextSR.description}
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* expirience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={years} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {aboutDataTextSR.years.text}
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={clients} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {aboutDataTextSR.clients.text}
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={projects} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {aboutDataTextSR.projects.text}
                </div>
              </div>
              {/* gratitude */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={gratitude} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {aboutDataTextSR.gratitude.text}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info - cards in about section */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* for main title of about */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 z-[32]">
            {aboutDataSR.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-[100%] after:h-[2px] after:absolute after:-bottom-1 after:left-0 ${
                  mainIndex === itemIndex &&
                  'text-accent after:w-[100%] after:transition-all after:duration-300 after:bg-accent'
                }`}
                onClick={() => {
                  setMainIndex(itemIndex);
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
          {/* for content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-4 items-center xl:items-start">
            {aboutDataSR[mainIndex].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="mb-[20px] flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light xl:max-w-[440px] md:mb-0">
                  {item.title}
                </div>

                {item.stage && <div>{item.stage}</div>}
                <div className="flex gap-x-[30px]">
                  {item.icons?.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="text-3xl text-white flex items-center gap-x-[10px]"
                    >
                      {icon.iconThis}
                      <span className="text-sm text-white">{icon.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
