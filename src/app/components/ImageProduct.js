import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";
export default function ImageProduct() {
  const images = [
    "/images/img.jpg",
    "/images/img-1.jpg",
    "/images/img-2.jpg",
    "/images/img-3.jpg",
    "/images/img-4.jpg",
    "/images/img-5.jpg",
    "/images/img-6.jpg",
    "/images/img-7.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      {images.map((image, index) => (
        <div key={index} className="transition delay-75 hover:-rotate-2 cursor-pointer" onClick={() => handleClick(image)}>
          <Image
          className="w-full h-auto object-cover"
            src={image}
            width={1000}
            height={1000}
            alt={`Product Coconut ${index + 1}`}
            priority={true}
          />
        </div>
      ))}

      {selectedImage && (
        <ImageLightbox 
            images={images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
        />
      )}
    </>
  );
}
