import React from "react";

export default function Skills() {
  const stacksDetails = [
    {
      img: "/images/figma.png",
      height: 40,
      width: 40,
    },
    {
      img: "/images/react.png",
      height: 60,
      width: 60,
    },
    {
      img: "/images/react.png",
      height: 40,
      width: 40,
    },
    {
      img: "/images/react.png",
      height: 30,
      width: 30,
    },
    {
      img: "/images/react.png",
      height: 40,
      width: 40,
    },
    {
      img: "/images/react.png",
      height: 40,
      width: 40,
    },
    {
      img: "/images/react.png",
      height: 40,
      width: 40,
    },
    {
      img: "/images/react.png",
      height: 40,
      width: 40,
    },
    {
      img: "/images/react.png",
      height: 40,
      width: 40,
    },
  ];
  return (
    <div className="flex  justify-center">
      <div className="grid grid-cols-8 gap-10	">
        {stacksDetails.map((item, i) => (
          <div
            key={i}
            className="flex justify-center items-center"
            style={{
              width: item.width + 10,
              height: item.height + 10,
              backgroundColor: "#251C31",
              borderRadius: "50%", // make it a circle
            }}
          >
            <img
              src={item.img}
              style={{
                width: `${item.width} !important `,
                height: `${item.height} !important `,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
