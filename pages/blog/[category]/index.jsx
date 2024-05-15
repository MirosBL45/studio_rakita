import { blogItems } from '../../../data/blogsData';

function getData(categoryObject) {
  const data = blogItems[categoryObject];

  if (data) {
    return data;
  }

  return notFound();
}

function Category({ params }) {
  const data = getData(params.category);

  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <header>
        <h2>{params.category}</h2>
      </header>
      <div>
        {data.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
