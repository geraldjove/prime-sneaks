import React, { useEffect, useState } from "react";

const QuantityComponent = ({ quantity, OnQuantityChange }) => {
  const [val, setVal] = useState(quantity);

  useEffect(() => {
    setVal(quantity);
  }, [quantity]);

  const handleIncrement = () => OnQuantityChange(val + 1);
  const handleDecrement = () => OnQuantityChange(val > 0 ? val - 1 : 0);

  return (
    <div>
      <button
        className="border min-w-[30px] rounded-sm bg-white"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        type="text"
        className="max-w-[30px] text-center border"
        value={val}
        id="val"
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          if (!isNaN(value)) {
            setVal(value);
          }
        }}
      />
      <button
        className="border min-w-[30px] rounded-sm bg-white"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default QuantityComponent;
