function BlogCard({ blog }) {
  return (
    <div class="blog-card">
      <img
        src={blog.image}
        alt={blog.title}
      />

      <div class="blog-content">
        <p class="blog-category">
          {blog.category}
        </p>

        <h2>{blog.title}</h2>

        <p>{blog.description}</p>

        <div class="blog-meta">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
        </div>

        <button
          onClick={() =>
            alert(`You selected: ${blog.title}`)
          }
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogCard;