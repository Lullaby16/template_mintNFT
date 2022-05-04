import React from "react";
import Profile from "../assets/card/Profile.png";

const Team = () => {
  return (
    <div className="flex flex-col snap-start bg-cyan-100 font-vt323 w-screen h-screen">
      <div className="text-center text-5xl mt-5">
        <h1>TEAM</h1>
      </div>
      <div className="flex w-full h-full items-center justify-between px-10">
        <div>
          <p className="text-center mb-5 text-3xl">Founder</p>
          <img src={Profile} />
          <p className="text-center mt-5 text-3xl">Lullaby</p>
        </div>
        <div>
          <p className="text-center mb-5 text-3xl">Developers</p>
          <img src={Profile} />
          <p className="text-center mt-5 text-3xl">Lullaby</p>
        </div>
        <div>
          <p className="text-center mb-5 text-3xl">Marketing</p>
          <img src={Profile} />
          <p className="text-center mt-5 text-3xl">Lullaby</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
