// data
import { serviceData } from "../data/serviceData";
// icon
import { RxArrowTopRight } from "react-icons/rx";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// required modules
import { FreeMode, Pagination } from "swiper";

function ServiceSlider() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, itemIndex) => (
        <SwiperSlide key={itemIndex}>
          <div>
            {/* icon */}
            <div>{item.icon}</div>
            {/* title & description */}
            <div>
              <div>{item.title}</div>
              <p>{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ServiceSlider;
