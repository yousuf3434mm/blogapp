"use client";

import React, { useEffect, useState } from "react";
import { blog_data } from "@/assets/assets.js";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchBlogData();
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8">
        {data.image && (
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />
        )}
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          {data.title}
        </h1>
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-xl font-bold text-blue-700 mr-3">
            {data.author ? data.author[0] : "A"}
          </div>
          <div>
            <div className="text-gray-700 font-semibold">
              {data.author || "Author Name"}
            </div>
            <div className="text-gray-400 text-sm">{data.date || "Date"}</div>
          </div>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          {data.content || "Blog content goes here..."}
        </p>
      </div>
    </div>
  );
};

export default page;
