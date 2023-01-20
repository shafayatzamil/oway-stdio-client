import React from "react";

const Presence = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-6  drop-shadow-2xl">
      {/* card 1 */}
      <div className="card shadow-xl">
        <div className="card-body">
          <label htmlFor="my-modal-6" className="">
            <h2 className="text-4xl">+</h2>
            <p className="text-xl">Add Presence </p>
          </label>
        </div>
      </div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box px-12">
          <div className="flex  justify-between items-center">
            {" "}
            <h2 className="text-2xl">Add Online Presence</h2>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="">
                <button className="btn btn-circle btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </label>
            </div>
          </div>
          <form action="">
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">Name</span>
              </label>
              <input type="text" className="input input-bordered w-full " />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">Message</span>
              </label>
              <input type="text" className="input input-bordered w-full " />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">Logo url</span>
              </label>
              <input type="text" className="input input-bordered w-full " />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">Website url</span>
              </label>
              <input type="text" className="input input-bordered w-full " />
            </div>
            <input
              className="btn bg-[#4267CF] w-full mt-4"
              value="Add online presence"
              type="submit"
            />
          </form>

          {/* close btn */}

          {/* <label htmlFor="my-modal-6" className="btn"></label> */}
        </div>
      </div>
      {/* card 2 */}
      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="text-4xl">dribble</h2>
          <p className="text-xs">One of the best Design Agency </p>
          <div className="card-actions justify-center mt-8">
            <button className="btn btn-outline btn-sm">
              <span className="text-xs">Disable</span>
            </button>
            <button className="btn btn-outline btn-sm  ">
              <span className="text-xs">Edit</span>
            </button>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="text-4xl">Upwork</h2>
          <p className="text-xs">One of the best Design Agency </p>
          <div className="card-actions justify-center mt-8">
            <button className="btn btn-outline btn-sm">
              <span className="text-xs">Disable</span>
            </button>
            <button className="btn btn-outline btn-sm  ">
              <span className="text-xs">Edit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="text-4xl">Friver</h2>
          <p className="text-xs">One of the best Design Agency </p>
          <div className="card-actions justify-center mt-8">
            <button className="btn btn-outline btn-sm">
              <span className="text-xs">Disable</span>
            </button>
            <button className="btn btn-outline btn-sm  ">
              <span className="text-xs">Edit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="text-4xl">dribble</h2>
          <p className="text-xs">One of the best Design Agency </p>
          <div className="card-actions justify-center mt-8">
            <button className="btn btn-outline btn-sm">
              <span className="text-xs">Disable</span>
            </button>
            <button className="btn btn-outline btn-sm  ">
              <span className="text-xs">Edit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="text-4xl">dribble</h2>
          <p className="text-xs">One of the best Design Agency </p>
          <div className="card-actions justify-center mt-8">
            <button className="btn btn-outline btn-sm">
              <span className="text-xs">Disable</span>
            </button>
            <button className="btn btn-outline btn-sm  ">
              <span className="text-xs">Edit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="text-4xl">dribble</h2>
          <p className="text-xs">One of the best Design Agency </p>
          <div className="card-actions justify-center mt-8">
            <button className="btn btn-outline btn-sm">
              <span className="text-xs">Disable</span>
            </button>
            <button className="btn btn-outline btn-sm  ">
              <span className="text-xs">Edit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="text-4xl">dribble</h2>
          <p className="text-xs">One of the best Design Agency </p>
          <div className="card-actions justify-center mt-8">
            <button className="btn btn-outline btn-sm">
              <span className="text-xs">Disable</span>
            </button>
            <button className="btn btn-outline btn-sm  ">
              <span className="text-xs">Edit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="card shadow-xl">
        <div className="card-body">
          <h2 className="text-4xl">dribble</h2>
          <p className="text-xs">One of the best Design Agency </p>
          <div className="card-actions justify-center mt-8">
            <button className="btn btn-outline btn-sm">
              <span className="text-xs">Disable</span>
            </button>
            <button className="btn btn-outline btn-sm  ">
              <span className="text-xs">Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presence;
