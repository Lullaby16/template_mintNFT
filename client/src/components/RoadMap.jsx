import React from "react";

const RoadMap = () => {
  return (
    <div className="flex flex-col snap-start bg-cyan-300 font-vt323 w-screen h-screen">
      <div className="text-center text-5xl mt-5">
        <h1>ROADMAP</h1>
      </div>
      <div className="flex flex-col w-full h-full justify-between items-center p-10">
        <div className="w-full flex text-black p-5 justify-between">
          <div className="w-60 h-40 border-2 border-black rounded text-center">
            <p>White List Sale</p>
          </div>
          <div className="w-60 h-40 border-2 border-black rounded text-center">
            <p>Open Beta</p>
          </div>
          <div className="w-60 h-40 border-2 border-black rounded text-center">
            <p>Sales</p>
          </div>
        </div>
        <div className="w-full flex text-black p-5 justify-between">
          <div className="w-60 h-40 border-2 border-black rounded text-center">
            <p>Season 1</p>
          </div>
          <div className="w-60 h-40 border-2 border-black rounded text-center">
            <p>Sales</p>
          </div>
          <div className="w-60 h-40 border-2 border-black rounded text-center">
            <p>Preseason</p>
          </div>
        </div>
        <div className="w-full flex text-black p-5 justify-between">
          <div className="w-60 h-40 border-2 border-black rounded text-center">
            <p>Feedback</p>
          </div>
          <div className="w-60 h-40 border-2 border-black rounded text-center">
            <p>Reward</p>
          </div>
          <div className="w-60 h-40 border-2 border-black rounded text-center">
            <p>Update Quality Life</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
