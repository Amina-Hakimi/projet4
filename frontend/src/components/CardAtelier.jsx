import React from "react";
import { Link } from "react-router-dom";

function CardAtelier({ atel }) {
  return (
    <Link to={`/ateliers/${atel.idateliers}`}>
      <div className="text-black">
        <div className="shadow-md shadow-gray-600 rounded-lg">
          <h3 className="text-lg font-semibold text-center my-3">
            {atel.name}
          </h3>
          <img
            className="rounded-md duration-200 hover:scale-105"
            src={`${import.meta.env.VITE_BACKEND_URL}/${atel.image}`}
            alt={`${import.meta.env.VITE_BACKEND_URL}/${atel.name}`}
          />
        </div>
      </div>
    </Link>
  );
}

export default CardAtelier;
