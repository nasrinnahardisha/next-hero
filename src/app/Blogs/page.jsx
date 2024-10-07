import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  return (
    <div className="p-24">
      {blogs.map((blog) => (
        <div key={blog.slug} className="border-2 p-12">
          <h1>{blog.title}</h1>
          <h3>{blog.description}</h3>
          <button className="bg-lime-600 p-3">
            <Link href={`/Blogs/${blog.slug}`}>View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};
const blogs = [
  {
    slug: "react-hooks-intro",
    title: "Introduction to React Hooks",
    description:
      "Learn the basics of React Hooks and how they simplify state management in functional components.",
  },
  {
    slug: "node-express-api",
    title: "Building REST APIs with Node.js and Express",
    description:
      "A comprehensive guide to creating RESTful APIs using Node.js and the Express framework.",
  },
  {
    slug: "tailwind-css-guide",
    title: "Getting Started with Tailwind CSS",
    description:
      "Explore the utility-first CSS framework, Tailwind CSS, and how it helps in rapid UI development.",
  },
  {
    slug: "mongodb-basics",
    title: "MongoDB for Beginners",
    description:
      "An introduction to MongoDB, a NoSQL database, and how to perform basic CRUD operations.",
  },
  {
    slug: "firebase-auth",
    title: "Implementing Firebase Authentication",
    description:
      "Learn how to integrate Firebase Authentication for user login and signup in your web applications.",
  },
];

export default BlogsPage;

