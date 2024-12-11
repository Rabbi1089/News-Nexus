import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation()
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(user);
  console.log(isAdmin);

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }


  if (user?.email && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
