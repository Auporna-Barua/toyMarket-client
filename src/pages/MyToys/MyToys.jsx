import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hook/useTitle";
import ToyTable from "./ToyTable";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;
  const [myToys, setMyToys] = useState([]);
  const [reload, setReload] = useState(false);
  useTitle("My Toy");

  useEffect(() => {
    fetch(`https://car-world-server-henna.vercel.app/myToys/${email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [reload]);

  return (
    <>
      <h2 className="font-bold text-3xl border-b-2 border-black w-fit p-4 mx-auto">
        My Toy's
      </h2>
      <div className="py-10">
        <table className="table w-full my-10">
          <thead>
            <tr className="text-center">
              <th className=" text-base font-bold">Toy Name</th>
              <th className=" text-base font-bold">Sub-category</th>
              <th className=" text-base font-bold">Price</th>
              <th className=" text-base font-bold">Available Quantity</th>
              <th className=" text-base font-bold">SellerID</th>
              <th className=" text-base font-bold">Update</th>
              <th className=" text-base font-bold">Details</th>
            </tr>
          </thead>
          <tbody>
            {myToys?.slice(0, 20).map((toy) => (
              <ToyTable
                reload={reload}
                setReload={setReload}
                key={toy._id}
                toy={toy}
              ></ToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
