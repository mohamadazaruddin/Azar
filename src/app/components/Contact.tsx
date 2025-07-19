import React, { useState, useRef, ChangeEvent, FormEvent, memo } from "react";
import ky from "ky";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CrossSolid = dynamic(() => import("./Icons/CrossSolid"));
const Arrow = dynamic(() => import("./Icons/Arrow"));

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await ky
        .post(`/api/contact/add-contact`, { json: sendParams })
        .json();

      if (response) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        if (form.current) {
          form.current.reset();
        }
        toast.success("Your message has been sent.", {
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Failed to send message.", {
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="hidden md:block bg-cover bg-no-repeat bg-center">
        <div
        // style={{
        //   background: "#000000b4",
        // }}
        >
          <ToastContainer />
          <div className="relative py-[100px] px-20" id="contact">
            <div className="absolute right-[200px] top-[400px] rotate-180">
              <Arrow height="100px" width="140px" color="#6717d1" />
            </div>
            <div className="absolute left-[100px] top-[250px] rotate-12	">
              <CrossSolid height="50px" width="50px" color="#6717d1" />
            </div>
            <Image
              src="/images/dotstray.svg"
              alt=""
              width={200}
              height={200}
              className="absolute  top-[80px] right-[100px] rotate-90   h-[150px] w-[300px]"
            />
            <h1 className="text-[80px] font-semibold text-[#fff] text-center space-x-3 leading-[80px]">
              Contact Me
            </h1>
            <div className="w-[30%] m-auto mt-[100px]">
              <form onSubmit={handleSubmit} ref={form} className="space-y-4">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#fff] ps-2"
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    placeholder="Enter name here..."
                    onChange={handleChange}
                    required
                    style={{
                      backdropFilter: "blur(17px) saturate(200%)",
                      WebkitBackdropFilter: "blur(17px) saturate(200%)",
                      backgroundColor: "rgba(98, 98, 98, 0.23)",
                      border: "1px solid rgba(255, 255, 255, 0.125)",
                      color: "#CCD6F6",
                    }}
                    className="mt-1 p-2 block w-full h-[50px] text-[#fff] rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#fff] ps-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    placeholder="Enter email here..."
                    onChange={handleChange}
                    required
                    style={{
                      backdropFilter: "blur(17px) saturate(200%)",
                      WebkitBackdropFilter: "blur(17px) saturate(200%)",
                      backgroundColor: "rgba(98, 98, 98, 0.23)",
                      border: "1px solid rgba(255, 255, 255, 0.125)",
                      color: "#CCD6F6",
                    }}
                    className="mt-1 p-2 block w-full h-[50px] text-[#fff] rounded-md "
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#fff] ps-2"
                  >
                    Message:
                  </label>
                  <textarea
                    name="message"
                    rows={8}
                    cols={50}
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter message here..."
                    style={{
                      resize: "none",
                      backdropFilter: "blur(17px) saturate(200%)",
                      WebkitBackdropFilter: "blur(17px) saturate(200%)",
                      backgroundColor: "rgba(98, 98, 98, 0.23)",
                      border: "1px solid rgba(255, 255, 255, 0.125)",
                      color: "#CCD6F6",
                    }}
                    required
                    className="mt-1 p-2 block w-full h-[150px] text-[#fff] rounded-md "
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#6717d1] rounded-full py-2 px-10 text-[16px] w-auto mt-10 hover:translate-x-[10px] ease-out duration-100"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden px-5 mt-10" id="mobContact">
        <h1 className="text-[40px] font-semibold text-[#fff] text-center ">
          Contact Me
        </h1>
        <div className="w-[100%] m-auto mt-[30px]">
          <form onSubmit={handleSubmit} ref={form} className="space-y-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#fff] ps-2"
              >
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="Enter name here..."
                onChange={handleChange}
                style={{
                  backdropFilter: "blur(17px) saturate(200%)",
                  WebkitBackdropFilter: "blur(17px) saturate(200%)",
                  backgroundColor: "rgba(98, 98, 98, 0.23)",
                  border: "1px solid rgba(255, 255, 255, 0.125)",
                  color: "#CCD6F6",
                }}
                required
                className="mt-1 p-2 block w-full h-[50px] text-[#fff] rounded-md  focus:border-none outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#fff] ps-2"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="Enter email here..."
                onChange={handleChange}
                style={{
                  backdropFilter: "blur(17px) saturate(200%)",
                  WebkitBackdropFilter: "blur(17px) saturate(200%)",
                  backgroundColor: "rgba(98, 98, 98, 0.23)",
                  border: "1px solid rgba(255, 255, 255, 0.125)",
                  color: "#CCD6F6",
                }}
                required
                className="mt-1 p-2 block w-full h-[50px] text-[#fff] rounded-md  focus:border-none outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#fff] ps-2"
              >
                Message:
              </label>
              <textarea
                name="message"
                rows={8}
                cols={50}
                id="message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  resize: "none",
                  backdropFilter: "blur(17px) saturate(200%)",
                  WebkitBackdropFilter: "blur(17px) saturate(200%)",
                  backgroundColor: "rgba(98, 98, 98, 0.23)",
                  border: "1px solid rgba(255, 255, 255, 0.125)",
                  color: "#CCD6F6",
                }}
                placeholder="Enter message here..."
                required
                className="mt-1 p-2 block w-full h-[150px] text-[#fff] rounded-md  focus:border-none outline-none"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#6717d1] rounded-full py-1 px-10 text-[16px] w-auto mt-5 hover:translate-x-[10px] ease-out duration-100"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default memo(ContactForm);
