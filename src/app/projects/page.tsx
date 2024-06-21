import React from "react";
import { CardContainer } from "../../components/ui/3d-card";
import { PinContainer } from "../../components/ui/3d-pin";
import Projects from "@/components/Projects";

export default function Project() {
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
  ];
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "auto",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" bg-[url('/images/bg.svg')] py-10"
    >
      <div className="ml-[10%] text-[#fff] text-[16px]">
        <a href="/">Back</a>
      </div>
      <Projects isAll={true} />
    </div>
  );
}
