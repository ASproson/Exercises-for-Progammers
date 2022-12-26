import React, { useState } from "react";

export const Total = () => {
  const tipCalculator = (bill: number, tip: number): number => {
    return bill + bill * (tip / 100);
  };

  return (
    <div>
      <h2>Total:</h2>
    </div>
  );
};

export default Total;
