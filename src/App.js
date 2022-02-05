import "./App.css";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { getLedger, getPool, runSimulation } from "./script";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import MakeTransaction from "./Components/MakeTransaction";

function App() {
  const dispatch = useDispatch();
  runSimulation();
  let Pool = getPool();
  let ledger = getLedger();

  console.log(Pool);
  console.log(ledger);

  useEffect(() => {
    dispatch({
      type: "SET_POOL",
      Pool: Pool,
    });
    dispatch({
      type: "SET_LEDGER",
      Ledger: ledger,
    });
  });

  return (
    <div className="app">
      <Navbar />
      <Products />
      <MakeTransaction />
    </div>
  );
}

export default App;
