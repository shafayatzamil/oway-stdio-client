import React, { useState } from "react";

const Array = () => {
  const [increment, setIncrement] = useState(0);
  const handleIncrement = () => {};
  const handleDecrement = () => {};
  return (
    <div>
      <div className="card h-96  bg-base-100 drop-shadow-xl shadow-2xl">
        <div className="card-body">
          <h2 className=" text-[#4267CF]  text-5xl font-bold text-center">
            {increment}
          </h2>
          <p className="text-2xl  text-[#22242A] ">Projects</p>
          <div className="flex gap-3 justify-center mb-32 ">
            <button
              onClick={handleDecrement}
              className="btn btn-outline btn-sm"
            >
              {" "}
              <span className="text-xs">Substract</span>{" "}
            </button>
            <button
              onClick={handleIncrement}
              className="btn btn-outline btn-sm  "
            >
              <span className="text-xs">Add</span>
            </button>
          </div>

          <button className="btn bg-[#4267CF] btn-sm border-0 ">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Array;
