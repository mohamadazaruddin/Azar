"use client";
import React, { useEffect, useState } from "react";

import { PinContainer } from "./ui/3d-pin";

export default function Projects({ isAll }: { isAll?: boolean }) {
  const projects = [
    {
      title: "EMS",
      href: "https://ems-ivory.vercel.app",
      imageUrl: "/images/taskblitz-poster.png",
      detail:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    },
    {
      title: "Portfolio",
      imageUrl: "/images/taskblitz-poster.png",
      detail:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    },
    {
      title: "nn",
      imageUrl: "/images/taskblitz-poster.png",
      detail:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
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
  });

  return (
    <div className="relative py-[100px] px-20" id="projects">
      <h1
        className={`text-[80px] font-semibold text-[#fff] ${
          isAll ? "text-center" : "text-right"
        }  space-x-3 pl-5 leading-[80px]`}
      >
        My projects
      </h1>
      <div className="mt-24">
        {projectData.map(({ title, href, detail, imageUrl }, i) => (
          <div
            key={i}
            className={`flex justify-center mb-[150px] even:dir-rtl ${
              i % 2 === 0 ? "" : "projectDirRtL"
            }`}
          >
            <div className="w-2/6">
              <div className="text-[#9857D3] text-[16px] font-semibold">
                Featured Project
              </div>
              <div className="text-[#CCD6F6] text-[34px] font-semibold pb-4">
                {title}
              </div>
              <div
                className={`bg-background/10 backdrop-blur z-[999] backdrop-saturate-150 before:bg-white/10 border-white/20 border-1 p-4 rounded-xl absolute w-[650px] ${
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
          <a href="/projects">
            <button
              type="button"
              className="bg-[#D117B8] rounded-full py-2 px-6 text-[18px] w-auto mt-10 hover:translate-x-[10px] ease-out duration-300"
            >
              See More
            </button>
          </a>
        </div>
      )}
    </div>
  );
}
