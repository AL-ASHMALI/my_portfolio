import React from 'react';
import expenseTracker from '../pics/portfolio/Expense-tracker.png';
import tv from '../pics/portfolio/shows-movies.png';
import studyBuddies from '../pics/portfolio/studyBuddies.png';
import urlShortener from '../pics/portfolio/url-shortener.png';
import videoRecommendation from '../pics/portfolio/Video-Recommendation.png';
import calculator from '../pics/portfolio/Calculator.png';

function Portfolio() {
  const projects = [
    {
      id: 1,
      src: expenseTracker,
      codeLink: 'https://github.com/AL-ASHMALI/Expense-tracker',
      demoLink: 'https://expense-tracker-rk.onrender.com',
    },
    {
      id: 2,
      src: tv,
      codeLink: 'https://github.com/AL-ASHMALI/tv-show-dom-project',
      demoLink: 'https://cyf-alashmali-tv.netlify.app',
    },
    {
      id: 3,
      src: studyBuddies,
      codeLink: 'https://github.com/PakizeBozkurt/hugsforbugs',
      demoLink: 'https://starter-kit-0qci.onrender.com/',
    },
    {
      id: 4,
      src: urlShortener,
      codeLink: 'https://github.com/AL-ASHMALI/full-stack-url-shortener',
    },
    {
      id: 5,
      src: videoRecommendation,
      codeLink: 'https://github.com/AL-ASHMALI/Full-Stack-Project-Assessment',
    },
    {
      id: 6,
      src: calculator,
      codeLink: 'https://github.com/AL-ASHMALI/just_a_calculator',
      demoLink: 'https://just-a-calculator.netlify.app/',
    },
  ];

  function handleDemoClick(demoLink) {
    window.open(demoLink, '_blank');
  }

  function handleCodeClick(codeLink) {
    window.open(codeLink, '_blank');
  }

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg md:p-5 mx-auto flex flex-col justify-center w-full h-full p-5 pt-11 '>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>
            Check out some of the work I've done right here
          </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(({ id, src, codeLink, demoLink }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=''
                className='rounded-md duration-200 hover:scale-105 w-full h-auto'
              />
              <div className='flex items-center justify-center'>
                <button
                  onClick={() => handleCodeClick(codeLink)}
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                >
                  Code
                </button>
                <button
                  onClick={() => handleDemoClick(demoLink)}
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                >
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
