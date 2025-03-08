"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { descVariants, tagVariants, titleVariants } from "@/utils/animation";
import { useRef } from "react";

const page = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-4xl md:text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          Who are we?
        </h1>
      </div>

      <div className="container mx-auto px-[2%] lg:px-[7%]">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onScreen"}
            variants={titleVariants}
            className="text-3xl font-bold text-center lg:p-10 lg:text-5xl"
          >
            We have great idea & Interior Design
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onScreen"}
            variants={descVariants}
            className="text-xl md:text-2xl text-center font-extralight md:font-light pb-10 mt-5"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            necessitatibus perferendis labore adipisci ea ullam corporis natus
            blanditiis, vel tempore voluptate cupiditate repellat quae qui
            quaerat iusto optio sunt fuga!
          </motion.p>
        </div>

        <div className="items-center lg:flex gap-x-8">
          {/* Left Image Section */}
          <motion.div style={{ scale }} ref={ref} className="w-full">
            <Image src="/image/gallery1123.jpg" width={700} height={700} />
          </motion.div>

          {/* Right Content Section  */}
          <motion.div
            initial="offscreen"
            whileInView={"onScreen"}
            variants={tagVariants}
          >
            <p className="pb-8 tracking-wide mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic
              dolor ab iusto, dolorem amet quidem provident quae quo iure
              praesentium veritatis accusamus illum vitae possimus cumque soluta
              similique. Eius ut velit ipsa delectus... <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos
              ex voluptate magnam ut perferendis quaerat corrupti cumque saepe
              et eius ea temporibus sed provident sapiente, velit reiciendis
              dolore neque rerum! Minus, quisquam eaque. <br />
              <br />
              <span className="text-xl font-extrabold tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                architecto molestiae. Repudiandae reprehenderit optio impedit
                provident recusandae. Quas, corporis reiciendis.
              </span>
            </p>
            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              Read More <TbArrowUpRight className="size-5 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="lg:py-20 px-[5%]">
          <div className="pt-8 pb-4">
            <motion.h1
              initial="offscreen"
              whileInView={"onScreen"}
              variants={titleVariants}
              className="text-4xl font-bold tracking-wider text-center uppercase"
            >
              <span className="border-b-4 border-primary pb-1 inline-block">
                Team
              </span>
            </motion.h1>
          </div>

          <div className="grid py-8 gap-20 lg:grid-cols-3">
            <motion.div
              initial="offscreen"
              whileInView={"onScreen"}
              variants={titleVariants}
              className="border-2 border-primary rounded-3xl"
            >
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-secondary -m-0.5 hover:-translate-y-3 hover:-translate-x-3 rounded-3xl transition-all">
                <Image
                  src="/image/profile2.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error quisquam perspiciatis nam saepe corporis reprehenderit,
                  officiis porro.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onScreen"}
              variants={descVariants}
              className="border-2 border-primary rounded-3xl"
            >
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-secondary -m-0.5 hover:-translate-y-3 hover:-translate-x-3 rounded-3xl transition-all">
                <Image
                  src="/image/profile1.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error quisquam perspiciatis nam saepe corporis reprehenderit,
                  officiis porro.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onScreen"}
              variants={tagVariants}
              className="border-2 border-primary rounded-3xl"
            >
              <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-secondary -m-0.5 hover:-translate-y-3 hover:-translate-x-3 rounded-3xl transition-all">
                <Image
                  src="/image/profile3.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error quisquam perspiciatis nam saepe corporis reprehenderit,
                  officiis porro.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
