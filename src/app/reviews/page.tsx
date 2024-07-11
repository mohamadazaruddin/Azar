"use client";
import ky from "ky";
import React, { useEffect, useState } from "react";

export default function Reviews() {
  const [comments, setComments] = useState<any>();
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const data = await ky("/api/user/get-view").json();
      const comments = await ky("/api/contact/get-comments").json();
      setData(data);
      setComments(comments);
    } catch (error) {
      console.error("An error occurred while fetching data", error);
    }
  };
  return (
    <div className="p-10">
      {data && (
        <>
          <div className="flex gap-4 items-center">
            <div className="text-md">Views :</div>
            <div className="text-2xl">{data?.length}</div>
          </div>
          <div>
            {data.map((item: any, i: number) => (
              <div key={i}>
                <div className="p-4 mt-4 text-black bg-[#ed9a1f] rounded-sm ">
                  <div className="text-md">UserAgent : {item.userAgent}</div>
                  <div className="text-md">ScreenSize : {item.screenSize}</div>
                  <div className="text-md">
                    BrowserLanguage : {item.browserLanguage}
                  </div>
                  <div className="text-md">
                    BrowserPlatform : {item.browserPlatform}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {comments && (
        <>
          {" "}
          <div className="flex gap-4 items-center mt-[100px]">
            <div className="text-md">Comments :</div>
            <div className="text-2xl">{comments?.length}</div>
          </div>
          <div>
            {comments.map((item: any, i: number) => (
              <div key={i}>
                <div className="p-4 mt-4 text-black bg-[#ed9a1f] rounded-sm ">
                  <div className="text-md">name : {item.name}</div>
                  <div className="text-md">email : {item.email}</div>
                  <div className="text-md">message : {item.message}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
