import React from "react";

const Card = ({ label, date }) => {
  return (
    <div className="w-[234px] h-[328px] bg-transparent cursor-pointer perspective">
      <div className="relative preserve-3d hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden border-2 border-black w-full h-full rounded-md text-center">
          <p>{label}</p>
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 rounded-md">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

const RoadMap = () => {
  return (
    <div className="flex flex-col snap-start bg-cyan-300 font-vt323 w-screen h-screen">
      <div className="text-center text-5xl mt-5">
        <h1>ROADMAP</h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="h-2/4 w-3/4 justify-center items-center">
          <div className="w-full h-full flex flex-row justify-between py-5 px-10 items-center">
            <Card label="WhiteList Sale" date="1 May 2022" />
            <Card label="Open Beta" date="2 May 2022" />
            <Card label="Sales" date="3 May 2022" />
          </div>
        </div>
        <div className="h-2/4 w-3/4 justify-center items-center">
          <div className="w-full h-full flex flex-row justify-between py-5 px-10 items-center">
            <Card label="Preseason" date="4 May 2022" />
            <Card label="Sales" date="5 May 2022" />
            <Card label="Season 1" date="6 May 2022" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
