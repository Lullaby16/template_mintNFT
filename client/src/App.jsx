import { useState } from "react";
import { Navbar, MainMint } from "./components";

const App = () => {
  const [accounts, setAccount] = useState([]);

  return (
    <div className="App">
      <Navbar accounts={accounts} setAccount={setAccount} />
      <MainMint accounts={accounts} setAccount={setAccount} />
    </div>
  );
};

export default App;
