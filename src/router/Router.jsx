import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import AddArticles from "../pages/Add Articles/AddArticles";
import AllArticles from "../pages/all articles/AllArticles";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Dashbord from "../layout/dashbord/Dashbord";
import UserHome from "../layout/dashbord/userhome/UserHome";
import AdminHome from "../layout/dashbord/admin home/AdminHome";
import DbHome from "../layout/dashbord/dashbord home/DbHome";
import UserInfo from "../layout/dashbord/user info/UserInfo";
import AdAllArticle from "../layout/dashbord/ad all article/AdAllArticle";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addArticles",
        element: (
          <PrivateRoute>
            <AddArticles />
          </PrivateRoute>
        ),
      },
      {
        path: "/allArticles",
        element: <AllArticles />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashBoard",
    element: <Dashbord></Dashbord>,
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <UserInfo />
          </AdminRoute>
        ),
      },
      {
        path: "adAllArticles",
        element: (
          <AdminRoute>
            <AdAllArticle />
          </AdminRoute>
        ),
      },
    ],
  },
]);
