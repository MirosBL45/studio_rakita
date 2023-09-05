import { testimonialData } from "../data/testimonialData";
// icon
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// required modules
import { Pagination } from "swiper";

function TestimonialSlider() {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {testimonialData.map((person, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div>
            {/* avatar, name, position */}
            <div>
              <div>
                {/* avatar */}
                <div>avatar</div>
                {/* name */}
                <div>name</div>
                {/* position */}
                <div>position</div>
              </div>
            </div>
            {/* quote & message */}
            <div>quote & message</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonialSlider;
