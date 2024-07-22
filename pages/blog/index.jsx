// next link
import Link from 'next/link';

// data
import { blogs } from '../../data/blogsData';

// framer-motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

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

function Blog() {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          Čitajte naš <span className="text-accent">Blog</span>
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="h-[400px]"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="flex flex-col items-center md:flex-row gap-x-2 h-full px-16"
                >
                  <section className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                    <div className="flex flex-col justify-center text-center">
                      {/* avatar */}
                      <div className="mb-2 mx-auto rounded-full overflow-hidden">
                        <Image
                          src={blog.image}
                          width={100}
                          height={100}
                          alt={`Studio Rakita ${blog.title}`}
                          title={`Studio Rakita ${blog.title}`}
                        />
                      </div>
                      {/* name */}
                      <div className="text-lg mb-4">{blog.title}</div>
                      {/* titleDesc */}
                      <div className="text-[12px] uppercase font-extralight tracking-widest">
                        {blog.titleDesc}
                      </div>
                    </div>
                  </section>

                  <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                    {/* message */}
                    <div className="xl:text-lg text-center md:text-left">
                      {blog.description}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}

export default Blog;
