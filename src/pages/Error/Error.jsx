import { Link } from "react-router-dom";
import useTitle from "../../hook/useTitle";

const Error = () => {
  useTitle("Error");
  return (
    <>
      <div className="relative">
        <img
          className="w-screen h-screen"
          src="https://i.ibb.co/Yt5wJnp/pngtree-error-page-not-found-404-background-picture-image-1177786.png"
          alt=""
        />
      </div>
      <div className="absolute top-32 left-3/4 btn text-xl bg-blue-500 hover:bg-blue-500">
        <Link to={"/"}>
          <button className="w-60 bg-blue-500">Go to Home</button>
        </Link>
      </div>
    </>
  );
};

export default Error;
