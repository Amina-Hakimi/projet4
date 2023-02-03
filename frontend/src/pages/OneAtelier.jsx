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
          <p className="my-6 mx-3 text-lg font-semibold leading-9">
            {oneAtelier.description}
          </p>
          <p className="mx-3 text-lg leading-9 font-semibold">
            Notre cours à une durée de {oneAtelier.durée}
          </p>
          <p className="mx-3 text-lg leading-9 font-semibold">
            {" "}
            Ce cours est dispensé par notre professeur <br />{" "}
            {oneAtelier.prenom} {oneAtelier.nom}
          </p>
        </div>
      )}
    </div>
  );
}

export default OneAtelier;
