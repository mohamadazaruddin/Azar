import React from "react";

export default function AboutUs() {
  return (
    <div className="py-[100px]" id="about">
      <div className="flex w-[80%] m-auto">
        <div className="w-[50%] relative">
          <h1 className=" absolute  text-[80px] font-semibold text-[#fff] right-[-120px] top-[-75px] space-x-3 pl-5   leading-[80px]  ">
            About <br />
            me
          </h1>
          <img
            src="/images/myImg.jpeg"
            className="rounded-full object-cover h-[400px] w-[400px] mx-10"
            alt=""
          />
        </div>
        <div className="w-[50%] pt-[100px] ml-10">
          <div>
            Hello and welcome to my corner of the internet! I am a passionate UX
            designer and a skilled full stack developer, with a knack for
            creating intuitive and user-friendly digital experiences. With a
            blend of creativity and technical expertise, I strive to bridge the
            gap between design and development to deliver products that not only
            look amazing but also function flawlessly.
          </div>
          <button className="bg-[#D117B8] rounded-full py-2 px-6 text-[18px] w-auto mt-10">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}
