"use client";
import React, { memo, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const MenuIcon = dynamic(() => import("./Icons/MenuIcon"));
const Header = (props: any) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const scrolled = window.scrollY;
    setScrolled(scrolled > 200);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    {
      isButton: false,
      title: "Home",
      action: "#home",
    },
    {
      isButton: false,
      title: "About",
      action: "#about",
    },
    {
      isButton: false,
      title: "Skills",
      action: "#skills",
    },
    {
      isButton: false,
      title: "Certifications",
      action: "/certifications",
    },
    {
      isButton: false,
      title: "Projects",
      action: "#projects",
    },

    {
      isButton: true,
      title: "Contact me",
      action: "#contact",
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <div className="relative">
          <div
            className={`
      fixed top-6 left-0 right-0 z-[999]
      px-20
    `}
          >
            <div
              className={`flex justify-between  gap-20 mx-auto px-4 bg-[rgba(98,98,98,0.23)] text-[#ffffff] backdrop-blur-[17px] border border-[rgba(255,255,255,0.125)]	 shadow-lg rounded-full border border-opacity-50 border-[#dfdef71c]  hover:scale-[1.05] ease-out duration-100	 ${
                scrolled ? "w-fit" : "w-full"
              }
`}
            >
              <img src="/images/logo.svg" alt="" height="40" width="40" />
              <div className="flex py-1 justify-between items-center gap-8 text-white text-[14px]">
                {navItems.map((item, i) => (
                  <div
                    key={i}
                    className={`py-1 cursor-pointer hover:text-[#ccc] ease-out duration-100  ${
                      !item.isButton && item.title === props.viewSection
                        ? "bg-[rgba(98,98,98,0.23)] px-3 hover:text-[#fff] backdrop-blur-[17px] border border border-[rgba(255,255,255,0.125)]  rounded-full"
                        : "border-transparent"
                    }`}
                    onClick={() => props.setviewSection(item.title)}
                  >
                    {item.isButton ? (
                      <div className="bg-[#ffffff] text-black font-bold rounded-full py-1.5  px-4 ">
                        <a href="#contact"> Contact me</a>
                      </div>
                    ) : (
                      <a href={`${item.action}`}>{item.title}</a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden relative">
        <div className="flex justify-between w-full px-4 ">
          <img src="/images/logo.svg" alt="" height="40" width="40" />
          <MenuIcon
            height="34px"
            width="34px"
            color="#fff"
            onClick={() => {
              props.setNavOpen(true);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default memo(Header);
