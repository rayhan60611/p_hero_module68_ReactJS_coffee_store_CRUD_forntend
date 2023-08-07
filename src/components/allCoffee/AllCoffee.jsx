// import React from "react";

// import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useEffect, useState } from "react";

const AllCoffee = () => {
  //   const loadedCoffee = useLoaderData();
  const [allCoffee, setAllCoffee] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/coffee")
      .then((res) => res.json())
      .then((data) => setAllCoffee(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-11/12 mx-auto flex flex-col gap-10 justify-center items-center">
      <h1 className="text-3xl font-bold text-orange-900 ">
        Total Coffee: {allCoffee.length}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 w-full mb-16">
        {allCoffee.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            allCoffee={allCoffee}
            setAllCoffee={setAllCoffee}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCoffee;
