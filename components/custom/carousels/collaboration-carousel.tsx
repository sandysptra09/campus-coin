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
                            src={"https://upload.wikimedia.org/wikipedia/id/0/09/Logo_Almamater_UPI.svg"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://yt3.googleusercontent.com/ytc/AIdro_kVbQ58iw2xkkXIvb96zHcq9mhYJnBDkVuytSiIVDb2cpQ0=s900-c-k-c0x00ffffff-no-rj"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-bV2tdaaR7go1tR73PSwv6RzQYbOFpzsfA&s"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://store-images.s-microsoft.com/image/apps.36304.78a0483a-042b-419c-8f29-95113ba34c98.f962f2bf-74f7-41ff-bb8b-8269283df9bb.531f0f6b-bc2c-4da4-85fb-551e3461bcad"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://images.icon-icons.com/2108/PNG/512/gojek_icon_130926.png"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTWlnJCnn2ljYqv2t4XY9bM5U4pnohvXZRw&s"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://www.inovex.de/wp-content/uploads/Amazon_Web_Services_Logo-kl.png"}
                            alt={"brandimg"}
                            style={{ objectFit: "contain" }}
                            className="overflow-hidden rounded-full"
                        ></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                        <Image
                            src={"https://gsma.my.site.com/mwcoem/servlet/servlet.FileDownload?file=00PQt00001fg3ZHMAY"}
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
