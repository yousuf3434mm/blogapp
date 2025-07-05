"use client";

import React, { useState } from "react";
import { blog_data } from "../../assets/assets";
import BlogItem from "./BlogItem";

const BlogList = () => {
    
    const [menu, setMenu] = useState("All");
    


  return (
    <div className="flex flex-col items-center my-6 px-2">
      {/* Responsive Button Group */}
      <div className="flex flex-wrap gap-3 bg-gray-100 p-3 rounded-lg shadow mb-8 justify-center w-full max-w-2xl">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? "bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700 transition-colors duration-200 font-semibold"
              : "bg-purple-600 text-white px-5 py-2 rounded-md shadow hover:bg-purple-700 transition-colors duration-200 font-semibold"
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Headphone")}
          className={
            menu === "Headphone"
              ? "bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700 transition-colors duration-200 font-semibold"
              : "bg-purple-600 text-white px-5 py-2 rounded-md shadow hover:bg-purple-700 transition-colors duration-200 font-semibold"
          }
        >
          Headphone
        </button>
        <button
          onClick={() => setMenu("Mobile")}
          className={
            menu === "Mobile"
              ? "bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700 transition-colors duration-200 font-semibold"
              : "bg-purple-600 text-white px-5 py-2 rounded-md shadow hover:bg-purple-700 transition-colors duration-200 font-semibold"
          }
        >
          Mobile
        </button>
        <button
          onClick={() => setMenu("Cover")}
          className={
            menu === "Cover"
              ? "bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700 transition-colors duration-200 font-semibold"
              : "bg-purple-600 text-white px-5 py-2 rounded-md shadow hover:bg-purple-700 transition-colors duration-200 font-semibold"
          }
        >
          Cover
        </button>
      </div>
      {/* Responsive Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {blog_data.filter((item)=> menu ==="All"? true: item.category ===menu).map((blog, idx) => (
          <BlogItem
            key={idx}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            category={blog.category}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
