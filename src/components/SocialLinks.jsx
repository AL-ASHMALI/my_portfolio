import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={35} />
        </>
      ),
      href: "https://www.linkedin.com/in/rabie-al-ashmali-264a201b2/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Email <HiOutlineMail size={35} />
        </>
      ),
      href: "mailto:rabiealashmali@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          CV <BsFillPersonLinesFill size={35} />
        </>
      ),
      href: "/CV.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14  px-4 bg-gray-400 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
