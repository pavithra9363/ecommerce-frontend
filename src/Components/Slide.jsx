
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {

  const images = [
    "/veg.png",  
    "/fruit.png",
    "/grains.jpg",
    "/bg-nut.webp",
    "/bg-slide.webp" ,
      // "/bac2.webp",
      "/bac3.webp"
  ];

  // Slider settings
  const settings = {
    dots: true,         
    infinite: true,      
    speed: 500,        
    slidesToShow: 3,    
    slidesToScroll: 3,  
    autoplay: true,      
    autoplaySpeed: 3000, 
    centerMode: false,  
    focusOnSelect: true, 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1, 
      
          autoplay: true,      
          autoplaySpeed: 3000,  
        }
      },
    ]
  };

  return (
    <div className="w-full md:w-[98%]   overflow-hidden  "> 
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-slide"> 
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full p-5  mt-10 h-80 object-cover rounded-lg shadow-lg" 
            />
          </div>
        ))}
      </Slider> 
    </div>
  );
};

export default ImageSlider;
