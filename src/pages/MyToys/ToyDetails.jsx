import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const ToyDetails = () => {
  const previewsData = useLoaderData();
  useTitle("Toy Details");
  const { Price, Quantity, description, _id } = previewsData;
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const id = form.id.value;
    const updateData = { id, price, quantity, description };
    // console.log(updateData);

    fetch(`https://car-world-server-henna.vercel.app/updateToy/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update Successful",
          });
          navigate("/myToys");
        }
      });
  };

  return (
    <div>
      <h1 className="font-bold text-3xl border-b-2 border-blue-500 p-3 w-fit mx-auto mb-5">
        Update Details
      </h1>
      <form
        onSubmit={handleUpdate}
        className="w-1/2 p-5 mx-auto border-2 border-gray-300 rounded-md bg-blue-400 my-10 shadow-lg"
      >
        <div className="flex flex-col justify-evenly items-center gap-2 mt-3">
          <div className="flex flex-col mt-3 w-full">
            <label className="font-bold text-xl text-white" htmlFor="seller">
              Price:
            </label>
            <input
              className="w-full border-2 p-3 rounded border-gray-600 mt-2"
              type="number"
              name="price"
              id=""
              placeholder="Price"
              defaultValue={Price}
              required
            />
          </div>

          <div className="flex flex-col mt-3 w-full">
            <label className="font-bold text-xl text-white" htmlFor="quantity">
              Quantity:
            </label>
            <input
              className="w-full border-2 p-3 rounded border-gray-600 mt-2"
              type="number"
              name="quantity"
              id=""
              placeholder="quantity"
              defaultValue={Quantity}
              required
            />
          </div>
          <div className="flex flex-col mt-3 w-full">
            <label className="font-bold text-xl text-white" htmlFor="quantity">
              ProductId:
            </label>
            <input
              className="w-full border-2 p-3 rounded border-gray-600 mt-2"
              type="text"
              name="id"
              id=""
              placeholder="quantity"
              readOnly
              defaultValue={_id}
              required
            />
          </div>
        </div>

        <div className="mt-3">
          <label className="font-bold text-xl text-white" htmlFor="description">
            Description:
          </label>
          <textarea
            className="border-2 border-black rounded mt-3 p-4 w-full"
            name="description"
            id=""
            rows="5"
            placeholder="Description"
            defaultValue={description}
          ></textarea>
        </div>

        <div>
          <button className="btn w-full mt-6 bg-white text-blue-500 text-xl border-2 border-blue-500 hover:bg-white hover:border-blue-500">Update</button>
        </div>
      </form>
    </div>
  );
};

export default ToyDetails;
