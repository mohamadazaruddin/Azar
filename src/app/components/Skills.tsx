import React, { memo, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const Arrow = dynamic(() => import("./Icons/Arrow"));
const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);

  const stacksDetails = [
    {
      name: "Angular",
      logo: "/images/stacks/ANGULAR.svg",
    },
    {
      name: "Appwrite",
      logo: "/images/stacks/APPWRITE.svg",
    },
    {
      name: "Astro",
      logo: "/images/stacks/ASTRO.svg",
    },
    {
      name: "Bootstrap",
      logo: "/images/stacks/BOOTSTRAP.svg",
    },
    {
      name: "Chakra",
      logo: "/images/stacks/CHAKRA.svg",
    },
    {
      name: "CSS",
      logo: "/images/stacks/CSS.svg",
    },
    {
      name: "Figma",
      logo: "/images/stacks/FIGMA.svg",
    },
    {
      name: "Flutter",
      logo: "/images/stacks/FLUTTER.svg",
    },
    {
      name: "GitHub",
      logo: "/images/stacks/GITHUB.svg",
    },
    {
      name: "HTML",
      logo: "/images/stacks/HTML.svg",
    },
    {
      name: "Insomnia",
      logo: "/images/stacks/INSOMNIA.svg",
    },
    {
      name: "JavaScript",
      logo: "/images/stacks/JAVASCRIPT.svg",
    },
    {
      name: "MongoDB",
      logo: "/images/stacks/MONGO_DB.svg",
    },
    {
      name: "MySQL",
      logo: "/images/stacks/MYSQL.svg",
    },
    {
      name: "NestJS",
      logo: "/images/stacks/NESTJS.svg",
    },
    {
      name: "Next.js",
      logo: "/images/stacks/NEXTJS.svg",
    },
    {
      name: "Postgres",
      logo: "/images/stacks/POSTGRES.svg",
    },
    {
      name: "Postman",
      logo: "/images/stacks/POSTMAN.svg",
    },
    {
      name: "React",
      logo: "/images/stacks/REACT.svg",
    },
    {
      name: "TypeScript",
      logo: "/images/stacks/TYPESCRIPT.svg",
    },
    {
      name: "Vercel",
      logo: "/images/stacks/VERCEL.svg",
    },
    {
      name: "VS Code",
      logo: "/images/stacks/VSCODE.svg",
    },
    {
      name: "WordPress",
      logo: "/images/stacks/WORDPRESS.svg",
    },
    {
      name: "Tailwind",
      logo: "/images/stacks/TAILWIND.svg",
    },
    {
      name: "NodeJS",
      logo: "/images/stacks/NODEJS.svg",
    },
    {
      name: "Express",
      logo: "/images/stacks/EXPRESS.svg",
    },
    {
      name: "NPM",
      logo: "/images/stacks/NPM.svg",
    },
    {
      name: "Git",
      logo: "/images/stacks/GIT.svg",
    },

    {
      name: "Docker",
      logo: "/images/stacks/DOCKER.svg",
    },
    {
      name: "ESlint",
      logo: "/images/stacks/ESLINT.svg",
    },
    {
      name: "Redux",
      logo: "/images/stacks/REDUX.svg",
    },
    {
      name: "React Native",
      logo: "/images/stacks/REACTNATIVE.svg",
    },
    {
      name: "Expo",
      logo: "/images/stacks/EXPO.svg",
    },
  ];

  const Badge = ({ name, logo }: any) => (
    <div
      className="flex items-center space-x-2 bg-[#403f3f3b] text-white backdrop-blur-[17px] border border-[rgba(255,255,255,0.125)] shadow-md rounded-lg
  px-2 py-1 sm:px-3 sm:py-2
  hover:scale-110 transition-transform "
    >
      <img
        src={logo}
        alt={name}
        className="object-contain w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8"
      />

      <span className="font-medium text-xs sm:text-sm md:text-base text-white">
        {name}
      </span>
    </div>
  );
  return (
    <>
      <div className="hidden md:block">
        <div className="relative py-[100px] px-20" id="skills">
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

          <div className="pl-20">
            <h1 className="text-[80px] font-semibold">
              <span className="text-white">My Work</span>
              {/* <p className="text-[18px] font-bold text-grey-500">
                {" "}
                Recipes that I use
              </p> */}
              {/* <span className="bg-gradient-to-r from-purple-800 via-pink-500 via-red-500  to-yellow-400 bg-clip-text text-transparent cool-font">
              Work
            </span> */}
            </h1>
          </div>
          <Image
            src="/images/pinkDots.svg"
            alt=""
            width={400}
            height={380}
            className="absolute  top-[-200px] left-[40%] transform -translate-x-[200px] -rotate-90 h-[380px] w-[400px]"
          />
          <div className="absolute right-[100px] rotate-180 top-24">
            <Arrow height="100px" width="340px" color="#6717d1" />
          </div>
          <div className="flex  w-[90%] mx-auto gap-8 items-center justify-center mt-28 flex-wrap">
            {stacksDetails.map((stack, idx) => (
              <Badge key={idx} {...stack} />
            ))}
          </div>
        </div>
      </div>
      <div className="block md:hidden px-5 relative " id="mobSkills">
        <h1 className="  text-[36px] font-semibold text-[#fff]   ">
          My skills
        </h1>
        <div className="absolute right-[20px] rotate-180 top-0">
          <Arrow height="40px" width="80px" color="#6717d1" />
        </div>
        <div className="flex  w-full mx-auto gap-2 items-center justify-center  md:mt-28  mt-10  flex-wrap">
          {stacksDetails.map((stack, idx) => (
            <Badge key={idx} {...stack} />
          ))}
        </div>
        {/* <img src="/images/skills.png" alt="" className="w-full mt-10" /> */}
      </div>
    </>
  );
};
export default memo(Skills);
