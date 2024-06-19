import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Arrow from "./Icons/Arrow";

export default function Skills() {
  const stacksDetails = [
    {
      img: "/images/figma.png",
      height: 30,
      width: 30,
    },
    {
      img: "/images/react.png",
      height: 60,
      width: 60,
    },
    {
      img: "/images/react.png",
      height: 40,
      width: 40,
    },
    {
      img: "/images/react.png",
      height: 30,
      width: 30,
    },
    {
      img: "/images/react.png",
      height: 40,
      width: 40,
    },
    {
      img: "/images/react.png",
      height: 40,
      width: 40,
    },
    {
      img: "/images/react.png",
      height: 50,
      width: 50,
    },
    {
      img: "/images/react.png",
      height: 50,
      width: 50,
    },
    {
      img: "/images/react.png",
      height: 75,
      width: 75,
    },
  ];
  const words = [
    {
      text: "I",
      className: "text-[40px]",
    },
    {
      text: "Design,",
      className: "text-blue-500 dark:text-blue-500 text-[40px] ",
    },
    // {
    //   text: "I",
    //   className: "text-[40px]",
    // },
    {
      text: "Code,",
      className: "text-blue-500 dark:text-blue-500 text-[40px] ",
    },
    // {
    //   text: "I",
    //   className: "text-[40px]",
    // },
    {
      text: "Deploy,",
      className: "text-blue-500 dark:text-blue-500 text-[40px] ",
    },
    // {
    //   text: "I",
    //   className: "text-[40px]",
    // },
    {
      text: "Escape",
      className: "text-blue-500 dark:text-blue-500 text-[40px] ",
    },
  ];
  return (
    <div className="relative py-[100px] px-20" id="skills">
      <h1 className="  text-[80px] font-semibold text-[#fff]  space-x-3 pl-5   leading-[80px]  ">
        My skills
      </h1>
      <img
        src="/images/pinkDots.svg"
        alt=""
        className="absolute  top-[-200px] left-[40%] transform -translate-x-[200px] -rotate-90 h-[380px] w-[400px]"
      />
      <div className="absolute right-[100px] rotate-180 top-24">
        <Arrow height="100px" width="340px" color="#D117B8" />
      </div>
      {/* <TypewriterEffect words={words} className="text-[40px]" /> */}
      {/* <div className="absolute px-4	bg-black bg-opacity-60 shadow-lg rounded-full border border-opacity-50 border-black backdrop-filter ">
        I design, Code, Deploy and Escape before the bugs find me !!
      </div> */}
      <div className="flex  justify-center relative antialiased mt-20">
        <div className="grid grid-cols-8 gap-10	">
          {stacksDetails.map((item, i) => (
            <div
              key={i}
              className="flex justify-center items-center"
              style={{
                width: `${item.width + 20}px`,
                height: `${item.height + 20}px`,
                backgroundColor: "#251C31",
                borderRadius: "50%", // make it a circle
              }}
            >
              <img
                src={item.img}
                style={{
                  width: `${item.width}px`,
                  height: `${item.height}px `,
                }}
              />
            </div>
          ))}
        </div>
        <BackgroundBeams />
      </div>{" "}
    </div>
  );
}
