import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import LinkedIn from "./Icons/LinkedIn";
import { ReactTyped } from "react-typed";

export default function HeroSection() {
  const words = [
    {
      text: "Hello,",
      className: "text-[65px]",
    },
    {
      text: "I'm",
      className: "text-[65px]",
    },
    {
      text: "Azar",
      className: "text-blue-500 dark:text-blue-500 text-[65px] ",
    },
  ];
  return (
    <div className=" px-20 py-[100px]" id="home">
      <div className="flex justify-start">
        <h1 className="text-[65px] font-semibold text-[#fff]  space-x-3 pl-5">
          {/* <TypewriterEffect words={words} className="text-[65px]" /> */}
          <TextGenerateEffect
            words={`Hello I'm Azar`}
            className="text-[65px]"
          />
        </h1>
      </div>
      <div className="flex items-center justify-center mt-5">
        <a
          href="mailto:azaruddin1307@gmail.com"
          className="border-b-2 border-[#fff] hover:translate-x-[-10px] ease-out duration-100"
        >
          azaruddin1307@gmail.com
        </a>
        <img
          src="/images/myImg.jpeg"
          className="rounded-full object-cover h-[170px] mx-10 hover:translate-y-[-10px] ease-out duration-100"
          alt=""
          width="170"
        />

        <a
          href="https://www.linkedin.com/in/mohamad-azaruddin-b8b880269/"
          className="hover:translate-x-[10px] ease-out duration-100"
        >
          <LinkedIn width="28px" height="28px" color="#fff" />
        </a>
      </div>
      <div className="flex justify-end ">
        <h1 className="text-[65px] font-semibold text-[#fff] text-right space-x-3 pr-5 mt-8">
          {/* <TextGenerateEffect
            words={"Full Stack Developer"}
            className="text-[65px]"
          /> */}
          <ReactTyped
            style={{
              fontSize: "65px",
              fontWeight: "bold",
            }}
            strings={["Full Stack Developer", "UI/UX Designer"]}
            typeSpeed={100}
            loop
          />
        </h1>
      </div>
    </div>
  );
}
