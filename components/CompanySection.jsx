"use client";

import React from "react";
import Badge from "./Badge";
import { motion } from "framer-motion";
import { tagVariants, titleVariants } from "@/utils/animation";

const CompanySection = () => {
  return (
    <div className="bg-primary dark:bg-secondary py-24 sm:py-32 rounded-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {/* Badge 1 */}
          <motion.div
            initial="offscreen"
            whileInView={"onScreen"}
            variants={titleVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-white leading-7">Transaction every 24 hours</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={44} endCountText=" million" />
            </dd>
          </motion.div>

          {/* Badge 2 */}
          <motion.div
            initial="offscreen"
            whileInView={"onScreen"}
            variants={tagVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-white leading-7">Assets Under Running</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={119} endCountText=" trillion" />
            </dd>
          </motion.div>

          {/* Badge 3 */}
          <motion.div
            initial="offscreen"
            whileInView={"onScreen"}
            variants={titleVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-white leading-7">New Users Annually</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={4500} endCountText=" +" />
            </dd>
          </motion.div>
        </dl>
      </div>
    </div>
  );
};

export default CompanySection;
