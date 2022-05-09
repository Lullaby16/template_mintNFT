import { useState } from "react";
import { Navbar, MainMint, RoadMap, Team, Game } from "./components";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="text-black h-screen w-screen snap-y snap-mandatory overflow-scroll">
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <MainMint accounts={accounts} />
      <RoadMap />
      <Game />
      <Team />
    </div>
  );
};

export default App;
