import React from "react";
import instagram from "@assets/instagram.png";
import facebook from "@assets/facebook.png";
import telephone from "@assets/telephone.png";
import pin from "@assets/pin.png";
import email from "@assets/email.png";

const footer = () => {
  return (
    <div className="grid grid-cols-2 mb-0 mt-52">
      <h1>HELLOOO</h1>
      <img src={instagram} alt="instagram" width="45" />
      <img src={facebook} alt="facebook" width="45" />
      <img src={pin} alt="pin" width="45" />
      <img src={telephone} alt="telephone" width="45" />
      <img src={email} alt="email" width="45" />
    </div>
  );
};

export default footer;
