import React from "react";
import karma from "../pics/portfolio/karma.png";
import tv from "../pics/portfolio/shows-movies.png";
import studyBuddies from "../pics/portfolio/studyBuddies.png";
import urlShortener from "../pics/portfolio/url-shortener.png";
import videoRecommendation from "../pics/portfolio/Video-Recommendation.png";

function Portfolio() {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Check out some of the work I've done right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div>
            <img src={tv} alt="" />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
