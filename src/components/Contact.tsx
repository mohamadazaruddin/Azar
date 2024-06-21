import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import ky from "ky";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
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
        alert("Form submitted. Your message has been sent.");
      }
    } catch (error) {
      console.error("Failed to send message", error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="relative py-[100px] px-20" id="projects">
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
              className="mt-1 p-2 block w-full h-[50px] text-[#fff] rounded-md bg-[#2d0b37]"
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
              className="mt-1 p-2 block w-full h-[50px] text-[#fff] rounded-md bg-[#2d0b37]"
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
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter message here..."
              required
              className="mt-1 p-2 block w-full h-[150px] text-[#fff] rounded-md bg-[#2d0b37]"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-12 bg-[#D117B8] text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
