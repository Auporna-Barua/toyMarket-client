import React from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import useTitle from "../../../hook/useTitle";

const CarDetails = () => {
  const carData = useLoaderData();
  useTitle("Car Details");
  const { car_img, car_name, price, ratting } = carData || {};
  return (
    <>
      <h1 className="font-bold text-center text-3xl border-2 border-black mt-10 rounded w-fit mx-auto p-2">
        {car_name} Details
      </h1>
      <div className="hero w-fit mx-auto my-10 rounded border-2 hover:border-red-500 hover:rounded-lg hover:bg-blue-400 hover:p-3 duration-700 bg-base-100">
        <div className="hero-content flex-row ">
          <div className="w-full">
            <img src={car_img} className="rounded-lg shadow-2xl w-80" />
          </div>
          <div className="w-full">
            <div className="mb-10">
              <h1 className="text-5xl font-bold mb-5 border-b-2 w-fit text-black hover:border-blue-500 hover:text-white">
                {car_name}
              </h1>
            </div>
            <p className="font-semibold text-lg my-2">
              <span className="font-bold text-xl me-1 text-black hover:text-white">Price: {price}$</span>
            </p>
            <p className="font-semibold text-lg">
              <span className="font-bold text-xl me-1">Ratting:</span>
              <Rating
                className="ms-2"
                initialRating={ratting}
                placeholderRating={<FaStar></FaStar>}
                readonly
                emptySymbol={<FaStar className="text-gray-500"></FaStar>}
                placeholderSymbol={<FaStar></FaStar>}
                fullSymbol={<FaStar className="text-orange-400"></FaStar>}
              ></Rating>
            </p>

            <button className="btn mt-10 w-1/2">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
