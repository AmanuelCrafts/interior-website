"use client";

import { useEffect, useState } from "react";
import MobileNavigation from "./MobileNavigation";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);

      return () => window.removeEventListener("scroll", scrollYPos);
    });
  });

  return (
    <header
      className={`${
        header
          ? "py-5 bg-secondary shadow-lg dark:bg-accent lg:mx-20 mx-5 top-3"
          : "py-7 dark:bg-transparent top-0"
      } px-[5%] rounded-full sticky z-30 transition-all ${
        pathname === "/" && "bg-[#fff]"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <h1>Hello</h1>
          <div className="flex items-center gap-x-6">
            {/* Nav section */}
            <Nav
              containerStyles="hidden lg:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full w-full h-[2px] bg-primary"
            />
            {/* Theme Toggler */}
            <ThemeToggler />

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
