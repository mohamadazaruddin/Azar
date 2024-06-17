import React from "react";

export default function AboutUs() {
  return (
    <div className="py-[100px]">
      <div className="flex w-[80%] m-auto">
        <div className="w-[50%] relative">
          <h1 className=" absolute  text-[80px] font-semibold text-[#fff] right-[-120px] top-[-75px] space-x-3 pl-5   leading-[80px]  ">
            About <br />
            me
          </h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&s"
            className="rounded-full  h-[400px] w-[400px] mx-10"
            alt=""
          />
        </div>
        <div className="w-[50%] pt-[100px] ml-10">
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            voluptate sed quasi error maxime fuga eaque nesciunt atque totam
            reiciendis. Dolorem libero enim ratione corrupti laboriosam? Veniam
            minus reprehenderit inventore debitis, sequi facilis odio.
          </div>
          <button className="bg-[#D117B8] rounded-full py-2 px-6 text-[18px] w-auto mt-10">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}
