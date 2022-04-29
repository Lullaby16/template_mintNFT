import { useState } from "react";
import { Navbar, MainMint, RoadMap, Team, Game } from "./components";

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
