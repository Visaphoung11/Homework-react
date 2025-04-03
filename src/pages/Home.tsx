import React from "react";

const Home: React.FC = () => {
  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
          {/* Left Content */}
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            {/* Line Decoration */}
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>

            {/* Title */}
            <h1 className="font-bold uppercase text-6xl sm:text-8xl leading-none dark:text-white text-gray-800">
              Be on
              <span className="text-5xl sm:text-7xl block">Time</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-4">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>

            {/* Buttons */}
            <div className="flex mt-8">
              <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400 transition duration-300"
              >
                Get started
              </a>
              <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md transition duration-300"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img
              src="https://www.tailwind-kit.com/images/object/10.png"
              alt="Hero Image"
              className="max-w-xs md:max-w-sm m-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
