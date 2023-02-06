import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiConnexion from "@services/apiConnexion";

function OneAtelier() {
  const [oneAtelier, setOneAtelier] = useState();
  const { id } = useParams();

  useEffect(() => {
    apiConnexion
      .get(`${import.meta.env.VITE_BACKEND_URL}/ateliers/${id}`)
      .then((json) => setOneAtelier(json.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      {oneAtelier && (
        <div>
          <div>
            <img
              className="mt-32"
              src={`${import.meta.env.VITE_BACKEND_URL}/${oneAtelier.image}`}
              alt={`${import.meta.env.VITE_BACKEND_URL}/${oneAtelier.name}`}
            />
          </div>
          <h1 className="my-5 mx-3 text-lg text-pink-500 font-bold ">
            Atelier {oneAtelier.name}
          </h1>
          <p className="my-6 mx-3 text-md font-semibold leading-9">
            {oneAtelier.description}
            <br />
          </p>
          <p className="mx-3 text-md font-semibold leading-9 font-semibold">
            Notre cours à une durée de {oneAtelier.durée}
            <span>.</span>
          </p>
          <p className="mx-3 text-md font-semibold leading-9">
            {" "}
            Ce cours est dispensé par notre professeur <br /> <span>
              "
            </span>{" "}
            {oneAtelier.prenom} {oneAtelier.nom}
            <span>" .</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default OneAtelier;
