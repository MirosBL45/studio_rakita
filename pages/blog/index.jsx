// next link
import Link from 'next/link';

// data
import { blogs } from '../../data/blogsData';

// framer-motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

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
          Read our <span className="text-accent">Blog</span>
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`}>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Blog;
