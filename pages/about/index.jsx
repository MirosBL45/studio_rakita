import { aboutData } from "../../data/aboutData";
import { useState } from "react";

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function About() {
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row">
        <div className="flex-1 flex flex-col justify-center">text</div>
        {/* cards in about section */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          {/* for main title of about */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 z-[32]">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  mainIndex === itemIndex &&
                  "text-accent after:w-[100%] after:bg-orange-800 after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => {
                  setMainIndex(itemIndex);
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
          {/* for content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-8 xl:gap-y-4 items-center xl:items-start">
            {aboutData[mainIndex].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">:</div>
                {/* years */}
                {item.stage && <div>{item.stage}</div>}
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
