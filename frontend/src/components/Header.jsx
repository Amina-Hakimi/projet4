import React from "react";
import phonecall from "@assets/phonecall.png";
import pin from "@assets/pin.png";
import temps from "@assets/temps.png";

function Header() {
  return (
    <div>
      <div className="flex justify-end mt-8 mb-2 mx-auto">
        <ul>
          <div className="flex justify-between">
            <div>
              <li className="font-semibold">0560 43 85 74</li>
              <li className="font-semibold">0560 65 98 36</li>
            </div>
            <div className="flex items-center mx-3">
              <img src={phonecall} alt="icone-telephonne" width="35%" />
            </div>
          </div>
        </ul>
        <ul>
          <div className="flex justify-between">
            <div>
              <li className="font-semibold">
                93, lottissement la cadat, les sources, ALGER
              </li>
            </div>
            <div className="flex items-center mx-3">
              <img src={pin} alt="icone-addresse" width="35%" />
            </div>
          </div>
        </ul>
        <ul>
          <div className="flex justify-between mx-3">
            <div>
              <li className="font-semibold">Ouvert du samedi au vendredi</li>
            </div>
            <div className="flex items-center mx-3">
              <img src={temps} alt="icone-temps" width="40%" />
            </div>
          </div>
        </ul>
      </div>
      <div>
        <hr className="h-px mt-3 w-full" />
      </div>
    </div>
  );
}

export default Header;
