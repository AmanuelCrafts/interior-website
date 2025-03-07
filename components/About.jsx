"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { descVariants, tagVariants, titleVariants } from "@/utils/animation";

const About = () => {
  return (
    <div className="container py-12 xl:py-24 mx-auto h-[auto]">
      <div className="grid lg:grid-cols-2 place-items-center">
        <motion.div
          initial="offscreen"
          whileInView={"onScreen"}
          variants={titleVariants}
        >
          <Image
            src="/image/hall.jpg"
            width={900}
            height={500}
            alt="about"
            className="max-md:hidden rounded-tr-[60px] rounded-bl-[60px]"
          />
        </motion.div>

        <div className="items-center">
          <motion.h2
            initial="offscreen"
            whileInView={"onScreen"}
            variants={titleVariants}
            className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl"
          >
            We are awards Winning Company
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onScreen"}
            variants={descVariants}
            className="px-12 tracking-wider uppercase text-gray-400 mt-3"
          >
            World Award
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onScreen"}
            variants={tagVariants}
            className="px-12 pb-4 mt-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            numquam nisi aliquam corrupti voluptas accusantium minima ducimus
            nobis accusamus deserunt.
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onScreen"}
            variants={tagVariants}
            className="px-12 pb-4"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            delectus illo eveniet facilis ducimus, facere voluptas natus tempora
            ipsum quod!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
