import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hook/useTitle";
import SingleToy from "./SingleToy";

const AllToys = () => {
  const allToys = useLoaderData();
  useTitle("All Toys");
  console.log(allToys);
  const [toysData, setToyData] = useState(allToys);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchText = form.search.value;
    console.log(searchText);

    fetch(`https://car-world-server-henna.vercel.app/searchToy/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToyData(data));
  };

  return (
    <>
      <h2 className="font-bold text-3xl border-b-2 border-black w-fit p-4 mx-auto">
        All Car's
      </h2>
      <div className="py-10">
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center"
        >
          <input
            className="border-2 hover:border-black duration-500 p-3 w-80 rounded"
            type="search"
            name="search"
            id=""
            placeholder="Search"
          />
          <button className="bg-slate-600 p-3 font-semibold text-xl text-white rounded">
            search
          </button>
        </form>

        <table className="table w-full my-10">
          <thead>
            <tr className="text-center">
              <th className=" text-base font-bold">Toy Name</th>
              <th className=" text-base font-bold">Sub-category</th>
              <th className=" text-base font-bold">Price</th>
              <th className=" text-base font-bold">Available Quantity</th>
              <th className=" text-base font-bold">SellerID</th>
              <th className=" text-base font-bold">Details</th>
            </tr>
          </thead>
          <tbody>
            {toysData?.map((toy) => (
              <SingleToy key={toy._id} toy={toy}></SingleToy>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
