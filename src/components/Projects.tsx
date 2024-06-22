"use client";
import React, { useEffect, useState } from "react";

import { PinContainer } from "./ui/3d-pin";
import Arrow from "./Icons/Arrow";
import Image from "next/image";
import CrossSolid from "./Icons/CrossSolid";
import CrossOutline from "./Icons/CrossOutline";
import { useRouter } from "next/navigation";

export default function Projects({ isAll }: { isAll?: boolean }) {
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
    {
      title: "yyyy",
      imageUrl: "/images/taskblitz-poster.png",
      detail:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
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
    <div className="relative py-[100px] px-20" id="projects">
      {!isAll && (
        <>
          <div className="absolute left-[100px] top-24">
            <Arrow height="100px" width="340px" color="#D117B8" />
          </div>
          <div className="absolute right-[100px] top-[860px] rotate-12	">
            <CrossSolid height="50px" width="50px" color="#D117B8" />
          </div>
          <div className="absolute left-[100px] top-[1260px] rotate-12	">
            <CrossOutline height="50px" width="50px" color="#D117B8" />
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
        My projects
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
              <div className="text-[#CCD6F6] text-[34px] font-semibold pb-4">
                {title}
              </div>
              <div
                className={`bg-background/10 backdrop-blur-[16px] z-[999] backdrop-saturate-150 before:bg-white/10 border-white/20 border-1 p-4 rounded-xl absolute w-[550px] ${
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
            className="bg-[#d117b8] rounded-full py-1 px-6 text-[16px] w-auto mt-10 hover:translate-x-[10px] ease-out duration-100 flex items-center gap-4 mx-auto "
          >
            See More Projects <Arrow height="30px" width="24px" color="#fff" />
          </button>
        </div>
      )}
    </div>
  );
}
