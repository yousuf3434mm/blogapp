import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-bold tracking-wide">
          BlogApp &copy; {new Date().getFullYear()}
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Home</a>
          <a href="#" className="hover:text-yellow-300 transition-colors duration-200">About</a>
          <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Contact</a>
        </div>
        <div className="text-sm text-gray-200">
          Made with <span className="text-red-400">&hearts;</span> by Your Name
        </div>
      </div>
    </footer>
  )
}

export default Footer