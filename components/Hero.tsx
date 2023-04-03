import React, { FC, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
// import "../styles/swipers.css";
import Image from "next/image";

const Hero: FC = (): ReactElement => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="mySwiper header"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <Image
            src={"https://firebasestorage.googleapis.com/v0/b/hekto-a75a2.appspot.com/o/first-banner.png?alt=media&token=375bdc40-e2eb-44ae-926b-db8aaabf2232"}
            alt="first banner"
            width={1920}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"https://firebasestorage.googleapis.com/v0/b/hekto-a75a2.appspot.com/o/second-banner.png?alt=media&token=ed82b709-32a5-454e-8a97-ea7ec8469f4f"}
            alt="second banner"
            width={1920}
            height={1080}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"https://firebasestorage.googleapis.com/v0/b/hekto-a75a2.appspot.com/o/third-banner.png?alt=media&token=f1479f3a-b3dc-48f2-bb44-2def0904debc"}
            alt="third banner"
            width={1920}
            height={1080}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
