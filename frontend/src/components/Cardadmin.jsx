import React from "react";
import { Link } from "react-router-dom";

function Cardadmin({ atel, handleDeleteAtelier }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src={`${import.meta.env.VITE_BACKEND_URL}/${atel.image}`}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {atel.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {atel.description}
        </p>
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-5"
          onClick={() => handleDeleteAtelier(atel.idateliers)}
        >
          supprimer
        </button>
        <Link
          to="/modify"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Modifier
        </Link>
      </div>
    </div>
  );
}

export default Cardadmin;
