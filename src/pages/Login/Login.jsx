import  { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hook/useTitle";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [error, setError] = useState("");
  const { logInUser, googleSingUp } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Login");
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleLogInData = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        Swal.fire({
          icon: "success",
          text: "LogIn successful",
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleLogIn = () => {
    googleSingUp()
      .then((result) => {
        const newUserByGoogle = result.user;
        navigate(from, { replace: true });
        alert("Login Successful");
        console.log(newUserByGoogle);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-3xl mx-auto border-b-2 border-blue-500 w-fit my-5 p-2 rounded-lg text-blue-500">
        Login
      </h2>

      <form
        onSubmit={handleLogInData}
        className="w-11/12 md:w-1/2 p-8 mx-auto   rounded-md bg-blue-400"
      >
        <div className="flex flex-col">
          <label
            className="font-bold text-md md:text-xl text-white"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="w-full border-2 p-3 rounded border-red-600 mt-4"
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            className="font-bold text-md md:text-xl text-white"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="w-full border-2 p-3 rounded border-red-600 mt-4"
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
            logIn
          </button>
        </div>
        <div className="divider text-white">OR</div>
        <div>
          <button
            onClick={handleGoogleLogIn}
            className="btn w-full mt-6 flex gap-4 bg-white text-blue-500 border-2 border-blue-500 hover:bg-transparent hover:text-white  hover:border-2 hover:border-white"
          >
            LogIn with Google <FcGoogle size={22} />
          </button>
        </div>

        <div className="text-center mt-3">
          <p className="font-semibold text-white flex gap-2 items-center">
            Don't have any account?
            <Link
              to={"/singUp"}
              className="font-bold text-md md:text-xl text-white"
            >
              SingUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
