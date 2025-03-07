"use client";
import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { descVariants, tagVariants, titleVariants } from "@/utils/animation";

const CatalogueSwiper = () => {
  return (
    <div className="py-8 lg:py-28">
      <div className="container grid pb-8 lg:grid-cols-1">
        <div className="text-left">
          <motion.h1
            initial="offscreen"
            whileInView={"onScreen"}
            variants={titleVariants}
            className="py-4 text-4xl font-medium lg:text-6xl lg:py-0"
          >
            Modern Classic
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onScreen"}
            variants={descVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5"
          >
            LUXURY DECOR TO CREATE COMFORT IN OUR HOME
          </motion.h2>
        </div>

        <motion.div
          initial="offscreen"
          whileInView={"onScreen"}
          variants={tagVariants}
          className="grid grid-cols-2 text-gray-500 gap-x-8"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, quidem iusto quis nobis vero nostrum. Laborum enim sed
            doloremque quibusdam non! Minima quae sequi rerum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores
            necessitatibus quaerat accusamus enim repudiandae voluptates
            consectetur optio odit, quibusdam cumque temporibus suscipit, nihil
            magnam?
          </p>
        </motion.div>

        <a href="/gallery">
          <Button className="inline-flex items-center px-8 py-6 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            View Gallery <TbArrowUpRight className="size-5 ml-2" />
          </Button>
        </a>
      </div>

      {/* Swiper */}
      <Swiper
        sliderPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="/image/swiper1.jpg"
            alt="swiper"
            width={520}
            height={220}
            className="w-full rounded-lg drop-shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper2.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full rounded-lg drop-shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper3.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full rounded-lg drop-shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper4.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full rounded-lg drop-shadow"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper5.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full rounded-lg drop-shadow"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CatalogueSwiper;
