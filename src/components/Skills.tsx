import React, { useEffect, useRef, useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Arrow from "./Icons/Arrow";

export default function Skills() {
  const [inViewport, setInViewport] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const skillsRef = useRef(null);
  useEffect(() => {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInViewport(true);
        }
      });
    });

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        skillsObserver.unobserve(skillsRef.current);
      }
    };
  }, []);
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
      img: "/images/stacks/MONGODB.svg",
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
  // const words = [
  //   {
  //     text: "I",
  //     className: "text-[40px]",
  //   },
  //   {
  //     text: "Design,",
  //     className: "text-blue-500 dark:text-blue-500 text-[40px] ",
  //   },
  //   // {
  //   //   text: "I",
  //   //   className: "text-[40px]",
  //   // },
  //   {
  //     text: "Code,",
  //     className: "text-blue-500 dark:text-blue-500 text-[40px] ",
  //   },
  //   // {
  //   //   text: "I",
  //   //   className: "text-[40px]",
  //   // },
  //   {
  //     text: "Deploy,",
  //     className: "text-blue-500 dark:text-blue-500 text-[40px] ",
  //   },
  //   // {
  //   //   text: "I",
  //   //   className: "text-[40px]",
  //   // },
  //   {
  //     text: "Escape",
  //     className: "text-blue-500 dark:text-blue-500 text-[40px] ",
  //   },
  // ];
  return (
    <div
      // ref={targetDivRef}
      className="relative py-[100px] px-20"
      id="skills"
    >
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

      <div
        className={`flex  justify-center relative antialiased mt-24 w-[900px] mx-auto h-[600px] `}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div ref={skillsRef} className="absolute top-[500px]"></div>
        {/* <div className="grid grid-cols-8 gap-10	"> */}
        {stacksDetails.map((item, i) => (
          <img
            className={`ease-in duration-200 ${
              isHovered
                ? "even:translate-x-[10px] odd:translate-x-[-10px]"
                : "even:translate-x-0 odd:translate-x-0"
            }`}
            key={i}
            src={item.img}
            style={{
              width: `${item.width}px`,
              height: `${item.height}px `,
              position: "absolute",
              top: `${inViewport ? item.top - 50 : item.top}px`,
              left: `${item.left}px`,
            }}
          />
          // </div>
        ))}
      </div>

      {/* </div>{" "} */}
      {/* <BackgroundBeams /> */}
    </div>
  );
}
