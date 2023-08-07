// import React from 'react';
import { AiFillEye } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import { BsFillTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const {
    _id,
    coffeeName,
    availableQuantity,
    supplierName,
    taste,
    category,
    details,
    photoUrl,
    price,
  } = coffee;

  const handleOnDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire("Deleted!", "Coffee has been deleted.", "success");
            }
          });
        //   .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div className="flex shadow-xl hover:shadow-2xl duration-500 gap-4 rounded-lg p-4 items-center">
      <div className="w-[150px] h-[200px] basis-[30%]">
        <img className="object-cover w-full h-full" src={photoUrl} alt="" />
      </div>
      <div className=" flex flex-col gap-4 basis-[60%]">
        <h1 className="font-bold text-orange-900">
          Name : <span className="text-orange-500">{coffeeName}</span>
        </h1>
        <p className="font-bold text-orange-900">
          {" "}
          Brand : <span className="text-green-500">{supplierName}</span>
        </p>
        <p className="font-bold text-orange-900">
          Price : <span className="text-red-500">{price}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center gap-6 w-full h-full items-center basis-[10%]">
        <button
          type="button"
          className="bg-orange-900 hover:bg-orange-500 duration-500 rounded-lg p-2 hover:scale-105"
        >
          <AiFillEye className="text-white w-6 h-6" />
        </button>
        <button
          type="button"
          className="bg-orange-900 hover:bg-green-500 duration-500 rounded-lg p-2 hover:scale-105"
        >
          <MdEditSquare className="text-white w-6 h-6" />
        </button>
        <button
          onClick={() => handleOnDelete(_id)}
          type="button"
          className="bg-orange-900 hover:bg-red-500 duration-500 rounded-lg p-2 hover:scale-105"
        >
          <BsFillTrash3Fill className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
