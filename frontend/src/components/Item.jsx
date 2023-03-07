import React from "react";

function Item({ Links, title }) {
  return (
    <ul>
      <h1 className="mb-1 font-semibold text-lg">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-lg text-gray-300 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.src}
            {/* <img src={facebook} /> */}
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Item;
