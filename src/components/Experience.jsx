import React from 'react';
import html from '../pics/html.png';
import css from '../pics/css.png';
import github from '../pics/github.png';
import mongodb from '../pics/MongoDB.png';
import javascript from '../pics/javascript.png';
import node from '../pics/node.png';
import reactImage from '../pics/react.png';
import tailwind from '../pics/tailwind.png';
import PostgreSQL from '../pics/PostgreSQL.png';

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: github,
      title: 'GITHUB',
      style: 'shadow-gray-400',
    },
    {
      id: 4,
      src: mongodb,
      title: 'MONGODB',
      style: 'shadow-green-500',
    },
    {
      id: 5,
      src: javascript,
      title: 'JAVASCRIPT',
      style: 'shadow-yellow-500',
    },
    {
      id: 6,
      src: node,
      title: 'NODEJS',
      style: 'shadow-green-800',
    },
    {
      id: 7,
      src: reactImage,
      title: 'REACT',
      style: 'shadow-blue-600',
    },
    {
      id: 8,
      src: tailwind,
      title: 'TAILWIND',
      style: 'shadow-sky-400',
    },
    {
      id: 9,
      src: PostgreSQL,
      title: 'POSTGRESQL',
      style: 'shadow-sky-400',
    },
  ];

  return (
    <div
      name='experience'
      className='bg-gradient-to-b from-gray-800 to-black h-screen w-full '
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>
            Experience
          </p>
          <p className='py-6'>Some of the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=''
                className={`w-20 mx-auto ${id === 9 ? 'w-32' : ''}`}
              />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
