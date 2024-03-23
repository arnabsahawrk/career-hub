import { Link } from "react-router-dom";
import { RiMenuSearchLine } from "react-icons/ri";

const Nav = () => {
  const links = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Applied Jobs</Link>
      </li>
      <li>
        <Link>Blogs</Link>
      </li>
    </>
  );
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn text-3xl btn-ghost lg:hidden"
          >
            <RiMenuSearchLine />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4 text-[#757575] font-bold text-base"
          >
            {links}
          </ul>
        </div>
        <a className="w-30">
          <img
            className="w-full object-cover"
            src="https://i.postimg.cc/FzsGPpS9/Career-Hub.png"
            alt="career-hub"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 text-[#757575] font-bold text-base">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-info text-white">Star Applying</a>
      </div>
    </nav>
  );
};

export default Nav;
