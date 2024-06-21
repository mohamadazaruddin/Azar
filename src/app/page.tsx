"use client";
import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/Contact";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { SetStateAction, useEffect, useRef, useState } from "react";

export default function Home() {
  const [viewSection, setviewSection] = useState("Home");

  return (
    <main
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
      <Header
        setviewSection={(section: SetStateAction<string>) =>
          setviewSection(section)
        }
        viewSection={viewSection}
      />

      {/* <FollowerPointerCard title={<>Guest</>}> */}
      <HeroSection />
      {/* </FollowerPointerCard> */}
      <AboutUs />

      <Skills />

      <Projects />
      <ContactForm />
    </main>
  );
}
