import { useState } from "react";
import { Navbar, MainMint } from "./components";

const App = () => {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="opacity-85 w-full h-full z-10 top-0 left-0 fixed">
      <div className="-z-1 absolute top-0 left-0 right-0 bottom-0 bg-[url('./assets/background/parallax-bg.gif')] bg-cover bg-no-repeat bg-fixed">
        <div className="flex-col items-center justify-center text-white">
          <Navbar accounts={accounts} setAccounts={setAccounts} />
          <MainMint accounts={accounts} />
        </div>
      </div>
    </div>
  );
};

export default App;
