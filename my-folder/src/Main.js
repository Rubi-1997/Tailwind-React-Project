import React from "react";

const Main = () => {
  return (
    <div className="w-auto flex items-center justify-around mt-4 md:mt-32 mb-4 md:mb-32 md:flex-row-reverse flex-col p-2">
      
      <div className="relative">
        <img
          className="rounded-lg  shadow-md shadow-yellow-400 bottom-7"
          src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600"
        ></img>
        <div className="absolute bottom-40 left-20 md:hidden">
        <p className="text-indigo-950 font-bold text-4xl md:text-8xl uppercase w-full md:w-64">
          take delicious foods
        </p>
        <p className=" text-2xl text-indigo-950 flex-wrap w-64">
          substance consisting
        </p>
        </div>
      </div>
      <div className="hidden md:w-52 md:block">
        <p className="text-white font-bold text-4xl md:text-8xl uppercase w-full md:w-64">
          take delicious foods
        </p>
        <p className=" text-2xl text-slate-100 flex-wrap w-64">
          substance consisting
        </p>
      </div>
    </div>
  );
};

export default Main;
