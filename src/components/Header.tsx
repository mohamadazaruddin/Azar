import Link from "next/link";
import React from "react";

export default function Header(props: any) {
  const navItems = [
    {
      isButton: false,
      title: "Home",
    },
    {
      isButton: false,
      title: "About",
    },
    {
      isButton: false,
      title: "Skills",
    },
    {
      isButton: false,
      title: "Projects",
    },

    {
      isButton: true,
      title: "Contact me",
    },
  ];
  console.log(props.viewSection);

  return (
    <div className="flex justify-between w-full px-4	bg-black bg-opacity-60 shadow-lg rounded-full border border-opacity-50 border-black backdrop-filter  	">
      <img src="/images/logo.svg" alt="" height="40" width="40" />
      <div className="flex justify-between items-center gap-10  text-[14px]">
        {navItems.map((item, i) => (
          <div
            key={i}
            className={`py-2 cursor-pointer border-b-2  transition linear  ${
              !item.isButton && item.title === props.viewSection
                ? "  border-[#D117B8]"
                : "border-transparent"
            }`}
            onClick={() => props.setviewSection(item.title)}
          >
            {item.isButton ? (
              <div className="bg-[#370855] rounded-full py-1.5  px-4 ">
                Contact me
              </div>
            ) : (
              item.title
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
