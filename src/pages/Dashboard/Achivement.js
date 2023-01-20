import React from "react";

const Achivement = () => {
  return (
    <div className="grid  grid-cols-3 gap-10 mt-20 m-4 ">
      <div className="card h-96  bg-base-100 drop-shadow-xl shadow-2xl">
        <div className="card-body">
          <h2 className=" text-[#4267CF]  text-5xl font-bold text-center">
            24
          </h2>
          <p className="text-2xl  text-[#22242A] ">Projects</p>
          <div className="flex gap-3 justify-center mb-32 ">
            <button className="btn btn-outline btn-sm">
              {" "}
              <span className="text-xs">Substract</span>{" "}
            </button>
            <button className="btn btn-outline btn-sm  ">
              <span className="text-xs">Add</span>
            </button>
          </div>

          <button className="btn bg-[#4267CF] btn-sm border-0 ">Update</button>
        </div>
      </div>
      <div className="card h-96  bg-base-100 drop-shadow-xl shadow-2xl">
        <div className="card-body">
          <h2 className=" text-[#4267CF]  text-5xl font-bold text-center">
            24
          </h2>
          <p className="text-2xl  text-[#22242A] ">Experts</p>
          <div className="flex gap-3 justify-center mb-32 ">
            <button className="btn btn-outline btn-sm">
              <span className="text-xs">Substract</span>
            </button>
            <button className="btn btn-outline btn-sm  ">
              <span className="text-xs">Add</span>
            </button>
          </div>

          <button className="btn bg-[#4267CF] btn-sm border-0 ">Update</button>
        </div>
      </div>
      <div className="card h-96  bg-base-100 drop-shadow-xl shadow-2xl">
        <div className="card-body">
          <h2 className=" text-[#4267CF]  text-5xl font-bold text-center">
            24
          </h2>
          <p className="text-2xl  text-[#22242A] ">Years</p>
          <div className="flex gap-3 justify-center mb-32 ">
            <button className="btn btn-outline btn-sm">
              <span className="text-xs">Substract</span>
            </button>
            <button className="btn btn-outline btn-sm  ">
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
