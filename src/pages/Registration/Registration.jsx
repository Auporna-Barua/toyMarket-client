import  { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../../hook/useTitle";
import Swal from "sweetalert2";

const Registration = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("SingUp");

  const handleSingUpData = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        updateProfile(createdUser, {
          displayName: name,
          photoURL: photo,
        });

        form.reset();
        Swal.fire({
          icon: "success",
          text: "LogIn successful",
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="my-10">
      <h2 className="font-bold text-3xl mx-auto border-b-2 border-blue-500 w-fit my-5 p-2 rounded-lg text-blue-500">
        SingUp
      </h2>
      <form
        onSubmit={handleSingUpData}
        className="w-11/12 md:w-1/2 p-8 mx-auto border-2 border-blue-400 rounded-md bg-blue-500"
      >
        <div className="flex flex-col">
          <label
            className="font-bold text-white text-md md:text-xl "
            htmlFor="email"
          >
            Name:
          </label>
          <input
            className="w-full border-2 p-3 rounded border-red-600 mt-2"
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="flex flex-col mt-2">
          <label
            className="font-bold text-md md:text-xl text-white"
            htmlFor="email"
          >
            Photo:
          </label>
          <input
            className="w-full border-2 p-3 rounded border-red-600 mt-2"
            type="text"
            name="photo"
            id=""
            placeholder="Enter your Photo URL"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label
            className="font-bold text-white text-md md:text-xl"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="w-full border-2 p-3 rounded border-red-600 mt-2"
            type="text"
            name="email"
            id=""
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col mt-2">
          <label
            className="font-bold text-white text-md md:text-xl"
            htmlFor="email"
          >
            Password:
          </label>
          <input
            className="w-full border-2 p-3 rounded border-red-600 mt-2"
            type="password"
            name="password"
            id=""
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <p className="text-red-600 font-bold text-base mt-3">{error}</p>
        </div>
        <div>
          <button className="btn w-full mt-6 bg-white text-blue-500 border-2 border-blue-500 hover:bg-transparent hover:text-white  hover:border-2 hover:border-white">
            SingUp
          </button>
        </div>

        <div className="text-center mt-5">
          <p className="font-semibold text-white flex gap-2 items-center justify-center">
            Already have an account?
            <Link
              to={"/login"}
              className="font-bold text-md md:text-xl text-white underline"
            >
              LogIn
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
