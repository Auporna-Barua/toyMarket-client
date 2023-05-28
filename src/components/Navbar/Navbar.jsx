import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar px-5 items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 space-y-2 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link
                to={"/"}
                className="hover:bg-blue-500 hover:text-white p-2 hover:rounded-lg "
              >
                <li>Home</li>
              </Link>
              <Link
                className="hover:bg-blue-500 hover:text-white p-2 hover:rounded-lg "
                to={"/allToys"}
              >
                <li>All Toys</li>
              </Link>
              <Link className="hover:bg-blue-500 hover:text-white p-2 hover:rounded-lg ">
                <li>Add A Toy</li>
              </Link>
              <Link
                className="hover:bg-blue-500 hover:text-white p-2 hover:rounded-lg "
                to={"/myToys"}
              >
                <li>My Toys</li>
              </Link>
              <Link
                className="hover:bg-blue-500 hover:text-white p-2 hover:rounded-lg "
                to={"/blog"}
              >
                <li>Blog</li>
              </Link>
            </ul>
          </div>

          <img
            className="lg:w-20 w-14 lg:mt-1"
            src="https://res.cloudinary.com/db8l1ulfq/image/upload/v1685296109/logo_ufyczn.jpg"
            alt=""
          />
          <Link to={"/"}>
            <p className="lg:text-xl">
              <span className="lg:text-4xl font-bold text-gray-700">Baby</span>
              <span className="lg:text-xl lg:ms-2">Toy</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-7 px-1 font-bold text-lg">
            <Link
              to={"/"}
              className="hover:bg-blue-500 hover:text-white p-2 hover:rounded-lg "
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/allToys"}
              className="hover:bg-blue-500 hover:text-white p-2 hover:rounded-lg "
            >
              <li>All Toys</li>
            </Link>

            {user && (
              <>
                <Link
                  to={"/addToys"}
                  className="hover:bg-blue-500 hover:text-white p-2 hover:rounded-lg "
                >
                  <li>Add A Toy</li>
                </Link>
                <Link
                  to={"/myToys"}
                  className="hover:bg-blue-500 hover:text-white p-2 hover:rounded-lg "
                >
                  <li>My Toys</li>
                </Link>
              </>
            )}

            <Link
              to={"/blog"}
              className="hover:bg-blue-500 hover:text-white p-2 hover:rounded-lg  "
            >
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex">
              <img
                className="w-11 h-11 rounded-full lg:me-5 me-1"
                src={user.photoURL}
                alt=""
                title={user.displayName}
              />
              <button onClick={handleLogOut} className="btn bg-blue-500 hover:bg-transparent hover:text-blue-500 border-blue-500 hover:border-blue-500">
                LogOut
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn bg-blue-500 hover:bg-transparent hover:text-blue-500 border-blue-500 hover:border-blue-500">LogIn</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
