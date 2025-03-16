'use client'

import Slider from "react-slick";
import TestimonialCard from "./common/TestimonialCard";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    // centerMode: true,
    // centerPadding: "150px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i) => (
      <div className="mt-[50px]">
        <div className="w-[14px] h-[14px] rounded-full bg-gray-700 transition-all duration-300 slick-dot"></div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  

  return (
    <div className="">
      <h2 className="font-impact text-center text-light text-3xl lg:text-[48px]">Hear What <span className="text-golden">Rizz</span> Patients Have To Say</h2>

      <div className="slider-container mt-[45px]">
        <Slider {...settings}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial