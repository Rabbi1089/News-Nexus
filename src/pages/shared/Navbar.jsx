import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // console.log(user);
  const linkItem = (
    <>
      <li>
        <NavLink to="/addArticles">Add Articles</NavLink>
      </li>
      <li>
        <NavLink to="/allArticles">All Articles</NavLink>
      </li>
      <li>
        <NavLink to="/subscription">Subscription</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to="/dashBoard/userHome">user Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/dashBoard/adminHome">admin Dashboard</NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to="/myArticles">My Articles</NavLink>
      </li>
      <li>
        <NavLink to="/premiumArticles">Premium Articles</NavLink>
      </li>
      {user && user?.email ? (
        <li>
          <NavLink onClick={handleLogOut}>Logout</NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box relative  z-10 mt-3 w-52 p-2 shadow"
          >
            {linkItem}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">News Nexus</a>
      </div>
      <div className="navbar-center hidden lg:flex z-[1]">
        <ul className="menu menu-horizontal px-1">{linkItem}</ul>
      </div>

      {user && user?.email ? (
        <div className="navbar-end">
          <Link to="/">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
