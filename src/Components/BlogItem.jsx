import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-64 w-full group">
       <Link href={`/blog/${id}`}>
       <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl transition-transform duration-300 group-hover:scale-105"
        />
        </Link>
      </div>
      <div className="p-6">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-2 font-semibold">
          {category}
        </span>
        <h5 className="text-2xl font-bold mb-2 text-gray-900">{title}</h5>
        <p className="text-gray-600 text-base">{description}</p>
        <Link href={`/blog/${id}`} className="mt-4 inline-flex items-center text-blue-600 font-semibold cursor-pointer hover:underline hover:text-blue-800 transition-colors duration-200">
          Read More <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
