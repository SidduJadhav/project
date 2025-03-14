'use client'

import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface ImageSliderProps {
  images: { src: string; alt: string }[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className="flex justify-center items-center h-full w-full">
      <Slider {...settings} className="w-[80%]">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageSlider
