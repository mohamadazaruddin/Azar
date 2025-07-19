"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/app/components/Icons/Arrow";
import { useRouter } from "next/navigation";
import { color } from "framer-motion";

export default function Project() {
  const projects = [
    {
      title: "Color Fusion",
      href: "https://color-fusion.vercel.app",
      imageUrl: "/images/projects/color-fusion.svg",
      stacks: ["Next JS", "AppWrite", "Chakra UI"],
      detail:
        "A web app named Color Fusion designed to help designers pick colors for their designs. Explore various color palettes and pre-defined components to experiment with and select the perfect color schemes for your design projects.",
    },
    {
      title: "Taskblitz",
      imageUrl: "/images/projects/taskblitz.svg",
      href: "https://taskblitz.vercel.app",
      stacks: ["Next JS", "Chakra UI", "AppWrite"],
      detail:
        "A web app called TaskBlitz designed to help users track their tasks efficiently. Organize and manage your tasks, set priorities, and track progress towards completion. Create and save new task lists based on existing tasks.",
    },
    {
      title: "Movies Hub",
      href: "https://movies-hub-fawn.vercel.app",
      imageUrl: "/images/projects/moviesHub.svg",
      stacks: ["React JS", "SASS", "Vite"],
      detail:
        "A web app named Movies Hub that allows users to search for movies, watch trailers, and view ratings of each movie. The app also provides additional information like cast, directors, plot summaries, and user reviews to help users",
    },
    {
      title: "EMS",
      imageUrl: "/images/projects/ems.svg",
      href: "https://ems-ivory.vercel.app",
      stacks: ["Next JS", "MySQL", "Nest JS", "Express"],
      detail:
        "An employee management system named EMS is designed to track employees in an organization. With EMS, you can view detailed information about each employee, including their profiles, roles, project ,team and chapters ",
    },
    {
      title: "Fee Tracker",
      imageUrl: "/images/projects/feeTracker.png",
      href: "https://fee-tracker-beta.netlify.app",
      stacks: ["Angular JS", "Bootstrap", "Node JS", "Mongo"],
      detail:
        "A web app for managing and tracking student fee payments,View a collection of all students, browse recent payment transactions, and explore detailed information about each student’s payment history",
    },
    {
      title: "Defino",
      imageUrl: "/images/projects/defino.png",
      href: "https://mohamadazaruddin.github.io/defino-web/",
      stacks: ["React Native", "Typescript", "CSS"],
      detail:
        "Defino is a dictionary app built with React Native for Android and iOS devices. It allows users to search for word meanings, synonyms, and definitions on the go. Defino offers a fast, intuitive, and mobile-friendly vocabulary experience",
    },
    {
      title: "UNIKA",
      imageUrl: "/images/projects/unika.svg",
      href: "https://mohamadazaruddin.github.io/UNIKA-WEBSITE",
      stacks: ["HTML", "Bootstrap", "CSS", "JS"],
      detail:
        "A web app for showcasing personalized UI animations made using HTML, CSS, Bootstrap, and JS. View a collection of top UI animations, browse recently created animations, and explore detailed information about each animation. ",
    },
    {
      title: "Inscribe",
      imageUrl: "/images/projects/inscribe.png",
      href: "https://inscribe-alpha.vercel.app",
      stacks: ["React JS", "Tailwind", "Node JS", "Mongo"],
      detail:
        "A social media platform that lets users express their thoughts and emotions through posts, and engage with others by liking and commenting on their content. Join Inscribe today and connect with people through the power of words.",
    },
    {
      title: "Pizza Shop",
      imageUrl: "/images/projects/pizza.png",
      href: "https://pizza-app-alpha.vercel.app",
      stacks: ["Next JS", "Chakra UI", "Typescript"],
      detail:
        "a cutting-edge Website to showcase my UI development skills. Experience the seamless functionality of a progressive web app as you connect with others through innovative design and interactive features.",
    },
    {
      title: "Solarius",
      imageUrl: "/images/projects/nextdashboard.png",
      href: "https://dashboard-next13-omega.vercel.app/dashboard",
      stacks: ["Next JS", "Tailwind", "Typescript"],
      detail:
        "Discover our innovative platform highlighting the artistry of my UI skills, specifically showcasing the latest features of Nextjs v13 such as unique layouts",
    },
    {
      title: "Foxclore",
      imageUrl: "/images/projects/foxclore.png",
      href: "https://mohamadazaruddin.github.io/Foxclore-website/",
      stacks: ["HTML", "CSS", "Bootstrap", "JS"],
      detail:
        " A visually stunning platform that showcases my UI skills crafted with HTML, CSS, and Bootstrap, ensuring a responsive and seamless user experience",
    },
    {
      title: "Tambola",
      imageUrl: "/images/projects/tambola.png",
      href: "https://mohamadazaruddin.github.io/Housiee-numbers/",
      stacks: ["HTML", "CSS", "JS"],
      detail:
        "Tambola, an engaging online game that brings the classic fun of Housie to life. Immerse yourself in a world of numbers and excitement as you play and interact with others in this digital rendition",
    },
    {
      title: "Screen Resolution viewer",
      imageUrl: "/images/projects/resolution.png",
      href: "https://mohamadazaruddin.github.io/Screen-Resolution/",
      stacks: ["HTML", "CSS", "JS"],
      detail:
        "a simple and convenient website that displays your current screen resolution. Easily find out the specifications of your screen without even a click",
    },

    {
      title: "Word Slider",
      imageUrl: "/images/projects/wordslider.svg",
      href: "https://mohamadazaruddin.github.io/WordSlider",
      stacks: ["HTML", "CSS", "JS"],
      detail:
        "a nostalgic showcase of my first steps into frontend development. Experience the evolution of my skills and passion for creating visually appealing websites",
    },
    {
      title: "MY First Website",
      imageUrl: "/images/projects/firstwebsite.png",
      href: "https://mohamadazaruddin.github.io/My-First-website/index.html",
      stacks: ["HTML", "CSS", "JS"],
      detail:
        "A simple app that turns your text into a stylish, animated word slider. Enter any text, customize the look, and watch your words slide across the screen",
    },
  ];
  const { push } = useRouter();

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
      className="relative bg-[url('/ct.png')] "
    >
      <div
        style={{
          background: "#00000075",
        }}
        className="py-10"
      >
        <div className="hidden md:block px-[80px]">
          <div
            className="absolute left-[100px] top-[50px] rotate-180 cursor-pointer"
            onClick={() => {
              push("/");
              sessionStorage.setItem("visited", "true");
            }}
          >
            <Arrow height="80px" width="180px" color="#6717d1" />
          </div>

          <h1
            className={`text-[80px] font-semibold text-[#fff] text-right space-x-3 mr-20 leading-[80px]`}
          >
            Projects
          </h1>
          {/* <Projects isAll={true} /> */}

          <div className="grid grid-cols-3 gap-[40px] py-0 mt-20">
            {projects.map((item, i) => (
              <CardContainer className="inter-var py-0" key={i}>
                <CardBody className="bg-[rgba(98,98,98,0.23)] text-[#CCD6F6] backdrop-blur-[17px] border border-[rgba(255,255,255,0.125)] relative group/card w-full h-auto rounded-xl p-6 border ">
                  <CardItem translateZ="100" className="w-full ">
                    <Image
                      src={`${item.imageUrl}`}
                      height="500"
                      width="500"
                      className="h-[250px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-5"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-3"
                  >
                    {item.detail}
                  </CardItem>
                  <div className="flex gap-2 items-center mt-5">
                    {item.stacks.map((stack, i) => (
                      <CardItem
                        as="div"
                        key={i}
                        translateZ="60"
                        style={{
                          "backdrop-filter": "blur(17px) saturate(200%)",
                          "-webkit-backdrop-filter":
                            "blur(17px) saturate(200%)",
                          "background-color": "#ffffffff",
                          color: "#000000",
                          "font-weight": "semi-bold",
                        }}
                        className="px-3 py-1 rounded-full text-sm font-light backdrop-blur-lg border border-white/50 shadow-lg  "
                      >
                        {stack}
                      </CardItem>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={`${item.href}`}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                    >
                      Visit now →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
        <div className="block md:hidden px-5 mt-10 relative">
          <div
            className="absolute left-[20px] top-[9px] rotate-180 cursor-pointer"
            onClick={() => {
              sessionStorage.setItem("visited", "true");
              push("/");
            }}
          >
            <Arrow height="48px" width="48px" color="#6717d1" />
          </div>
          <h1 className={`text-[40px] font-semibold text-[#fff] text-right`}>
            Projects
          </h1>
          {projects.map((item, i) => (
            <CardContainer className="inter-var py-0 mt-5" key={i}>
              <CardBody
                className="bg-[rgba(98,98,98,0.23)]
  text-[#CCD6F6]
  backdrop-blur-[17px] border border-[rgba(255,255,255,0.125)] relative group/card w-full h-auto rounded-xl p-4 border  "
              >
                <CardItem translateZ="100" className="w-full ">
                  <Image
                    src={`${item.imageUrl}`}
                    height="150"
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
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-3"
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
        </div>
      </div>
    </div>
  );
}
