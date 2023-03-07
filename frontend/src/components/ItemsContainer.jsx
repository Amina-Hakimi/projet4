import React from "react";
import Item from "./Item";
import { ECOLE, MENTIONS, RESEAUX } from "./Menu";

function ItemsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:px-8 px-5 py-12">
      <Item Links={ECOLE} title="ECOLE" />
      <Item Links={MENTIONS} title="MENTIONS LEGALES" />
      <Item Links={RESEAUX} title="Suivez-nous" />
    </div>
  );
}

export default ItemsContainer;
