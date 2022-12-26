import React, { useState } from "react";

export const TipSlider = () => {
  const [rangeValue, setRangeValue] = useState(15);

  return (
    <div className="pt-4">
      <input
        type="range"
        min={5}
        max={20}
        value={rangeValue}
        onChange={(e) => setRangeValue(Number(e.target.value))}
      />
      <p>How was your service?</p>
      <p>{rangeValue}</p>
    </div>
  );
};

export default TipSlider;
