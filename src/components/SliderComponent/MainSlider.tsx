"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import SliderImage from "./SliderImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MainSlider.css";

interface Slide {
    title: string;
    subtitle: string;
    description: string[];
    image: string;
}

const slides: Slide[] = [
    {
        title: "تمديدات الخليج",
        subtitle: "حلول متكاملة، بخبرة تضمن الأمان والثقة",
        description: [
            "شركة رائدة في تصميم وتنفيذ وصيانة شبكات الغاز في",
            "المملكة العربية السعودية.",
            "نعمل بخبرة طويلة ومعدات حديثة لتوفير أعلى مستويات الجودة والسلامة لكل عميل."
        ],
        image: "/assets/slider/slide1.jpg"
    }
];

export default function MainSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    const handleSlideChange = () => {
        if (swiper) {
            setActiveIndex(swiper.activeIndex);
        }
    };

    return (
        <>
            <div className="topics h-[90vh] flex justify-center items-center mt-12 bg-gray-800/45 absolute right-0 w-full top-0 left-0 bottom-0 text-center text-white z-30" dir="rtl">
                <div className="w-full relative mb-32 md:mb-0 h-[272px] lg:h-[280px]">
                    {slides.map((slide, index) => (
                        <div key={index} className={`relative ${activeIndex === index ? "block" : "hidden"}`}>
                            <h2 className="transition-all mb-6 duration-300 font-bold text-4xl">
                                {slide.title}
                            </h2>
                            <div className="transition-all duration-300 flex flex-col items-center justify-center mb-12">
                                <div className="text-xl mb-2 font-bold block w-3/4 self-center justify-self-center pb-3">
                                    {slide.subtitle}
                                    <div className="mx-auto w-full sm:w-3/4 md:w-2/5 translate-y-4 h-1 bg-white" />
                                </div>
                                <p className="text-xl flex justify-center items-center flex-col w-fit pt-3">
                                    {slide.description.map((line, i) => (
                                        <span key={i} className={i < slide.description.length - 1 ? "block w-fit" : "mb-3 block"}>
                                            {line}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Swiper
                onSwiper={setSwiper}
                onSlideChange={handleSlideChange}
                spaceBetween={0}
                centeredSlides={true}
                effect="fade"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <SliderImage
                            src={slide.image}
                            alt={slide.title}
                            priority={index === 0}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}