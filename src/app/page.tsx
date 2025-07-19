"use client";
import { SetStateAction, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import ky from "ky";
const ContactForm = dynamic(() => import("@/app/components/Contact"));
const Follow = dynamic(() => import("@/app/components/Follow"));
const Footer = dynamic(() => import("@/app/components/Footer"));
const Header = dynamic(() => import("@/app/components/Header"));
const HeroSection = dynamic(() => import("@/app/components/HeroSection"));
const CrossSolid = dynamic(() => import("@/app/components/Icons/CrossSolid"));
const Projects = dynamic(() => import("@/app/components/Projects"));
const Skills = dynamic(() => import("@/app/components/Skills"));
const WelcomeBanner = dynamic(() => import("./components/WelcomeBanner"));
const AboutUs = dynamic(() => import("@/app/components/AboutUs"));

export default function Home() {
  const [viewSection, setviewSection] = useState("Home");
  const [isAtTop, setIsAtTop] = useState(false);

  const [navOpen, setNavOpen] = useState(false);
  const [welcomeBanner, setWelcomeBanner] = useState(true);
  const homeref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchFoodoData = async () => {
      const foodo = await fetch("https://foodo-be.onrender.com");
      const data = await foodo.json();
    };
    const fetchEmsData = async () => {
      const ems = await fetch("https://ems-be-eow5.onrender.com");
      const emsData = await ems.json();
    };
    const fetchInscribeData = async () => {
      const inacribe = await fetch("https://inscribe-be.onrender.com");
      const inacribeData = await inacribe.json();
    };
    fetchEmsData();
    fetchFoodoData();
    fetchInscribeData();
    if (sessionStorage.getItem("visited")) {
      setWelcomeBanner(false);
    } else {
      setTimeout(() => {
        setWelcomeBanner(false);
      }, 4000);
    }
  }, []);

  const navItems = [
    {
      isButton: false,
      title: "Home",
      action: "#mobHome",
    },
    {
      isButton: false,
      title: "About",
      action: "#mobAbout",
    },
    {
      isButton: false,
      title: "Skills",
      action: "#mobSkills",
    },
    {
      isButton: false,
      title: "Projects",
      action: "#mobProjects",
    },
    {
      isButton: false,
      title: "Certifications",
      action: "/certifications",
    },
    {
      isButton: false,
      title: "Contact",
      action: "#mobContact",
    },
  ];

  // adding view
  const handleSubmit = async (userInfo: any) => {
    const sendParams = {
      userAgent: userInfo.userAgent,
      screenSize: userInfo.screenSize,
      browserLanguage: userInfo.browserLanguage,
      browserPlatform: userInfo.browserPlatform,
    };

    try {
      const response = await ky
        .post(`/api/user/add-view`, { json: sendParams })
        .json();
    } catch (error) {}
  };

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const screenSize = {
      width: window.screen.width,
      height: window.screen.height,
    };
    const browserLanguage = navigator.language;
    const browserPlatform = navigator.platform;
    if (userAgent && screenSize && browserLanguage && browserPlatform) {
      const userInfo = {
        userAgent: userAgent,
        screenSize: screenSize.width,
        browserLanguage: browserLanguage,
        browserPlatform: browserPlatform,
      };

      handleSubmit(userInfo);
    }
  }, []);
  const scrollTriggred = () => {
    if (homeref.current) {
      const rect = homeref.current.getBoundingClientRect();
      // Check if the top of the section is at or above the top of the viewport
      if (rect.top <= 10) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    }
  };
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
      onScroll={scrollTriggred}
      className="bg-[url('/ct.png')] md:bg-[url('/ct.png')]   relative"
    >
      <div
        style={{
          background: "#00000080",
        }}
        className="py-10"
      >
        <WelcomeBanner welcomeBanner={welcomeBanner} />

        <div
          className={`${
            welcomeBanner ? "hidden w-0 overflow-hidden" : ""
          } ease-linear duration-100`}
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
              <div className="mt-10 pl-[38px]">
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
                    <a href={`${item.action}`}> {item.title}</a>
                  </div>
                ))}
              </div>
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
            shrinkNav={isAtTop}
          />
          {/* <FollowerPointerCard title={<>Guest</>}> */}
          <div ref={homeref}>
            <HeroSection />
          </div>
          {/* </FollowerPointerCard> */}
          <AboutUs />

          <Skills />
          <Projects />
          <ContactForm />
          <Follow />
          <Footer />
        </div>
      </div>
    </main>
  );
}
