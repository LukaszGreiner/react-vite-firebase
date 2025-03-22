import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, currentUser, username } = useAuth();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const profileImage = currentUser?.photoURL || "/profile_icon.jpg";

  return (
    <>
      <div className="md:hidden">
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="hidden md:flex items-center w-full justify-center">
        <nav className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="absolute right-4 flex items-center gap-2">
          {isAuthenticated ? (
            <Link to="/user/details" className="flex items-center gap-2">
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
                referrerPolicy={
                  currentUser?.photoURL ? "no-referrer" : undefined
                }
              />
              <span className="text-white">{username}</span>
            </Link>
          ) : (
            <Link to="/user/login">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden flex-col space-y-4 absolute top-15 left-0 w-full bg-gray-800 p-4 z-10`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="hover:text-gray-300 text-white"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to={isAuthenticated ? "/user/details" : "/user/login"}
          className="hover:text-gray-300 text-white"
          onClick={() => setIsOpen(false)}
        >
          {isAuthenticated ? username : "Login"}
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
