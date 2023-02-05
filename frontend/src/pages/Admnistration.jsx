import React, { useState, useEffect } from "react";
import apiConnexion from "@services/apiConnexion";
import Cardadmin from "@components/Cardadmin";

function Admnistration() {
  const [atelier, setAtelier] = useState([]);
  useEffect(() => {
    apiConnexion
      .get(`/ateliers`)
      .then((json) => setAtelier(json.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-30 py-32 mx-10 md:w-50">
        {atelier.map((atel, index) => (
          <Cardadmin atel={atel} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Admnistration;
