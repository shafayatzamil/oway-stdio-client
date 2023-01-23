import React, { useState } from "react";
import Array from "../Array";

const Achivement = () => {
  const [increment, setIncrement] = useState(0);
  const [expert, setExpert] = useState(0);
  const [year, setYear] = useState(0);

  if (increment < 0) {
    return setIncrement(0);
  }
  if (expert < 0) {
    return setExpert(0);
  }
  if (year < 0) {
    return setYear(0);
  }
  return (
    <div className="grid  grid-cols-3 gap-10 mt-20 m-4 ">
      <div className="card h-96  bg-base-100 drop-shadow-xl shadow-2xl">
        <div className="card-body">
          <h2 className=" text-[#4267CF]  text-5xl font-bold text-center">
            {increment}
          </h2>
          <p className="text-2xl  text-[#22242A] ">Projects</p>
          <div className="flex gap-3 justify-center mb-32 ">
            <button
              onClick={() => setIncrement((e) => e - 1)}
              className="btn btn-outline btn-sm"
            >
              {" "}
              <span className="text-xs">Substract</span>{" "}
            </button>
            <button
              onClick={() => setIncrement((e) => e + 1)}
              className="btn btn-outline btn-sm  "
            >
              <span className="text-xs">Add</span>
            </button>
          </div>

          <button className="btn bg-[#4267CF] btn-sm border-0 ">Update</button>
        </div>
      </div>
      <div className="card h-96  bg-base-100 drop-shadow-xl shadow-2xl">
        <div className="card-body">
          <h2 className=" text-[#4267CF]  text-5xl font-bold text-center">
            {expert}
          </h2>
          <p className="text-2xl  text-[#22242A] ">Experts</p>
          <div className="flex gap-3 justify-center mb-32 ">
            <button
              onClick={() => setExpert((e) => e - 1)}
              className="btn btn-outline btn-sm"
            >
              <span className="text-xs">Substract</span>
            </button>
            <button
              onClick={() => setExpert((e) => e + 1)}
              className="btn btn-outline btn-sm  "
            >
              <span className="text-xs">Add</span>
            </button>
          </div>

          <button className="btn bg-[#4267CF] btn-sm border-0 ">Update</button>
        </div>
      </div>
      <div className="card h-96  bg-base-100 drop-shadow-xl shadow-2xl">
        <div className="card-body">
          <h2 className=" text-[#4267CF]  text-5xl font-bold text-center">
            {year}
          </h2>
          <p className="text-2xl  text-[#22242A] ">Years</p>
          <div className="flex gap-3 justify-center mb-32 ">
            <button
              onClick={() => setYear((e) => e - 1)}
              className="btn btn-outline btn-sm"
            >
              <span className="text-xs">Substract</span>
            </button>
            <button
              onClick={() => setYear((e) => e + 1)}
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

export default Achivement;
