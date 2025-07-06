import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.jpg"
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
    return (
      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 py-10 px-5 md:px-16 lg:px-32 rounded-b-3xl shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
        <Image
          alt="Logo"
          width={60}
          height={60}
          src={logo}
          className="rounded-full border-4 border-white shadow-md"
        />
        <span className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">
          Blogify
        </span>
        </div>
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full flex items-center gap-2 font-semibold shadow-md hover:bg-purple-700 hover:text-white transition-all duration-200">
        Get Started <FaArrowRight />
        </button>
      </div>
      <div className="text-white max-w-2xl flex justify-center items-center flex-col text-center mx-auto">
        <div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Latest Blog
        </h1>
        <p className="text-lg md:text-xl opacity-90 font-medium">
          Discover insightful articles, tips, and stories from our vibrant
          community. Stay updated and inspired every day!
        </p>
        </div>
        <form className="mt-8 flex w-full max-w-md mx-auto">
        <input
          placeholder="Enter Your Email"
          type="email"
          className="flex-1 px-5 py-3 rounded-l-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-r-full shadow-md hover:bg-purple-800 transition-all duration-200"
        >
          Subscribe
        </button>
        </form>
      </div>
      </header>
    );
}

export default Header
