import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import AddArticles from "../pages/Add Articles/AddArticles";
import AllArticles from "../pages/all articles/AllArticles";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addArticles',
        element: <AddArticles />
      },
      {
        path: '/allArticles',
        element: <AllArticles />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
    ],
  },
]);
