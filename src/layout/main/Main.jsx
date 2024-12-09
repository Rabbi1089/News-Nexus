import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar";
import Footer from "../../pages/shared/Footer";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
