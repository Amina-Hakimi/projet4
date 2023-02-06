import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/accueil");
  };
  return (
    <div className="flex flex-col items-center my-52">
      <div>
        <form className="flex flex-col items-center justify-center my-30">
          <label htmlFor="name" className="my-2">
            Veillez entrer votre nom
          </label>
          <input
            type="text"
            required
            value={name}
            className="bg-pink-200 rounded flex justify-center"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="button"
            className="rounded bg-slate-200 px-5 py-2 my-3 font-semibold"
            onClick={handleSubmit}
          >
            Entrez
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
