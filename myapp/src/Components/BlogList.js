import { useState } from "react";
import BlogCard from "./BlogCard";

function BlogList() {
    const [search, setSearch] = useState("");
    const blogs = [
        {
            id:1,
            title:"Getting Started with React",
            category:"Technology",
            description:"Learn React components, props, state, and how to build modern web applications.",
            author:"Admin",
            date:"Oct 20, 2026",
            image:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600"
        },
        {
            id:2,
            title:"My Journey as a Developer",
            category:"Personal",
            description:"Discover my journey of learning programming and building creative projects.",
            author:"Admin",
            date:"Oct 18, 2026",
            image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
        },
        {
            id:3,
            title:"Tips for Learning JavaScript",
            category:"Programming",
            description:"Explore practical tips to improve your JavaScript skills and coding confidence.",
            author:"Admin",
            date:"Oct 15, 2026",
            image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600"
        }
    ];

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section class="blog-section" id="blogs">
            <div class="section-heading">
                <h1>Latest Blog Posts</h1>
                <p>Stories, ideas, and knowledge worth sharing.</p>
            </div>

            <input class="search-input" type="text" placeholder="Search blog posts..." value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
           <div class="blog-grid">
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))
                ) : (
                    <p>No blog posts found.</p>
                )}
            </div>
        </section>
    );
}

export default BlogList;