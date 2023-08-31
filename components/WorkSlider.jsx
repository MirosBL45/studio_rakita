// data
import { workData } from '../data/workData';
// icon
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// required modules
import { Pagination } from 'swiper';

function WorkSlider() {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workData.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div>
                  {/* image */}
                  <Image
                    src={image.path}
                    width={500}
                    height={300}
                    alt={image.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default WorkSlider;
