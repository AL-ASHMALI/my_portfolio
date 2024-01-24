import React from 'react';
import expenseTracker from '../pics/portfolio/Expense-tracker.png';
import studyBuddies from '../pics/portfolio/studyBuddies.png';

import calculator from '../pics/portfolio/Calculator.png';
import Sama from '../pics/portfolio/Sama.png';
import PortfolioCard from './PortfolioCard';
import codeyourfuture from '../pics/portfolio/codeyourfuture.png';

function Portfolio() {
  const projects = [
    {
      id: 1,
      src: expenseTracker,
      link: 'https://expense-tracker-rk.onrender.com',
      title: 'Expense Tracker',
      description: 'Help track and monitor your expenses',
    },
    {
      id: 2,
      src: Sama,
      link: 'https://the-shop-omw9.onrender.com',
      title: 'SAMA',
      description: 'eCommerce website for great and smooth shopping experience',
    },
    {
      id: 3,
      src: codeyourfuture,
      link: 'https://codeyourfuture.io/',
      title: 'CodeYourFuture',
      description: 'Training for refugees and disadvantaged people',
    },
    {
      id: 4,
      src: studyBuddies,
      link: 'https://github.com/AL-ASHMALI/hugsforbugs',
      title: 'Study Buddy',
      description: 'If you have trouble studying alone, this website will help',
    },
    {
      id: 5,
      src: calculator,
      link: 'https://just-a-calculator.netlify.app',
      title: 'Just a Calculator',
      description: 'this is better than your calculator',
    },
  ];

  function handleClick(link) {
    window.open(link, '_blank');
  }

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-24'
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
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              handleCodeClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
