import React from "react";

const Subheader = () => {
  return (
    <div className="bg-indigo-900 md:p-16 p-4">
      <div className="flex items-center justify-center">
        <div>
          <p className="text-white font-bold text-2xl md:text-4xl ">choose fooder</p>
          <div className="flex items-center justify-center">
            <p className="w-36  border-b-4 border-yellow-500 mt-4 rounded-2xl"></p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-evenly gap-5 mt-10">
        <div className="bg-white w-64 md:w-48 rounded-2xl">
            <img className="w-64 h-46 " src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <p className="p-4 text-indigo-950 text-xl">lorem img elements must have an alt prop, either with meaningful text,</p>
        </div>
        
        <div className="bg-white w-64 md:w-48 rounded-2xl">
            <img className="" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <p className="p-4 text-indigo-950 text-xl">lorem img elements must have an alt prop, either with meaningful text,</p>
        </div>
        <div className="bg-white w-64 md:w-48 rounded-2xl">
            <img className="w-64 md:w-48 h-46 " src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <p className="p-4 text-indigo-950 text-xl">lorem img elements must have an alt prop, either with meaningful text,</p>
        </div>

        <div className="bg-white w-64 md:w-48 rounded-2xl">
            <img className="w-64 md:w-48 h-46 " src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <p className="p-4 text-indigo-950 text-xl">lorem img elements must have an alt prop, either with meaningful text,</p>
            
        </div>
      </div>
    </div>
  );
};

export default Subheader;
