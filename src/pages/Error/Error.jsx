import { Link } from "react-router-dom";
import useTitle from "../../Hook/useTitle";

const ErrorPage = () => {
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
      <div className="absolute top-32 left-3/4 btn text-xl">
        <Link to={"/"}>
          <button className="w-60">Go to Home</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
