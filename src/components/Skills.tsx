import React, { useEffect, useRef, useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Arrow from "./Icons/Arrow";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  const stacksDetails = [
    {
      img: "/images/stacks/ANGULAR.svg",
      height: 70,
      width: 70,
      left: 700,
      top: 300,
    },
    {
      img: "/images/stacks/APPWRITE.svg",
      height: 65,
      width: 65,
      left: 0,
      top: 350,
    },
    {
      img: "/images/stacks/ASTRO.svg",
      height: 75,
      width: 75,
      left: 100,
      top: 470,
    },
    {
      img: "/images/stacks/BOOTSTRAP.svg",
      height: 100,
      width: 100,
      left: 700,
      top: 150,
    },
    {
      img: "/images/stacks/CHAKRA.svg",
      height: 100,
      width: 100,
      left: 875,
      top: 75,
    },
    {
      img: "/images/stacks/CSS.svg",
      height: 120,
      width: 120,
      left: 150,
      top: 20,
    },
    {
      img: "/images/stacks/FIGMA.svg",
      height: 90,
      width: 90,
      left: 740,
      top: 10,
    },
    {
      img: "/images/stacks/FLUTTER.svg",
      height: 50,
      width: 50,
      left: 310,
      top: 490,
    },
    {
      img: "/images/stacks/GITHUB.svg",
      height: 80,
      width: 80,
      left: 525,
      top: 340,
    },
    {
      img: "/images/stacks/HTML.svg",
      height: 90,
      width: 90,
      left: 10,
      top: 60,
    },
    {
      img: "/images/stacks/INSOMNIA.svg",
      height: 45,
      width: 45,
      left: 360,
      top: 380,
    },
    {
      img: "/images/stacks/JAVASCRIPT.svg",
      height: 112,
      width: 112,
      left: 525,
      top: 25,
    },
    {
      img: "/images/stacks/MONGO_DB.svg",
      height: 90,
      width: 90,
      left: 875,
      top: 220,
    },
    {
      img: "/images/stacks/MYSQL.svg",
      height: 70,
      width: 70,
      left: 900,
      top: 353,
    },
    {
      img: "/images/stacks/NESTJS.svg",
      height: 85,
      width: 85,
      left: 630,
      top: 445,
    },
    {
      img: "/images/stacks/NEXTJS.svg",
      height: 145,
      width: 145,
      left: 0,
      top: 180,
    },
    {
      img: "/images/stacks/POSTGRES.svg",
      height: 65,
      width: 65,
      left: 830,
      top: 470,
    },
    {
      img: "/images/stacks/POSTMAN.svg",
      height: 95,
      width: 95,
      left: 210,
      top: 380,
    },
    {
      img: "/images/stacks/REACT.svg",
      height: 120,
      width: 120,
      left: 310,
      top: 80,
    },
    {
      img: "/images/stacks/TYPESCRIPT.svg",
      height: 90,
      width: 90,
      left: 450,
      top: 200,
    },
    {
      img: "/images/stacks/VERCEL.svg",
      height: 75,
      width: 75,
      left: 430,
      top: 430,
    },
    {
      img: "/images/stacks/VSCODE.svg",
      height: 150,
      width: 150,
      left: 200,
      top: 200,
    },
    {
      img: "/images/stacks/WORDPRESS.svg",
      height: 45,
      width: 45,
      left: 820,
      top: 360,
    },
  ];
  return (
    <>
      <div className="hidden md:block">
        <div
          // ref={targetDivRef}
          className="relative py-[100px] px-20"
          id="skills"
        >
          <Image
            src="/images/pinkDots.svg"
            alt=""
            width={400}
            height={480}
            className="absolute  top-[680px] right-[100px] transform  -rotate-90 h-[480px] w-[400px]"
          />
          <Image
            src="/images/blueDots.svg"
            alt=""
            className="absolute top-[450px] left-0 h-[380px] w-[450px]"
            width={450}
            height={380}
          />
          <h1 className="  text-[80px] font-semibold text-[#fff]  space-x-3 pl-20   leading-[80px]  ">
            My skills
          </h1>

          <Image
            src="/images/pinkDots.svg"
            alt=""
            width={400}
            height={380}
            className="absolute  top-[-200px] left-[40%] transform -translate-x-[200px] -rotate-90 h-[380px] w-[400px]"
          />
          <div className="absolute right-[100px] rotate-180 top-24">
            <Arrow height="100px" width="340px" color="#D117B8" />
          </div>

          <div
            className={`flex  justify-center relative antialiased mt-24 w-[900px] mx-auto h-[600px] `}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            {stacksDetails.map((item, i) => (
              <Image
                key={i}
                alt="stacks"
                className={`ease-in duration-100 ${
                  isHovered
                    ? "even:translate-x-[10px] odd:translate-x-[-10px]"
                    : "even:translate-x-0 odd:translate-x-0"
                }`}
                src={item.img}
                width={item.width}
                height={item.width}
                style={{
                  width: `${item.width}px`,
                  height: `${item.height}px `,
                  position: "absolute",
                  top: `${item.top}px`,
                  left: `${item.left}px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="block md:hidden px-5 relative translate-y-[-50px]">
        <h1 className="  text-[36px] font-semibold text-[#fff]   ">
          My skills
        </h1>
        <div className="absolute right-[20px] rotate-180 top-0">
          <Arrow height="40px" width="80px" color="#D117B8" />
        </div>
        <img src="/images/skills.png" alt="" className="w-full mt-10" />
      </div>
    </>
  );
}
