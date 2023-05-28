import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {
  const { _id, Category, Price, Quantity, ToyName, seller } = toy || {};

  return (
    <tr className="text-center">
      <td className="font-semibold">{ToyName}</td>
      <td className="font-semibold">{Category}</td>
      <td className="font-semibold">{Price} $</td>
      <td className="font-semibold">{Quantity}</td>
      <td className="font-semibold">{seller}</td>
      <td className="font-semibold">
        <Link to={`/details/${_id}`}>
          <button className="btn">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleToy;
