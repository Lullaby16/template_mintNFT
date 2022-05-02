import React, { useState } from "react";
import { motion } from "framer-motion";

const RoadMap = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col snap-start bg-cyan-300 font-vt323 w-screen h-screen">
      <div className="text-center text-5xl mt-5">
        <h1>ROADMAP</h1>
      </div>
      <div className="flex w-full h-full bg-white">
        <div className="w-2/4">1</div>
        <div>2</div>
      </div>
    </div>
  );
};

export default RoadMap;
