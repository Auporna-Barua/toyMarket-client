import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider.jsx";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <button className="btn loading">loading</button>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
