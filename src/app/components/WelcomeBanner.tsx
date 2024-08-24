import React, { memo, useEffect, useState } from "react";

const WelcomeBanner = (props: any) => {
  const [welcomeText, setWelcomeText] = useState("");
  const names = [
    "bonjour",
    "ciao",
    "hallo",
    "привет",
    "こんにちは",
    "你好",
    "안녕하세요",
    "saluton",
    "merhaba",
    "नमस्ते",
    "सुप्रभात",
    "สวัสดี",
    "hei",
    "aloha",
    "שלום",
    "हाय",
    "வணக்கம்",
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
    "გამარჯობა",
    "سلام",
    "שלום",
    "ahoj",
    "szia",
    "salve",
    "kaixo",
    "Hola",
    "Hello",
    "Namaste",
  ];
  let index = 0;
  function displayNames() {
    if (index < names.length) {
      setWelcomeText(names[index]);
      index++;
      setTimeout(displayNames, 4000 / names.length);
    }
  }
  useEffect(() => {
    displayNames();
  }, []);

  return (
    <>
      <div
        className={` ${
          props.welcomeBanner ? "h-full" : "h-0 overflow-hidden"
        } w-full bg-black flex items-center ease-in duration-200 absolute z-[1000] top-0 left-0 right-0 bottom-0 justify-center text-[32px] sm:text-md`}
      >
        {welcomeText}
      </div>
    </>
  );
};
export default memo(WelcomeBanner);
