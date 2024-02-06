// components
import TestimonialSlider from '../../components/TestimonialSlider';
import { useLanguage } from '../../components/LanguageContext';

// framer-motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

// data
import {
  testimonialHeadline,
  testimonialHeadlineSR,
} from '../../data/testimonialData';

function Testimonials() {
  const { language } = useLanguage();

  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          {language === 'eng'
            ? testimonialHeadline.part1
            : testimonialHeadlineSR.part1}{' '}
          <span className="text-accent">
            {language === 'eng'
              ? testimonialHeadline.part2
              : testimonialHeadlineSR.part2}
          </span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider language={language} />
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
