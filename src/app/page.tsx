"use client";
import AboutUs from "@/components/AboutUs";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Image from "next/image";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [viewSection, setviewSection] = useState("Home");
  return (
    <main
      style={{
        height: "100vh",
        overflowY: "auto",
        width: "100%",
      }}
      className=" bg-[url('/images/bg.svg')] 	  px-20 py-10"
    >
      <Header
        setviewSection={(section: SetStateAction<string>) =>
          setviewSection(section)
        }
        viewSection={viewSection}
      />

      <HeroSection />
      <AboutUs />
      {/* <Skills /> */}
    </main>
  );
}
