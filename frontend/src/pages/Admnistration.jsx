import React, { useState, useEffect } from "react";
import apiConnexion from "@services/apiConnexion";
import Cardadmin from "@components/Cardadmin";

function Admnistration() {
  const [atelierList, setAtelierList] = useState([]);
  const [atelier, setAtelier] = useState({
    name: "",
    image: "",
    description: "",
    durée: "",
    Enseignants_idEnseignants: "",
    tarif: "",
  });
  console.warn(atelier);
  const getAllAteliers = () => {
    apiConnexion
      .get(`/ateliers`)
      .then((res) => {
        setAtelierList(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteAtelier = (idateliers) => {
    apiConnexion
      .delete(`/ateliers/${idateliers}`)
      .then(() => {
        setAtelier({
          idateliers: "",
          name: "",
          image: "",
          description: "",
          durée: "",
          Enseignants_idEnseignants: "",
          tarif: "",
        });
        getAllAteliers();
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getAllAteliers();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-30 py-32 mx-10 md:w-50">
        {atelierList.map((atel, index) => (
          <Cardadmin
            atel={atel}
            index={index}
            handleDeleteAtelier={handleDeleteAtelier}
          />
        ))}
      </div>
    </div>
  );
}

export default Admnistration;
