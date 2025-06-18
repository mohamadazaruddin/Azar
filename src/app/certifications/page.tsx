"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/app/components/Icons/Arrow";
import { useRouter } from "next/navigation";

export default function Certifications() {
  const projects = [
    {
      title: "AWS Beginners",
      href: "https://color-fusion.vercel.app",
      imageUrl: "/images/certificates/aws-beginners.jpg",
      detail:
        "Demonstrates foundational knowledge of Amazon Web Services, covering core cloud concepts, basic AWS services, and essential best practices for beginners.",
    },
    {
      title: "Flutter Beginners",
      href: "https://color-fusion.vercel.app",
      imageUrl: "/images/certificates/flutter-beginner.jpg",
      detail:
        "Recognizes foundational skills in Flutter development, including building cross-platform mobile apps, widgets, layouts, and essential Dart programming concepts.",
    },
    {
      title: "UI/UX Beginners",
      href: "https://color-fusion.vercel.app",
      imageUrl: "/images/certificates/uiux-beginners.jpg",
      detail:
        "Highlights foundational understanding of user interface and user experience design principles, wireframing, prototyping, creating, user-friendly digital experiences.",
    },
    {
      title: "Frontend Development",
      href: "https://color-fusion.vercel.app",
      imageUrl: "/images/certificates/frontend.png",
      detail:
        "Demonstrates foundational skills in building user interfaces for websites and web applications, including knowledge of HTML, CSS, JavaScript, and basic responsive design principles.",
    },
    {
      title: "TCS-Young Professional",
      href: "https://color-fusion.vercel.app",
      imageUrl: "/images/certificates/tcsion.jpg",
      detail:
        "Certifies completion of TCS’s program on workplace skills, communication, and basic IT/business knowledge for entry-level roles.",
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
          onClick={() => {
            push("/");
            sessionStorage.setItem("visited", "true");
          }}
        >
          <Arrow height="80px" width="180px" color="#D117B8" />
        </div>

        <h1
          className={`text-[80px] font-semibold text-[#fff] text-right space-x-3 mr-20 leading-[80px]`}
        >
          Certificates
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

                {/* <div className="flex justify-between items-center mt-5">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={`${item.href}`}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Visit now →
                  </CardItem>
                </div> */}
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
          <Arrow height="48px" width="48px" color="#D117B8" />
        </div>
        <h1 className={`text-[40px] font-semibold text-[#fff] text-right`}>
          Certificates
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

              {/* <div className="flex justify-between items-center mt-5">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={`${item.href}`}
                  target="__blank"
                  className=" py-2 rounded-xl text-sm font-normal  text-blue-500"
                >
                  Visit now
                </CardItem>
              </div> */}
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
