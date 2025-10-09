import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { Image } from '@heroui/react';

export default function CollaborationCarousel() {
    return (
        <div className='w-full'>
            <Swiper
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 5 },
                    320: { slidesPerView: 2, spaceBetween: 10 },
                    480: { slidesPerView: 2, spaceBetween: 15 },
                    640: { slidesPerView: 3, spaceBetween: 20 },
                    768: { slidesPerView: 4, spaceBetween: 25 },
                    1024: { slidesPerView: 5, spaceBetween: 30 },
                    1280: { slidesPerView: 6, spaceBetween: 30 },
                    1536: { slidesPerView: 7, spaceBetween: 35 },
                }}
                spaceBetween={30}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 1200 }}
                speed={2000}
                freeMode={{
                    enabled: false,
                    momentum: false,
                    momentumRatio: 0.5,
                }}
                className="mySwiper flex justify-center"
            >
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://via.placeholder.com/400x200"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://via.placeholder.com/400x200"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://via.placeholder.com/400x200"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://via.placeholder.com/400x200"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://via.placeholder.com/400x200"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://via.placeholder.com/400x200"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://via.placeholder.com/400x200"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://via.placeholder.com/400x200"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://via.placeholder.com/400x200"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
