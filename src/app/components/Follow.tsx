import React, {memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const CrossOutline = dynamic(() => import("./Icons/CrossOutline"));
const Follow = () => {
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
  return (
    <>
      <div className="hidden md:block">
        <div
          // ref={targetDivRef}
          className="relative py-[100px] px-20"
        >
          <Image
            src="/images/dotLines.svg"
            alt=""
            width={200}
            height={200}
            className="absolute  top-[200px] left-[165px]    h-[150px] w-[300px]"
          />
          <div className="absolute left-[80px] top-[-60px] rotate-12	">
            <CrossOutline height="50px" width="50px" color="#D117B8" />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[80px] font-semibold text-[#fff]  space-x-3 pl-20   leading-[80px]  ">
                Follow me
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-10 mr-20">
              {socialMedia.map((item, i) => (
                <a href={`${item.href}`} target="_blank" key={i}>
                  <Image
                    alt="socials"
                    className={`ease-in duration-100 hover:scale-[1.09]`}
                    src={item.img}
                    width={75}
                    height={75}
                    style={{
                      width: `75px`,
                      height: `75px `,
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden px-5 relative">
        {" "}
        <div className="mt-10">
          <div>
            <h1 className="text-[40px] font-semibold text-[#fff] text-center ">
              Follow me
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-5">
            {socialMedia.map((item, i) => (
              <a href={`${item.href}`} target="_blank" key={i}>
                <Image
                  alt="socials"
                  className={`ease-in duration-100 hover:scale-[1.09] m-auto`}
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
    </>
  );
};
export default memo(Follow);
