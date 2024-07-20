// /pages/blog/[slug].js
import { useRouter } from 'next/router';
import { blogs } from '../../data/blogsData';
import { useEffect } from 'react';

// next link
import Link from 'next/link';

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

  const isBlogPage = router.pathname.startsWith('/blog/');

  useEffect(() => {
    if (isBlogPage) {
      document.body.classList.add('no-overflow');
    } else {
      document.body.classList.remove('no-overflow');
    }

    return () => {
      document.body.classList.remove('no-overflow');
    };
  }, [isBlogPage]);

  if (!blog) {
    return (
      <div className="flex flex-col justify-center w-full h-screen text-center text-xs">
        <div>
          <p>Blog nije pronađen</p>
          <Link href={'/blog'}>Probajte neki drugi</Link>
        </div>
      </div>
    );
  }

  // function for break text into parts
  function splitContent(content) {
    const sentences = content.split('. ');
    const maxCharacters = 400;
    let currentCharacters = 0;
    let result = [];

    sentences.forEach((sentence, index) => {
      const sentenceLength = sentence.length + 1; // Add 1 for the space
      if (currentCharacters + sentenceLength > maxCharacters && index !== 0) {
        // If we exceed the limit and are not at the beginning, add twice <br>
        result.push(<br key={`br1_${index}`} />);
        result.push(<br key={`br2_${index}`} />);
        currentCharacters = 0; // Reset the counter
      }

      result.push(sentence + (index === sentences.length - 1 ? '' : '. '));
      currentCharacters += sentenceLength;
    });

    return result;
  }

  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto xl:px-14">
          <motion.div
            variants={fadeIn('down', 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <h1 className="h1 mt-40 text-center">{blog.title}</h1>
            <Image
              src={blog.image}
              width={537}
              height={678}
              alt={`${blog.title} Studio Rakita`}
              className="translate-z-0 mx-auto rounded-[100px] mb-9"
            />
          </motion.div>
          <section>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <p className="text-base text-left sm:text-base lg:text-lg mx-auto xl:mx-0 mb-[30px] xl:mb-[50px]">
                {splitContent(blog.text)}
              </p>
              <p className="text-base text-left sm:text-base lg:text-lg mx-auto xl:mx-0 mb-[90px] xl:mb-[50px]">
                Ako imate bilo kakva pitanja ili želite da saznate više,
                slobodno nas
                <Link className="text-accent" href={'/kontakt'}>
                  {' '}
                  kontaktirajte
                </Link>
                .
              </p>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
