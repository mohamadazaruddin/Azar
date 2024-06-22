import React from "react";

export default function Footer() {
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
    <div className="px-[80px]">
      <div className=" h-[2px] w-full bg-[#D117B8]"></div>
      <div className="mt-10 flex justify-between items-center">
        <div>
          <img src="/images/logo.svg" alt="" height="40" width="40" />
        </div>
        <div className="flex gap-10 ">
          {navItems.map((item, i) => (
            <a
              className="color-[#fff] text-md  duration-100 hover:scale-[1.09]"
              key={i}
              href={`#${item.action}`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
