"use client";

// framer motion
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// variants
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

function Transition() {
  // set state isLandscape
  const [isLandscape, setIsLandscape] = useState(false);

  // check is device in landscape mode
  // has to be "globalThis.window?" because just "window" gives error
  // On the server (where is Next), window is undefined and accessing anything on window will result with error
  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // adjust the delay values as needed
  const transitionDuration = isLandscape ? 0.4 : 3;

  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: "easeInOut",
        }}
      ></motion.div>
      {/* <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.15, duration: 0.4, ease: "easeInOut" }}
      ></motion.div> */}
      {/* <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
      ></motion.div> */}
    </>
  );
}

export default Transition;
