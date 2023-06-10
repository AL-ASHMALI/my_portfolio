import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-1/2 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg md:p-5 mx-auto flex flex-col justify-center w-full h-full p-5 pt-16">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-15 md:mt-20">
          I am passionate about the world of technology and the power of software. With a deep curiosity and a desire to create
          meaningful solutions, I have dedicated myself to mastering the art of
          coding and problem-solving. I believe that software development is
          more than just writing lines of code, it's about crafting elegant and
          efficient solutions to real-world challenges. I constantly strive to
          stay on the cutting edge of technology, keeping myself updated with
          the latest trends and best practices in the industry.
        </p>
        <br />
        <p className="text-xl">
          Collaboration and teamwork are fundamental to my approach as a
          developer. I enjoy working with diverse teams, leveraging our
          collective skills and perspectives to build exceptional software
          products. Continuous learning is at the heart of my journey as a
          software developer. I embrace new challenges and see them as
          opportunities for growth. I actively seek out ways to expand my
          knowledge and skill set, always striving to improve my craft.
        </p>
      </div>
    </div>
  );
};

export default About;
