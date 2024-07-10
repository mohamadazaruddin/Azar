"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { PinContainer } from "../../components/ui/3d-pin";
import Projects from "@/components/Projects";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/components/Icons/Arrow";
import { useRouter } from "next/navigation";

export default function Project() {
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
        "A web app named Movies Hub that allows users to search for movies, watch trailers, and view ratings of each movie. The app also provides additional information like cast, directors, plot summaries, and user reviews to help users",
    },
    {
      title: "EMS",
      imageUrl: "/images/projects/ems.svg",
      href: "https://ems-ivory.vercel.app",
      detail:
        "An employee management system named EMS is designed to track employees in an organization. With EMS, you can view detailed information about each employee, including their profiles, roles, project ,team and chapters ",
    },
    {
      title: "UNIKA",
      imageUrl: "/images/projects/unika.svg",
      href: "https://mohamadazaruddin.github.io/UNIKA-WEBSITE",
      detail:
        "A web app for showcasing personalized UI animations made using HTML, CSS, Bootstrap, and JS. View a collection of top UI animations, browse recently created animations, and explore detailed information about each animation. ",
    },
    {
      title: "Inscribe",
      imageUrl: "/images/projects/inscribe.png",
      href: "https://inscribe-alpha.vercel.app",
      detail:
        "A social media platform that lets users express their thoughts and emotions through posts, and engage with others by liking and commenting on their content. Join Inscribe today and connect with people through the power of words.",
    },
    {
      title: "Pizza Shop",
      imageUrl: "/images/projects/pizza.png",
      href: "https://pizza-app-alpha.vercel.app",
      detail:
        "A social media platform that lets users express their thoughts and emotions through posts, and engage with others by liking and commenting on their content. Join Inscribe today and connect with people through the power of words.",
    },
    {
      title: "Foxclore",
      imageUrl: "/images/projects/foxclore.png",
      href: "https://mohamadazaruddin.github.io/Foxclore-website/",
      detail:
        "A social media platform that lets users express their thoughts and emotions through posts, and engage with others by liking and commenting on their content. Join Inscribe today and connect with people through the power of words.",
    },
    {
      title: "Tambola",
      imageUrl: "/images/projects/tambola.png",
      href: "https://mohamadazaruddin.github.io/Housiee-numbers/",
      detail:
        "A social media platform that lets users express their thoughts and emotions through posts, and engage with others by liking and commenting on their content. Join Inscribe today and connect with people through the power of words.",
    },
    {
      title: "Screen Resolution viewer",
      imageUrl: "/images/projects/resolution.png",
      href: "https://mohamadazaruddin.github.io/Screen-Resolution/",
      detail:
        "A social media platform that lets users express their thoughts and emotions through posts, and engage with others by liking and commenting on their content. Join Inscribe today and connect with people through the power of words.",
    },

    {
      title: "MY First Website",
      imageUrl: "/images/projects/firstwebsite.png",
      href: "https://mohamadazaruddin.github.io/My-First-website/index.html",
      detail:
        "A social media platform that lets users express their thoughts and emotions through posts, and engage with others by liking and commenting on their content. Join Inscribe today and connect with people through the power of words.",
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
      className="relative bg-[url('/images/bg.svg')] py-10 "
    >
      <div className="hidden md:block px-[80px]">
        <div
          className="absolute left-[100px] top-[50px] rotate-180 cursor-pointer"
          onClick={() => push("/")}
        >
          <Arrow height="80px" width="180px" color="#D117B8" />
        </div>

        <h1
          className={`text-[80px] font-semibold text-[#fff] text-right space-x-3 mr-20 leading-[80px]`}
        >
          All projects
        </h1>
        {/* <Projects isAll={true} /> */}

        <div className="grid grid-cols-3 gap-[40px] py-0 mt-20">
          {projects.map((item, i) => (
            <CardContainer className="inter-var py-0" key={i}>
              <CardBody className="bg-black-50 relative group/card   dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border  ">
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
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.detail}
                </CardItem>

                <div className="flex justify-between items-center mt-5">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={`${item.href}`}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
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
          onClick={() => push("/")}
        >
          <Arrow height="48px" width="48px" color="#D117B8" />
        </div>
        <h1 className={`text-[40px] font-semibold text-[#fff] text-right`}>
          All projects
        </h1>
        {projects.map((item, i) => (
          <CardContainer className="inter-var py-0 mt-5" key={i}>
            <CardBody className="bg-black-50 relative group/card   dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border  ">
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
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
  );
}
