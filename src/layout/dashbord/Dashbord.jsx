import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Dashbord = () => {
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className=" flex text-black">
        {/* sidebar */}
        <div className=" bg-violet-200 p-4 max-w-72 min-h-screen">
          <h1 className=" text-4xl text-center my-8">
            Nexus News
            <br /> <span className=" text-2xl">Stay Informed,</span>
          </h1>
          <ul className="space-y-4">
            {isAdmin ? (
              <>
                {" "}
                <li>
                  <NavLink to="/dashBoard/allUser">
                    <div className=" flex items-center gap-2">All users</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/adAllArticles">
                    <div className="flex items-center gap-2">All Articles</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/addPublisher">
                    <div className=" flex items-center gap-2">
                      Add Publisher
                    </div>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <NavLink to="/dashBoard/userHome">
                    <div className=" flex items-center gap-2">User Home</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="dashBoard/reservation">
                    <div className=" flex items-center gap-2">reservation</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="dashBoard/payment">
                    <div className=" flex items-center gap-2">
                      payment history
                    </div>
                  </NavLink>
                </li>
              </>
            )}

            {/* shared navItem */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <div className=" flex items-center gap-2">Home</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="Contact">
                <div className=" flex items-center gap-2">Contact</div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 my-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
