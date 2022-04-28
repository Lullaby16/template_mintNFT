import { useState } from "react";
import { Navbar, MainMint, RoadMap } from "./components";

const App = () => {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="text-black h-screen w-screen snap-y snap-mandatory overflow-scroll">
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <MainMint accounts={accounts} />
      <RoadMap />
    </div>
  );
};

export default App;
