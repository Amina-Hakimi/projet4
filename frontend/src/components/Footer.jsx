import React from "react";
import ItemsContainer from "./ItemsContainer";

function Footer() {
  return (
    <footer className="bg-pink-600 text-white">
      <ItemsContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-lg pt-2  text-white text-sm pb-8">
        <span>@ 2023 source creative, tout droit réservé</span>
      </div>
      <div />
    </footer>
  );
}

export default Footer;
