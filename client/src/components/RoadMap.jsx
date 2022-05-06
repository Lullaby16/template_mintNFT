import React from "react";

const Card = ({ label, date, desc }) => {
  return (
    <div className="w-[234px] h-[328px] bg-transparent cursor-pointer perspective">
      <div className="relative preserve-3d hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden border-2 border-black w-full h-full rounded-md text-center text-2xl">
          <p>{label}</p>
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full flex flex-col bg-gray-100 rounded-md justify-center items-center text-2xl px-3">
          <p>{date}</p>
          <p>{desc}</p>
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
            <Card
              label="WhiteList Sale"
              date="1 May 2022"
              desc="You can stay tune in our social media and discord to join Whitelist Sale."
            />
            <Card
              label="Open Beta"
              date="2 May 2022"
              desc="WhiteList people can join our Open Beta for AOX TCG Gameplay and will receive gift at the end of event."
            />
            <Card
              label="Sales"
              date="3 May 2022"
              desc="We will open 200 NFT for Sales Wave 1. So stay tune and don't miss it."
            />
          </div>
        </div>
        <div className="h-2/4 w-3/4 justify-center items-center">
          <div className="w-full h-full flex flex-row justify-between py-5 px-10 items-center">
            <Card
              label="Preseason"
              date="4 May 2022"
              desc="We will open preseason so you can practice the gameplay and ready for Season 1. Top 3 player will get gift at the end of event."
            />
            <Card
              label="Sales"
              date="5 May 2022"
              desc="We will open 300 NFT for Sales Wave 2. So stay tune and don't miss it."
            />
            <Card
              label="Season 1"
              date="6 May 2022"
              desc="This is the moment you can climb the leaderboard and be The Champion. "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
