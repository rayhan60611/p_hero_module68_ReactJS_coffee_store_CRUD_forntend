// import React from "react";

// import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffeeOnsubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffeeName = form.coffeeName.value;
    const availableQuantity = form.availableQuantity.value;
    const supplierName = form.supplierName.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const price = form.price.value;
    const photoUrl = form.photoUrl.value;
    const data = {
      coffeeName,
      availableQuantity,
      supplierName,
      taste,
      category,
      details,
      price,
      photoUrl,
    };
    console.log(data);

    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // toast.success("Coffee Added Successfully ☕", {
          //   autoClose: 3000,
          //   theme: "colored",
          // });

          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully ☕",
            icon: "success",
            confirmButtonText: "Cool",
          });

          console.log(data);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-11/12 md:w-4/6 mx-auto flex flex-col gap-4 items-center justify-center  px-6 py-10 shadow-2xl rounded-lg mb-16">
      <div className="flex justify-center items-center gap-3">
        <img
          className="w-16 h-16"
          src="/public/images/hot-beverage.webp"
          alt=""
        />
        <h1 className="font-bold text-4xl text-orange-900">Add New Coffee</h1>
        <img
          className="w-16 h-16"
          src="/public/images/hot-beverage.webp"
          alt=""
        />
      </div>
      <form
        onSubmit={handleAddCoffeeOnsubmit}
        className="w-full flex flex-col gap-6 items-center justify-center "
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-orange-900 font-bold">
              Coffee Name
            </span>
          </label>
          <input
            type="text"
            name="coffeeName"
            placeholder="Coffee Name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-orange-900 font-bold">
              Available Quantity
            </span>
          </label>
          <input
            type="number"
            name="availableQuantity"
            placeholder="Available Quantity"
            className="input input-bordered "
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-orange-900 font-bold">
              Supplier Name
            </span>
          </label>
          <input
            type="text"
            name="supplierName"
            placeholder="Supplier Name"
            className="input input-bordered "
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-orange-900 font-bold">Taste</span>
          </label>
          <input
            type="text"
            name="taste"
            placeholder="Taste"
            className="input input-bordered "
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-orange-900 font-bold">
              Category
            </span>
          </label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="input input-bordered "
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-orange-900 font-bold">
              Details
            </span>
          </label>
          <input
            type="text"
            name="details"
            placeholder="Details"
            className="input input-bordered "
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-orange-900 font-bold">Price </span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered "
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-orange-900 font-bold">
              Photo URL
            </span>
          </label>
          <input
            type="text"
            name="photoUrl"
            placeholder="Photo URL"
            className="input input-bordered "
            required
          />
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="btn w-full bg-orange-900 text-white hover:text-orange-900 border-0 duration-500 hover:border-[1px] hover:border-orange-900"
          >
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
