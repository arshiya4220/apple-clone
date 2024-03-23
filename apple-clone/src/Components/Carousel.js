import React, { useState, useEffect } from 'react';
import image1 from "../Images/corousel-1.jpg";
import image2 from "../Images/corousel-2.jpg";
import image3 from "../Images/corousel-3.jpg";
import image4 from "../Images/corousel-4.jpg";
import image5 from "../Images/corousel-5.jpg";
import image6 from "../Images/corousel-6.jpg";
import image7 from "../Images/corousel-7.jpg";
import image8 from "../Images/corousel-8.jpg";
import image9 from "../Images/corousel-9.jpg";
import image10 from "../Images/corousel-10.jpg";
const Carousel = () => {
  const [currentSlide , setCurrentSlide] = useState(0);
  const slides = [{
    image:image1,
    content:'content1'
  },
  {
    image:image2,
    content:'content2'
  },
  {
    image:image3,
    content:'content3'
  },
  {
    image:image4,
    content:'content4'
  },
  {
    image:image5,
    content:'content5'
  },
  {
    image:image6,
    content:'content6'
  },
  {
    image:image7,
    content:'content7'
  },
  {
    image:image8,
    content:'content8'
  },
  {
    image:image9,
    content:'content9'
  },
  {
    image:image10,
    content:''
  },{
    image:image1,
    content:'content1'
  }
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides.length - 3));
  };
  
  useEffect(() =>{
    const intervalId = setInterval(nextSlide,3000);
    return() => clearInterval(intervalId);
  },[currentSlide,slides.length]);
  return (
    <div className="relative overflow-hidden h-[90%]">
      <div className='grid w-screen  grid-cols-[15%_70%_70%_70%_70%_70%_70%_70%_70%_70%]  grid-flow-col'
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-full w-full mx-2 ${index === currentSlide + 1 ? 'opacity-100' : 'opacity-50'}`}>
            <img src={slide.image}  className="w-full h-full object-cover" 
                  style={{transform: `translateX(-${currentSlide * 100}%)`}}
                  /><div className='absolute bottom-20'>{slide.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
};
export default Carousel;
