// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer-motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

// LanguageContext
import { useLanguage } from "../components/LanguageContext";

function Home() {
  const { language } = useLanguage();

  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {language === 'eng' ? (
              <>
                <h1 className="h1">
                  Enshrine Your <br />
                  <span className="text-accent">Memorable Moments!</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-2xl max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-[20px] xl:mb-[50px]">
                  We shoot with high-quality cameras, and for enthusiasts we also shoot with a drone from the air. Whether you want to capture a wedding, your child&apos;s sporting event, an aerial shot of a house for sale or a farm for promotion, we&apos;ve got you covered.
                </p>
              </>
            ) : (
              <><h1 className="h1">
                Zabeležite Vaše<br />
                <span className="text-accent">Najbitnije Trenutke!</span>
              </h1>
                <p className="text-base sm:text-lg lg:text-2xl max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-[20px] xl:mb-[50px]">
                  Snimamo kamerama visokih kvaliteta, a za entuzijaste takođe snimamo i dronom iz vazduha. Da li želite da zabeležite venčanje, sportski događaj vašeg deteta, snimiti kuću iz vazduha radi prodaje ili poljoprivredno gazdinstvo zbog promocije, tu smo za vas.
                </p></>
            )}

          </motion.div>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
