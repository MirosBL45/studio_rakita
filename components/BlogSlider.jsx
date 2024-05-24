// data
import { blogs } from '../data/blogsData';

import { FaCameraRetro } from 'react-icons/fa';

// next image
import Image from 'next/image';

// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// required modules
import { Navigation, Pagination } from 'swiper';

function BlogSlider() {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {blogs.map((blogdata) => (
        <SwiperSlide key={blogdata.id}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* image, title, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* image */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={blogdata.image}
                    width={100}
                    height={100}
                    alt={blogdata.title}
                  />
                </div>
                {/* title */}
                <div className="text-lg">{blogdata.title}</div>
                {/* position */}
                {/* <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div> */}
              </div>
            </div>
            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaCameraRetro className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {blogdata.description}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BlogSlider;
