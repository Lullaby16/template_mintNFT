import React, { useState } from "react";
import { motion } from "framer-motion";

const RoadMap = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col snap-start bg-cyan-300 font-vt323 w-screen h-screen">
      <div className="text-center text-5xl mt-5">
        <h1>ROADMAP</h1>
      </div>
      <div className="flex flex-col w-full h-full justify-between items-center p-10">
        <div className="w-full flex text-black p-5 justify-between">
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className={`w-60 ${
              isOpen === "true" ? "h-20" : "h-60"
            } border-2 border-black rounded p-5`}
          >
            <motion.p className="text-center">White List Sale</motion.p>
            {isOpen && (
              <motion.div className="mt-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
            )}
          </motion.div>
          <motion.div className="w-60 h-60 border-2 border-black rounded p-5">
            <motion.p className="text-center">Open Beta</motion.p>
            <motion.div className="mt-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="w-60 h-60 border-2 border-black rounded p-5">
            <motion.p className="text-center">Sales</motion.p>
            <motion.div className="mt-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full flex text-black p-5 justify-between">
          <motion.div className="w-60 h-40 border-2 border-black rounded text-center">
            <motion.p>Season 1</motion.p>
            <motion.div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="w-60 h-40 border-2 border-black rounded text-center">
            <motion.p>Sales</motion.p>
            <motion.div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="w-60 h-40 border-2 border-black rounded text-center">
            <motion.p>Preseason</motion.p>
            <motion.div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full flex text-black p-5 justify-between">
          <motion.div className="w-60 h-40 border-2 border-black rounded text-center">
            <motion.p>Feedback</motion.p>
            <motion.div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="w-60 h-40 border-2 border-black rounded text-center">
            <motion.p>Reward</motion.p>
            <motion.div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="w-60 h-40 border-2 border-black rounded text-center">
            <motion.p>Update Quality Life</motion.p>
            <motion.div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
