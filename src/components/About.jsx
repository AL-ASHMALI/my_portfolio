import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          itaque corporis aut dignissimos. Nulla provident eveniet voluptas
          facere non, aperiam laborum eligendi sunt mollitia, et sapiente
          corrupti necessitatibus officiis, a quod. Qui non totam dolor,
          suscipit sed vel voluptate reprehenderit asperiores ea cupiditate
          ipsam repudiandae laboriosam odit dolores est consequatur sapiente
          fuga ducimus consequuntur impedit autem magnam. Accusamus, commodi
          quam?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          nemo aliquam sint dolorum vero. Unde, laboriosam vel exercitationem
          quibusdam magnam autem expedita. Ducimus aliquid similique tenetur
          expedita debitis quis doloribus nesciunt minima sequi soluta, non hic
          quisquam facere quas nemo itaque unde. Illum, dicta maxime. Vel
          dolorum enim commodi error.
        </p>
      </div>
    </div>
  );
};

export default About;
