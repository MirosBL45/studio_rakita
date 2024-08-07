// data
import { workData } from '../data/workData';
// icon
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

// links
import Link from 'next/link';

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
      className="h-[240px] sm:h-[480px]"
    >
      {workData.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <section className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={image.link}
                  title={image.title}
                >
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    {/* image */}
                    <Image
                      src={image.path}
                      width={500}
                      height={300}
                      alt={image.title}
                    />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-500"></div>
                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-2 group-hover:sm:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="text-primary font-bold flex items-center flex-col sm:flex-row gap-x-2 text-[13px] tracking-[0.2em]">
                        {/* title part 1 */}
                        <div className="delay-100">{'POGLEDAJ'}</div>
                        {/* title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          {'VIDEO'}
                        </div>
                        {/* icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default WorkSlider;
