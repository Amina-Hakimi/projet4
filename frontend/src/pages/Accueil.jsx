import React from "react";
import ReactPlayer from "react-player";

function Accueil() {
  return (
    <div>
      <div>
        <ReactPlayer
          url="https://youtu.be/8otG0xQLUzU"
          playing
          muted
          width="100%"
          className="player-video mt-32 mb-0 p-0"
        />
      </div>
      <div>
        <h2 className="text-black font-semibold my-5 mx-3">
          Présentation de l'école
        </h2>
        <p className="text-black my-5 mx-3 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          quisquam laboriosam facilis inventore vitae rem libero ducimus illo
          eum incidunt aut, explicabo quam et corrupti magni minima eius
          excepturi repellat.
        </p>
      </div>
    </div>
  );
}

export default Accueil;
