import React from "react";
import { TipSlider } from "./components/TipSlider";
import { UserInput } from "./components/UserInput";
// import { Total } from "./components/Total";

import "./App.css";

function App() {
  const callData = (str: string): void => {
    console.log(str);
  };

  // https://blog.devgenius.io/how-to-pass-data-from-child-to-parent-in-react-33ed99a90f43

  return (
    <div className="text-center">
      <h1 className="text-3xl pt-4">Tip Calculator</h1>
      <UserInput callData={callData} />
      <TipSlider />
      {/* <Total /> */}
    </div>
  );
}

export default App;
