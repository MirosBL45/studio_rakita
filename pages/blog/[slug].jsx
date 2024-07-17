// /pages/blog/[slug].js
import { useRouter } from 'next/router';
import { blogs } from '../../data/blogsData';

// next image
import Image from 'next/image';

// framer-motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog nije pronađen</div>;
  }

  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
          <motion.div
            variants={fadeIn('down', 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <h1 className="h1 xl:px-6">{blog.title}</h1>
            <p className="text-base sm:text-lg lg:text-2xl mx-auto xl:mx-0 mb-[20px] xl:mb-[50px] xl:px-6">
              {/* <p className="text-base sm:text-lg lg:text-2xl max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-[20px] xl:mb-[50px]"> */}
              {blog.text}
            </p>
          </motion.div>
          <div>
            {/* <div className="w-full h-full absolute right-0 bottom-0"> */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: 'easeInOut' }}
              // className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
            >
              <Image
                src={blog.image}
                width={537}
                // width={737}
                height={678}
                alt={`${blog.title} Studio Rakita`}
                className="translate-z-0 xl:px-6"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div> */}
    </div>
  );
}
