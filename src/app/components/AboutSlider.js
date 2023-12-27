"use client";
import Slider from "react-slick";
import Image from "next/image";

export default function AboutSlider() {
  const images = [
    "/images/about1.jpg",
    "/images/about2.jpg",
    "/images/about3.jpg",
    "/images/about4.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true
  };

  return (
    <Slider 
    {...settings}
    className="focus:border-none">
      {images.map ((image, index) => (
        <div key={index} className="p-1">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt={`Coconut About ${index + 1}`}
            className="w-full h-auto object-cover rounded-xl"
            priority={true}
          />
        </div>
      ))}
    </Slider>
  );
}
