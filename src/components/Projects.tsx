import React from "react";
import { CardContainer } from "./ui/3d-card";
import { PinContainer } from "./ui/3d-pin";

export default function Projects() {
  const projects = [
    {
      title: "EMS",
      href: "https://ems-ivory.vercel.app",
      image: "/images/taskblitz-poster.png",
      detail:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    },
    {
      title: "Portfolio",
      image: "/images/taskblitz-poster.png",
      detail:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    },
    {
      title: "nn",
      image: "/images/taskblitz-poster.png",
      detail:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    },
  ];
  return (
    <div className="relative py-[100px] px-20" id="projects">
      <h1 className="text-[80px] font-semibold text-[#fff] text-right space-x-3 pl-5   leading-[80px]  ">
        My projects
      </h1>
      <div className="mt-24">
        {projects.map(({ title, href, detail, image }, i) => {
          return (
            <div
              key={i}
              className={`flex justify-center mb-[150px]  even:dir-rtl ${
                i % 2 === 0 ? "" : "projectDirRtL"
              }`}
            >
              <div className="w-2/6">
                <div className={`text-[#9857D3] text-[16px] font-semibold `}>
                  Featured Project
                </div>
                <div className="text-[#CCD6F6] text-[34px] font-semibold pb-4">
                  Example Project
                </div>
                <div
                  className={`bg-background/10 backdrop-blur  z-[999] backdrop-saturate-150  before:bg-white/10 border-white/20 border-1 p-4 rounded-xl absolute w-[650px] ${
                    i % 2 === 0 ? "text-start" : "text-end"
                  }`}
                >
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </div>
              </div>
              {/* <CardContainer> */}
              <PinContainer title={title} href={href}>
                <div
                  className={`h-[300px] w-[500px] bg-[url('/images/taskblitz-poster.png')] bg-no-repeat	bg-center	bg-cover `}
                >
                  <div className="rounded-t-[14px]"></div>
                </div>
              </PinContainer>
              {/* </CardContainer> */}
            </div>
          );
        })}

        <div></div>
      </div>
    </div>
  );
}
