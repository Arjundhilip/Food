'use client'

// components/ImageSlider.tsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface ImageSliderProps {
    images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const settings: SliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay speed (in milliseconds)
    };

    return (
        <div className="relative">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="">
                        <Image src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full rounded-xl" width={900} height={200} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

interface SliderSettings {
    dots: boolean;
    arrows: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
}

export default ImageSlider;

