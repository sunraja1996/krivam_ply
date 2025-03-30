import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import background_image1 from '../assets/images/kitchen-2364665_1280.webp'
import background_image2 from '../assets/images/kitchen-8368660_1280.webp'
import background_image3 from '../assets/images/Margaret-Howell-Isokon-Exhibition-01-1584x1056.jpg'
import background_image4 from '../assets/images/pexels-houzlook-3926542.jpg'
import background_image5 from '../assets/images/pexels-karolina-katereu-2149378526-30857234.jpg'

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    background_image1,
    background_image2,
    background_image3,
    background_image4,
    background_image5,
    // "https://images.unsplash.com/photo-1629976828074-c248d94c82ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGx5d29vZHxlbnwwfDB8MHx8fDA%3D",
    // "https://images.unsplash.com/photo-1566373924413-3efde9d6eb67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBseXdvb2R8ZW58MHwwfDB8fHww",
    // "https://images.unsplash.com/photo-1554230253-017daba2b631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBseXdvb2R8ZW58MHwwfDB8fHww",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
  className="relative isolate overflow-hidden"
>
  <div
    className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${currentImage * 100}%)` }}
  >
    {images.map((image, index) => (
      <div
        key={index}
        className="min-w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    ))}
  </div>

  <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}></div>

  <div className="relative z-10 mx-auto w-full max-w-7xl py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-white">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="relative flex-shrink-0 mb-8 md:mb-0">
        <div className="w-50 h-50 sm:w-50 sm:h-50 md:w-75 md:h-75 lg:w-100 lg:h-100 rounded-full bg-gradient-to-bl from-[#374e37] to-[#162916] flex items-center justify-center">
          <img
            src={logo}
            alt="Company Logo"
            className="h-32 sm:h-32 md:h-36 lg:h-60 object-contain"
          />
        </div>
      </div>
      <div className="text-left max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Stronger, Smarter, Sustainable Plywood
        </h1>
        <p className="mt-6 text-lg font-medium text-gray-200">
          Elevate your projects with high-quality plywood designed for durability, versatility, and eco-friendliness.
        </p>
        <div className="mt-8 flex items-center gap-x-6">
          <a
            href="/all-products"
            className="rounded-md bg-green-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            View Products
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default Hero;
