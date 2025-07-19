import React, { memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const Arrow = dynamic(() => import("./Icons/Arrow"));

const AboutUs = () => {
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
              <h1 className=" absolute  text-[80px] font-semibold text-[#fff] right-[-100px] top-[-75px] space-x-3 pl-5   leading-[80px]  ">
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
            <div className="w-[500px] pt-[100px] ml-8 relative ">
              <div className="absolute top-0 right-[-100px]">
                <Arrow height="100px" width="340px" color="#6717d1" />
              </div>
              <div className="text-[20px]">
                Hello and welcome to my corner of the internet! I’m a passionate
                UX designer and skilled full stack developer, dedicated to
                creating intuitive, user-friendly digital experiences. By
                blending creativity with technical expertise, I bridge the gap
                between design and development to deliver products that are both
                visually stunning and highly functional.
              </div>
              <a href="/cv.pdf" download>
                <button className=" transition duration-100 ease-in-out bg-[#6717d1] rounded-full py-3 px-6 text-[18px] w-auto  hover:translate-x-[10px] ease-out duration-100 mt-16">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden text-center" id="mobAbout">
        <img src="/images/aboutus.png" alt="" className="w-full" />
        <a href="/cv.pdf" download>
          <button className=" bg-[#6717d1] rounded-full py-2 px-6 text-[14px] w-auto hover:translate-x-[10px] translate-y-[-75px] ease-out duration-100 mx-auto">
            Download CV
          </button>
        </a>
      </div>
    </>
  );
};
export default memo(AboutUs);
