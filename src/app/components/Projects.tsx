"use client";
import React, { memo, useEffect, useState } from "react";

import { PinContainer } from "./ui/3d-pin";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import dynamic from "next/dynamic";
const Arrow = dynamic(() => import("./Icons/Arrow"));
const CrossSolid = dynamic(() => import("./Icons/CrossSolid"));
const CrossOutline = dynamic(() => import("./Icons/CrossOutline"));
const Projects = ({ isAll }: { isAll?: boolean }) => {
  const projects = [
    {
      title: "Color Fusion",
      href: "https://color-fusion.vercel.app",
      imageUrl: "/images/projects/color-fusion.svg",
      detail:
        "A web app named Color Fusion designed to help designers pick colors for their designs. Explore various color palettes and pre-defined components to experiment with and select the perfect color schemes for your design projects.",
    },
    {
      title: "Taskblitz",
      imageUrl: "/images/projects/taskblitz.svg",
      href: "https://taskblitz.vercel.app",
      detail:
        "A web app called TaskBlitz designed to help users track their tasks efficiently. Organize and manage your tasks, set priorities, and track progress towards completion. Create and save new task lists based on existing tasks.",
    },
    {
      title: "Movies Hub",
      href: "https://movies-hub-fawn.vercel.app",
      imageUrl: "/images/projects/moviesHub.svg",
      detail:
        "A web app named Movies Hub that allows users to search for movies, watch trailers, and view ratings of each movie. The app also provides additional information like cast, directors, plot summaries, and user reviews to help users make informed decisions on what to watch. ",
    },
  ];
  const [projectData, setProjectData] = useState(projects);

  useEffect(() => {
    if (isAll) {
      setProjectData(projects);
    } else {
      setProjectData(projects.slice(0, 3));
    }
  }, []);
  const { push } = useRouter();
  return (
    <>
      <div className="hidden md:block">
        <div className="relative py-[100px] px-20" id="projects">
          {!isAll && (
            <>
              <div className="absolute left-[100px] top-24">
                <Arrow height="100px" width="340px" color="#6717d1" />
              </div>
              <div className="absolute right-[100px] top-[860px] rotate-12	">
                <CrossSolid height="50px" width="50px" color="#6717d1" />
              </div>
              <div className="absolute left-[100px] top-[1260px] rotate-12	">
                <CrossOutline height="50px" width="50px" color="#6717d1" />
              </div>
              <Image
                src="/images/dotstray.svg"
                alt=""
                width={400}
                height={480}
                className="absolute  top-[250px] left-[0]  h-[480px] w-[250px]"
              />
              <Image
                src="/images/blueDots.svg"
                alt=""
                width={400}
                height={480}
                className="absolute  top-[880px] right-[100px] transform  -rotate-90 h-[480px] w-[400px]"
              />
              <Image
                src="/images/blueDots.svg"
                alt=""
                width={400}
                height={480}
                className="absolute  top-[1580px] left-[0px]    h-[480px] w-[400px]"
              />
            </>
          )}
          <h1
            className={`text-[80px] font-semibold text-[#fff] ${
              isAll ? "text-center" : "text-right"
            }  space-x-3 mr-20 leading-[80px]`}
          >
            My Projects
          </h1>
          <div className="mt-24 w-[1000px] mx-auto">
            {projectData.map(({ title, href, detail, imageUrl }, i) => (
              <div
                key={i}
                className={`flex justify-center mb-[150px] even:dir-rtl ${
                  i % 2 === 0 ? "" : "projectDirRtL"
                }`}
              >
                <div className="w-[45%]">
                  <div className="text-[#9857D3] text-[16px] font-semibold">
                    Featured Project
                  </div>
                  <div
                    style={{
                      color: "#ffffff",
                    }}
                    className="text-[#ffffff] text-[34px] font-semibold pb-4"
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      color: "#ffffff",
                    }}
                    className={` bg-[rgba(98,98,98,0.23)]
  text-[#ffffff]
  backdrop-blur-[17px] border border-[rgba(255,255,255,0.125)]  z-[9]  p-4 rounded-xl absolute w-[550px] ${
    i % 2 === 0 ? "text-start" : "text-end"
  }`}
                  >
                    {detail}
                  </div>
                </div>
                <PinContainer title={title} href={href}>
                  <div
                    className="h-[300px] w-[500px] bg-no-repeat bg-center bg-cover"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  >
                    <div className="rounded-t-[14px]"></div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
          {!isAll && (
            <div className="text-center mt-[50px]">
              <button
                type="button"
                onClick={() => push("/projects")}
                className="bg-[#6717d1] rounded-full py-1 px-6 text-[16px] w-auto mt-10 hover:translate-x-[10px] ease-out duration-100 flex items-center gap-4 mx-auto "
              >
                View All
                <Arrow height="30px" width="24px" color="#fff" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="block md:hidden px-5 mt-10 relative" id="mobProjects">
        <h1 className={`text-[40px] font-semibold text-[#fff] text-right`}>
          My projects
        </h1>
        {projects.map((item, i) => (
          <CardContainer className="inter-var py-0 mt-5" key={i}>
            <CardBody className="bg-[rgba(98,98,98,0.23)] text-[#ffffff]  backdrop-blur-[17px] border border-[rgba(255,255,255,0.125)]  relative group/card   w-full h-auto rounded-xl p-4 border  ">
              <CardItem translateZ="100" className="w-full ">
                <Image
                  src={`${item.imageUrl}`}
                  height="250"
                  width="25"
                  className="h-[150px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-md font-bold text-neutral-600 dark:text-white mt-5"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.detail}
              </CardItem>

              <div className="flex justify-between items-center mt-5">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={`${item.href}`}
                  target="__blank"
                  className=" py-2 rounded-xl text-sm font-normal  text-blue-500"
                >
                  Visit now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
        <button
          type="button"
          onClick={() => push("/projects")}
          className="bg-[#6717d1] rounded-full py-1 px-6 text-[16px] w-auto mt-6 hover:translate-x-[10px] ease-out duration-100 flex items-center gap-4 mx-auto "
        >
          View All <Arrow height="30px" width="24px" color="#fff" />
        </button>
      </div>
    </>
  );
};
export default memo(Projects);
