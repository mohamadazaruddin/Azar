import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import LinkedIn from "./Icons/LinkedIn";
import { ReactTyped } from "react-typed";
import Image from "next/image";

export default function HeroSection() {
  const socialMedia = [
    {
      img: "/images/socials/GITHUB.svg",
      href: "https://github.com/mohamadazaruddin",
    },
    {
      img: "/images/socials/WHATSAPP.svg",
      href: "https://wa.me/9702914246",
    },
    {
      img: "/images/socials/INSTAGRAM.svg",
      href: "https://www.instagram.com/axharrr.ig",
    },
    {
      img: "/images/socials/GMAIL.svg",
      href: "mailto:azaruddin1307@gmail.com",
    },
    {
      img: "/images/socials/FACEBOOK.svg",
      href: "https://www.facebook.com/profile.php?id=100014282557454",
    },
    {
      img: "/images/socials/LINKEDIN.svg",
      href: "https://www.linkedin.com/in/mohamad-azaruddin-b8b880269",
    },
  ];
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
  const mobWords = [
    {
      text: "Hello,",
      className: "text-[32px]",
    },
    {
      text: "I'm",
      className: "text-[32px]",
    },
    {
      text: "Azar",
      className: "text-blue-500 dark:text-blue-500 text-[32px] ",
    },
  ];
  return (
    <>
      <div className="hidden md:block">
        <div className=" px-20 pt-[100px] overflow-y-hidden" id="home">
          <div className="flex w-full">
            <div className="w-1/2 ">
              <ReactTyped
                style={{
                  fontSize: "40px",
                  fontWeight: "regular",
                  color: "#9B9A9A",
                }}
                strings={["Full Stack Developer", "UI/UX Designer"]}
                typeSpeed={100}
                loop
              />
              <TypewriterEffect
                words={words}
                className="text-[65px] mt-3 text-start"
              />

              <div className="border-l border-[#9B9A9A] text-[#9B9A9A] text-md w-[300px] pl-4 mt-[100px]">
                i’M A UX DESIGNER AND A FULL STACK DEVELOPER. AND I WORK
                REMOTELY FROM ANYWHERE
              </div>
            </div>
            <div className="w-1/2 relative">
              <img src="/images/profileImg2.png" alt="" className="h-[450px]" />
              <div className="absolute top-[0px] right-0">
                {socialMedia.map((item, i) => (
                  <a href={`${item.href}`} target="_blank" key={i}>
                    <Image
                      alt="socials"
                      className={`ease-in duration-100 hover:scale-[1.09]`}
                      src={item.img}
                      width={50}
                      height={50}
                      style={{
                        width: `50px`,
                        height: `50px `,
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="mt-12 px-5">
          <ReactTyped
            style={{
              fontSize: "18px",
              fontWeight: "regular",
              color: "#9B9A9A",
            }}
            strings={["Full Stack Developer", "UI/UX Designer"]}
            typeSpeed={100}
            loop
          />
          <TypewriterEffect
            words={mobWords}
            className="text-[32px] mt-1 text-start"
          />

          <div className="border-l border-[#9B9A9A] text-[#9B9A9A] text-xs w-[300px] pl-2 mt-[40px]">
            i’M A UX DESIGNER AND A FULL STACK DEVELOPER. AND I WORK REMOTELY
            FROM ANYWHERE
          </div>
          <div>
            <img src="/images/profileImg.png" alt="" className="h-[550px]" />
            <div className="absolute top-[0px] right-0">
              {socialMedia.map((item, i) => (
                <a href={`${item.href}`} target="_blank" key={i}>
                  <Image
                    alt="socials"
                    className={`ease-in duration-100 hover:scale-[1.09]`}
                    src={item.img}
                    width={28}
                    height={28}
                    style={{
                      width: `28px`,
                      height: `28px `,
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
