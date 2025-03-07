"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { titleVariants, descVariants, tagVariants } from "@/utils/animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto] text-center mx-auto lg:py-0 lg:text-left lg:flex lg:justify-between mb-5 gap-4 justify-between items-center">
      {/* Left Section */}
      <div className="lg:w-1/2 xl:py-14 lg:py-8">
        <motion.p
          initial="offscreen"
          whileInView={"onScreen"}
          variants={titleVariants}
          className="tracking-widest uppercase"
        >
          Offer for the best Interior
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView={"onScreen"}
          variants={descVariants}
          className="h1"
        >
          Make your home a <br /> piece of art
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView={"onScreen"}
          variants={tagVariants}
          className="pb-6 text-muted-foreground xl:pb-10"
        >
          Transforming spaces with expert interior design and finishing. We
          deliver elegance, quality, and craftsmanship to every project. Let’s
          create interiors that inspire!
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={"onScreen"}
          variants={tagVariants}
        >
          <Button className="inline-flex items-center px-8 py-6 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            Book now <TbArrowUpRight className="size-5 ml-2" />
          </Button>
        </motion.div>
      </div>

      {/* Right Section */}
      <div>
        <Image
          src="/image/hero-img.jpg"
          width={600}
          height={600}
          alt="Living room"
          className="lg:block hidden rounded-tl-[60px] rounded-br-[60px]"
        />
      </div>
    </div>
  );
};

export default Hero;
