import React from "react";

export default function HeroSection() {
  return (
    <div className="py-[100px]">
      <h1 className="text-[65px] font-semibold text-[#fff] text-left space-x-3 pl-5">
        Hello, I'm Azar
      </h1>

      <div className="flex items-center justify-center">
        <div className="border-b-2 border-[#fff]">azaruddin1307@gmail.com</div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&s"
          className="rounded-full object-cover h-[170px] mx-10"
          alt=""
          width="170"
        />
        <p>linkedIn</p>
      </div>
      <h1 className="text-[65px] font-semibold text-[#fff] text-right space-x-3 pr-5 mt-8">
        Full Stack Developer
      </h1>
    </div>
  );
}
