import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg md:p-5 mx-auto flex flex-col justify-center w-full h-full p-5 pt-11'>
        <div className='pt-16'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-15 md:mt-20'>
          Passionate about technology and software's transformative power, I
          immerse myself in coding, driven by curiosity and a quest for
          impactful solutions. For me, software development transcends mere code
          it's about elegantly solving real-world problems. Remaining at tech's
          forefront fuels my pursuit, staying updated on industry trends and
          practices. Collaborating within diverse teams excites me, pooling our
          skills for exceptional software. Embracing challenges as avenues for
          growth, I'm committed to continuous learning, constantly refining my
          expertise in this ever-evolving field.
        </p>
      </div>
    </div>
  );
};

export default About;
