import React, { useState } from "react";

const QuantityComponent = () => {
  const [val, setVal] = useState(1);

  const handleIncrement = () => {
    setVal(val + 1);
  };
  const handleDecrement = () => {
    if (val <= 0) {
      setVal(0);
    } else {
      setVal(val - 1);
    }
  };
  return (
    <div>
      <button
        className="border min-w-[30px] rounded-sm"
        onClick={handleIncrement}
      >
        +
      </button>
      <input
        type="text"
        className="max-w-[30px] text-center border"
        placeholder="1"
        value={val}
        id="val"
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        className="border min-w-[30px] rounded-sm"
        onClick={handleDecrement}
      >
        -
      </button>
    </div>
  );
};

export default QuantityComponent;
