import React from "react";

const Game = () => {
  return (
    <div className="flex flex-col snap-start bg-cyan-200 font-vt323 w-screen h-screen justify-center">
      <div className="flex items-center justify-center">
        <button className="text-5xl bg-[#D65170] rounded shadow-md cursor-pointer py-2 px-4">
          <p>Play Now</p>
        </button>
      </div>
    </div>
  );
};

export default Game;
