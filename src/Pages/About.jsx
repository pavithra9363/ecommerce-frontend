import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import NewsletterBox from "../Components/NewsletterBox";
import OurPolicy from "../Components/Ourpolicy";

const About = () => {
  const navigate = useNavigate();
  const slides = [
    { image: "/veg.png", caption: "Fresh Vegetables for a Healthy Life" },
    { image: "/fruit.png", caption: "Juicy Fruits Full of Flavor" },
    { image: "/grains.jpg", caption: "Nutritious Grains from Local Farms" },
    { image: "/bg-nut.webp", caption: "Organic Nuts Packed with Energy" },
    { image: "/bg-slide.webp", caption: "Farm-Fresh Goodness Delivered" },
    { image: "/bac3.webp", caption: "Your Health, Our Priority" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="flex flex-col md:flex-row w-full gap-8 p-5 mt-10">
      {/* Slider Section */}
      <div className="w-full md:w-1/2 h-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              {/* Image */}
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full  object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-bold">{slide.caption}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* About Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start rounded-lg shadow-lg bg-gradient-to-br from-green-50 via-white to-green-100 p-6">
        <h1 className="text-4xl font-bold mb-6 text-green-900">
          Welcome to Farm Fresh Delights
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Discover the freshness of nature with our locally sourced farm
          products. We are committed to providing organic, sustainable, and
          eco-friendly produce, ensuring you get the best from our fields to
          your table.
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li className="text-gray-700 text-base mb-2">
            Fresh vegetables and fruits picked daily.
          </li>
          <li className="text-gray-700 text-base mb-2">
            Grains and nuts sourced from local farms.
          </li>
          <li className="text-gray-700 text-base mb-2">
            100% organic and pesticide-free products.
          </li>
        </ul>
        <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow hover:bg-green-700 transition duration-300"
        onClick={() => navigate("/")}>
          Shop Now
        </button>
      </div>
    </div>
   
    <div className="w-full ">
      <OurPolicy/>
    < NewsletterBox/>

    </div>
    </>
  );
};

export default About;
