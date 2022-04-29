import React from "react";
import Profile from "../assets/card/Profile.png";

const Team = () => {
  return (
    <div className="flex flex-col snap-start bg-cyan-100 font-vt323 w-screen h-screen">
      <div className="text-center text-5xl mt-5">
        <h1>TEAM</h1>
      </div>
      <div className="flex w-full h-full items-center justify-center">
        <div>
          <p className="text-center mb-5 text-3xl">Founder</p>
          <img src={Profile} className="" />
          <p className="text-center mt-5 text-3xl">Lullaby</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
