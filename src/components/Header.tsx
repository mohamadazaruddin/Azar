import React, { useState } from "react";
import MenuIcon from "./Icons/MenuIcon";

export default function Header(props: any) {
  const navItems = [
    {
      isButton: false,
      title: "Home",
      action: "home",
    },
    {
      isButton: false,
      title: "About",
      action: "about",
    },
    {
      isButton: false,
      title: "Skills",
      action: "skills",
    },
    {
      isButton: false,
      title: "Projects",
      action: "projects",
    },

    {
      isButton: true,
      title: "Contact me",
      action: "contact",
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <div className="px-20">
          <div
            className={`flex justify-between w-full px-4	bg-black bg-opacity-60 shadow-lg rounded-full border border-opacity-50 border-[#dfdef71c] backdrop-filter hover:scale-[1.05] ease-out duration-100	`}
          >
            <img src="/images/logo.svg" alt="" height="40" width="40" />
            <div className="flex justify-between items-center gap-10  text-[14px]">
              {navItems.map((item, i) => (
                <div
                  key={i}
                  className={`py-2 cursor-pointer border-b-2 ${
                    !item.isButton && "hover-underline-animation"
                  }  transition linear  ${
                    !item.isButton && item.title === props.viewSection
                      ? "  border-[#D117B8]"
                      : "border-transparent"
                  }`}
                  onClick={() => props.setviewSection(item.title)}
                >
                  {item.isButton ? (
                    <div className="bg-[#370855] rounded-full py-1.5  px-4 ">
                      <a href="#contact"> Contact me</a>
                    </div>
                  ) : (
                    <a href={`#${item.action}`}> {item.title}</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="flex justify-between w-full px-4">
          <img src="/images/logo.svg" alt="" height="40" width="40" />
          <MenuIcon height="34px" width="34px" color="#fff" />
        </div>
      </div>
    </>
  );
}
