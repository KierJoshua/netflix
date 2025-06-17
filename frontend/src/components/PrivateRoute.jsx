// components/PrivateRoute.jsx
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/"); // redirect to login
    }
  }, [isLoggedIn]);

  return isLoggedIn ? children : null;
};

export default PrivateRoute;
