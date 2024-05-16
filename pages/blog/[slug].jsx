// /pages/blog/[slug].js
import { useRouter } from 'next/router';
import { blogs } from '../../data/blogsData';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog nije pronađen</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      {/* <img src={blog.imageUrl} alt={blog.title} /> */}
      <p>{blog.description}</p>
    </div>
  );
}
