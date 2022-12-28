import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [rangeValue, setRangeValue] = useState(15);
  const [bill, setBill] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const handleBillInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(Number(e.target.value));
  };

  const tipCalculator = (bill: number, tip: number): number => {
    return bill + bill * (tip / 100);
  };

  useEffect(() => {
    setTotal(tipCalculator(bill, rangeValue));
  }, [rangeValue, bill]);

  return (
    <div className="text-center pt-[100px]">
      <h1 className="text-3xl pt-4 font-bold">Tip Calculator</h1>
      <div className="pt-8">
        <h2 className="text-xl font-bold pb-2">Bill:</h2>
        <input
          type="number"
          min="0"
          value={bill ? bill : 0}
          onChange={handleBillInput}
          className="border-[1px] border-black rounded-md px-2"
        />
      </div>
      <div className="pt-8">
        <h2 className="font-bold text-xl pb-2">How was your service?</h2>
        <input
          type="range"
          min={5}
          max={20}
          value={rangeValue}
          onChange={(e) => setRangeValue(Number(e.target.value))}
        />
        <p className="text-lg font-bold">{rangeValue}</p>
      </div>
      <div className="pt-8">
        <h2 className="font-bold text-xl pb-2">Total:</h2>
        <p className="font-bold text-lg">{total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
