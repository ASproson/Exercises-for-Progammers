import React, { useState } from "react";

export const UserInput = () => {
  const [bill, setBill] = useState<number>();

  const handleBillInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(Number(e.target.value));
  };

  return (
    <div>
      <h3>Bill:</h3>
      <input type="number" min="0" value={bill} onChange={handleBillInput} />
      {/* <p>{bill}</p> */}
    </div>
  );
};

export default UserInput;
