import React from "react";
import { Vortex } from "./ui/vortex";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Arrow from "./Icons/Arrow";
import { CardContainer } from "./ui/3d-card";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div className="hidden md:block">
        <div className="py-[150px] px-20 relative " id="about">
          <Image
            src="/images/blueDots.svg"
            alt=""
            className="absolute top-[0px] left-0 h-[380px] w-[450px]"
            width={450}
            height={380}
          />{" "}
          <Image
            src="/images/pinkDots.svg"
            alt=""
            className="absolute bottom-[50px] right-0 h-[380px] w-[400px]"
            height={380}
            width={400}
          />
          <div className="flex w-[1000px] m-auto">
            <div className="w-[500px] relative">
              <h1 className=" absolute  text-[80px] font-semibold text-[#fff] right-[-120px] top-[-75px] space-x-3 pl-5   leading-[80px]  ">
                About <br />
                me
              </h1>

              <Image
                src="/images/myImg.png"
                className="rounded-full object-cover h-[400px] w-[400px] mx-10"
                alt=""
                height={400}
                width={400}
              />
            </div>
            <div className="w-[500px] pt-[100px] ml-10 relative ">
              <div className="absolute top-0 right-[-100px]">
                <Arrow height="100px" width="340px" color="#D117B8" />
              </div>
              <div>
                Hello and welcome to my corner of the internet! I am a
                passionate UX designer and a skilled full stack developer, with
                a knack for creating intuitive and user-friendly digital
                experiences. With a blend of creativity and technical expertise,
                I strive to bridge the gap between design and development to
                deliver products that not only look amazing but also function
                flawlessly.
              </div>
              <button className="bg-[#D117B8] rounded-full py-2 px-6 text-[18px] w-auto mt-10 hover:translate-x-[10px] ease-out duration-100">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden" id="mobAbout">
        <img src="/images/aboutus.png" alt="" className="w-full" />
      </div>
    </>
  );
}
