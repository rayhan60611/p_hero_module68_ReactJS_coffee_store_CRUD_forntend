// import React from "react";

const AddCoffee = () => {
  return (
    <div className="w-11/12 md:w-4/6 mx-auto flex flex-col gap-4 items-center justify-center bg-[#C99D62] px-6 py-10">
      <h1 className="font-bold text-4xl text-orange-900">Add New Coffee</h1>
      <form className="w-full flex flex-col gap-6 items-center justify-center ">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white font-bold">Coffee Name</span>
          </label>
          <input
            type="text"
            name="coffeeName"
            placeholder="Coffee Name"
            className="input input-bordered"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white font-bold">
              Available Quantity
            </span>
          </label>
          <input
            type="text"
            name="availableQuantity"
            placeholder="Available Quantity"
            className="input input-bordered "
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="btn w-full bg-orange-900 text-white hover:text-orange-900 border-0 duration-500"
          >
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
