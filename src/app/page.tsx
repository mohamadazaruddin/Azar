"use client";
import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/Contact";
import Follow from "@/components/Follow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CrossSolid from "@/components/Icons/CrossSolid";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";
import Image from "next/image";
import { SetStateAction, useEffect, useRef, useState } from "react";

export default function Home() {
  const [viewSection, setviewSection] = useState("Home");
  const [navOpen, setNavOpen] = useState(false);
  const navItems = [
    {
      isButton: false,
      title: "Home",
      action: "mobHome",
    },
    {
      isButton: false,
      title: "About",
      action: "mobAbout",
    },
    {
      isButton: false,
      title: "Skills",
      action: "mobSkills",
    },
    {
      isButton: false,
      title: "Projects",
      action: "mobProjects",
    },

    {
      isButton: false,
      title: "Contact",
      action: "mobContact",
    },
  ];

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
      className="bg-[url('/images/mobBG.svg')] md:bg-[url('/images/bg.svg')]  py-10 relative"
    >
      <div
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`${
          navOpen
            ? "w-full h-full  rounded-none duration-100"
            : "h-0 w-0 rounded-bl-full duration-100"
        }  absolute  ease-linear top-[0px] right-0 z-50 bg-[url('/images/navBg.png')]`}
      >
        <div
          className={`${
            navOpen ? "block delay-800" : "hidden w-0 h-0 "
          } duration-300 ease-linear delay-0`}
        >
          <div className="flex justify-between w-full px-5 mt-10">
            <img src="/images/logo.svg" alt="" height="40" width="40" />
            <CrossSolid
              height="18px"
              width="18px"
              color="#fff"
              onClick={() => {
                setNavOpen(false);
              }}
            />
          </div>
          <div className="mt-10 pl-[58px]">
            {navItems.map((item, i) => (
              <div
                key={i}
                className={`${
                  item.title.toLowerCase() === viewSection.toLowerCase()
                    ? "text-[60px] text-[#BB64FF] font-semibold"
                    : "text-[40px] text-[#fff] font-medium"
                } mt-2`}
                onClick={() => {
                  setNavOpen(!navOpen);
                  setviewSection(item.title);
                }}
              >
                <a href={`#${item.action}`}> {item.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${navOpen ? "hidden" : "block"}`}>
        <Header
          setviewSection={(section: SetStateAction<string>) =>
            setviewSection(section)
          }
          setNavOpen={(view: SetStateAction<boolean>) => setNavOpen(view)}
          viewSection={viewSection}
          navOpen={navOpen}
        />
        {/* <FollowerPointerCard title={<>Guest</>}> */}
        <HeroSection />
        {/* </FollowerPointerCard> */}
        <AboutUs />
        <Skills />
        <Projects />
        <ContactForm />
        <Follow />
        <Footer />
      </div>
    </main>
  );
}
