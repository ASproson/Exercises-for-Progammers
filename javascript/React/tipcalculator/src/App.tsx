import React from "react";
import { TipSlider } from "./components/TipSlider";
import { UserInput } from "./components/UserInput";
// import { Total } from "./components/Total";

import "./App.css";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-3xl pt-4">Tip Calculator</h1>
      <UserInput />
      <TipSlider />
      {/* <Total /> */}
    </div>
  );
}

export default App;
