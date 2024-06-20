import React from "react";
import { CardContainer } from "./ui/3d-card";

export default function Projects() {
  const projects = [
    {
      title: "EMS",
      detail:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    },
    {
      title: "Portfolio",
      detail:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    },
    {
      title: "nn",
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
        {projects.map(({}, i) => {
          return (
            <div
              className={`flex justify-center mb-[150px] even:dir-rtl ${
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
                  className={`projectBag p-4 rounded-xl absolute w-[650px] ${
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
              <div className="h-[300px] w-[500px] bg-white border-t-[40px] border-l-[40px] ">
                <div className="rounded-t-[14px]"></div>
              </div>
              {/* </CardContainer> */}
            </div>
          );
        })}

        <div></div>
      </div>
    </div>
  );
}
