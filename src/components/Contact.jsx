import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            If you want to get in touch, just fill in and submit the form below
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/a85d4918-f4c8-44e4-bf10-a3860c525588"
            className="flex flex-col w-full md:w-1/2"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Lets Chat
            </button>
          </form>
        </div>
        <div className="flex flex:row justify-center space-x-20 text-4xl pt-2 lg:hidden ">
          <a href="https://www.linkedin.com/in/rabie-al-ashmali-264a201b2/">
            <FaLinkedin className="hover:text-blue-800 hover:text-5xl duration-300" />
          </a>
          <a href="mailto:rabiealashmali@gmail.com">
            <HiOutlineMail className="hover:text-blue-300 hover:text-5xl duration-300 " />
          </a>
          <a href="/CV.pdf" download={true}>
            <BsFillPersonLinesFill className="hover:text-5xl hover:text-red-900 duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
