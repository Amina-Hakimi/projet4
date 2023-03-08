import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logo.png";
import burger from "@assets/burger.png";
import fermer from "@assets/fermer.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full fixed top-0 left-0 mt-16">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="cursor-pointer z-1">
          <Link to="/accueil">
            <img src={logo} alt="logo" width="70" height="70" />
          </Link>
        </div>
        <button
          type="button"
          onClick={() => handleOpen()}
          className="absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <img
              src={fermer}
              alt="fermer"
              width="30"
              height="30"
              className="fermer"
            />
          ) : (
            <img
              src={burger}
              alt="burger"
              width="40"
              height="30"
              className="burger md:hidden"
            />
          )}
        </button>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 max-sm:bg-pink-200 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          }`}
        >
          <Link to="/accueil">
            <li className="md:ml-8 text-inherit font-medium text-lg md:my-0 my-5 md:hover:text-pink-600 transition-all px-3 rounded py-2">
              Accueil
            </li>
          </Link>
          <Link to="/ateliers">
            <li className="md:ml-8 text-inherit font-medium text-lg md:my-0 my-5 md:hover:text-pink-600 transition-all px-3 rounded py-2">
              Ateliers
            </li>
          </Link>
          <Link to="/tarifs">
            <li className="md:ml-8 text-inherit font-medium text-lg md:my-0 my-5 md:hover:text-pink-600 transition-all px-3 rounded py-2">
              Tarifs
            </li>
          </Link>
          <Link to="/réservation">
            <li className="md:ml-8 text-inherit font-medium text-lg md:my-0 my-5 md:hover:text-pink-600 transition-all px-3 rounded py-2">
              Réservation
            </li>
          </Link>
          <Link to="/Contact">
            <li className="md:ml-8 text-inherit font-medium text-lg md:hover:text-pink-600 transition-all px-3 rounded py-2">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
