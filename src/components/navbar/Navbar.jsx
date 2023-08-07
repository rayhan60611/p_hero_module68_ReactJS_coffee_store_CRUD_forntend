// import React from 'react';

const Navbar = () => {
  return (
    <div className="mb-16">
      <div className="h-[100px] w-full relative">
        <img
          className="h-full w-full object-cover absolute z-10"
          src="/public/images/more/15.jpg"
          alt=""
        />
        <div className="absolute z-20 flex justify-center items-center gap- text-white w-full h-full">
          <img className="w-16" src="/public/images/more/logo1.png" alt="" />
          <h1 className="text-4xl font-bold text-[#C99D62]">
            Co<span className="text-white">ff</span>ee S
            <span className="text-white">to</span>re
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
