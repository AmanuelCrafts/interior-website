"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { descVariants, tagVariants, titleVariants } from "@/utils/animation";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    description:
      "It is fantastic theme with tons of design and layout options, and the customer service is simply the best. They respond immediately and go above and beyond to help.",
    date: "Jan 16, 2025",
    dateTime: "2025-01-16",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Abebe",
      role: "CEO",
      href: "#",
      imageUrl: "/image/profile1.jpg",
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    description:
      "It is fantastic theme with tons of design and layout options, and the customer service is simply the best. They respond immediately and go above and beyond to help.",
    date: "Mar 10, 2025",
    dateTime: "2025-03-10",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Abebe",
      role: "CEO",
      href: "#",
      imageUrl: "/image/profile2.jpg",
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    description:
      "It is fantastic theme with tons of design and layout options, and the customer service is simply the best. They respond immediately and go above and beyond to help.",
    date: "Feb 12, 2025",
    dateTime: "2025-02-12",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Abebe",
      role: "CEO",
      href: "#",
      imageUrl: "/image/profile3.jpg",
    },
  },
];

const Contact = () => {
  return (
    <div className="pt-12">
      <div className="mx-auto  max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial="offscreen"
          whileInView={"onScreen"}
          variants={titleVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Customer Reviews
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onScreen"}
          variants={descVariants}
          className="mt-2 text-lg leading-8 text-muted-foreground"
        >
          Learn how to grow your business with our expert advice.
        </motion.p>

        <motion.div
          initial="offscreen"
          whileInView={"onScreen"}
          variants={tagVariants}
          className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16"
        >
          {posts.map((post) => (
            <article
              className="flex max-w-xl flex-col items-start justify-between"
              key={post.id}
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.dateTime}>
                  <Image src="/image/star.svg" width={80} height={5} />
                </time>
                <a
                  className="relative x-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all"
                  href={post.category.href}
                >
                  {post.category.title}
                </a>
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span>{post.title}</span>
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-500"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href={post.author.href}>
                      <span />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
