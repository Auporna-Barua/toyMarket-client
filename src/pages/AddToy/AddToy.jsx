import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;
  useTitle("Add Toy");

  const handleAddToyData = (event) => {
    event.preventDefault();
    const form = event.target;
    const ToyName = form.toyName.value;
    const Category = form.category.value;
    const Price = form.price.value;
    const Quantity = form.quantity.value;
    const seller = form.sellerId.value;
    const sellerName = form.sellerName.value;
    const ratting = form.ratting.value;
    const description = form.description.value;
    const toyImg = form.toyImg.value;

    const toyData = {
      ToyName,
      Category,
      Price,
      Quantity,
      seller,
      toyImg,
      sellerName,
      ratting,
      description,
    };
    console.log(toyData);

    fetch("https://car-world-server-henna.vercel.app/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    Swal.fire({
      icon: "success",
      title: "Added Successful",
    });
    form.reset();
  };

  return (
    <div>
      <h1 className="font-bold text-3xl border-b-2 border-black p-3 w-fit mx-auto mb-5">
        Add Toy
      </h1>

      <form
        onSubmit={handleAddToyData}
        className="w-full p-5 mx-auto border-2 border-gray-300 rounded-md bg-slate-200 my-10 shadow-lg"
      >
        <div className="flex justify-evenly items-center gap-2">
          <div className="flex flex-col mt-3 w-full">
            <label className="font-bold text-xl" htmlFor="seller">
              Seller Name:
            </label>
            <input
              className="w-full border-2 p-3 rounded border-gray-600 mt-2"
              type="text"
              name="sellerName"
              id=""
              placeholder="Enter your Name"
              defaultValue={displayName}
              required
            />
          </div>
          <div className="flex flex-col mt-3 w-full">
            <label className="font-bold text-xl" htmlFor="seller">
              Seller ID:
            </label>
            <input
              className="w-full border-2 p-3 rounded border-gray-600 mt-2"
              type="email"
              name="sellerId"
              id=""
              placeholder="Enter your Id"
              defaultValue={email}
              required
            />
          </div>
        </div>

        <div className="flex justify-evenly items-center gap-2 mt-3">
          <div className="flex flex-col w-full">
            <label className="font-bold text-xl" htmlFor="toyName">
              Toy Name:
            </label>
            <input
              className="w-full border-2 p-3 rounded border-gray-600 mt-2"
              type="text"
              name="toyName"
              id=""
              placeholder="Enter toy name"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-bold text-xl" htmlFor="category">
              Sub-category:
            </label>
            <select
              className="w-full border-2 p-3 rounded border-gray-600 mt-2"
              name="category"
            >
              <option>sport car</option>
              <option>Monster Truck</option>
              <option>Truck</option>
            </select>
          </div>
        </div>

        <div className="flex justify-evenly items-center gap-2 mt-3">
          <div className="flex flex-col mt-2 w-full">
            <label className="font-bold text-xl" htmlFor="price">
              Price:
            </label>
            <input
              className="w-full border-2 p-3 rounded border-gray-600 mt-2"
              type="number"
              name="price"
              id=""
              placeholder="Enter the Price"
              required
            />
          </div>

          <div className="flex flex-col mt-2 w-full">
            <label className="font-bold text-xl" htmlFor="quantity">
              Quantity:
            </label>
            <input
              className="w-full border-2 p-3 rounded border-gray-600 mt-2"
              type="number"
              name="quantity"
              id=""
              placeholder="Enter the quantity"
              required
            />
          </div>
        </div>

        <div className="flex justify-evenly items-center gap-2 mt-3">
          <div className="flex flex-col mt-3 w-full">
            <label className="font-bold text-xl" htmlFor="seller">
              Toy URL:
            </label>
            <input
              className="w-full border-2 p-3 rounded border-gray-600 mt-2"
              type="text"
              name="toyImg"
              id=""
              placeholder="URL"
              required
            />
          </div>

          <div className="flex flex-col mt-3 w-full">
            <label className="font-bold text-xl" htmlFor="ratting">
              Ratting:
            </label>
            <input
              className="w-full border-2 p-3 rounded border-gray-600 mt-2"
              type="number"
              name="ratting"
              id=""
              placeholder="Ratting"
              required
            />
          </div>
        </div>

        <div className="mt-3">
          <label className="font-bold text-xl" htmlFor="description">
            Description:
          </label>
          <textarea
            className="border-2 border-black rounded mt-3 p-4 w-full"
            name="description"
            id=""
            rows="5"
            placeholder="Description"
          ></textarea>
        </div>

        <div>
          <button className="btn w-full mt-6">Add Toy</button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
