import React, { useState } from "react";

const data = [
  {
    question: "Quelle age a bla bla ?",
    Réponse:
      "lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsomlorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom",
  },
  {
    question: "Est ce que bla bla ?",
    Réponse:
      "lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsomlorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom",
  },
  {
    question: "Pourquoi bla bla ?",
    Réponse:
      "lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsomlorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom",
  },
  {
    question: "Pourquoi bla bla ?",
    Réponse:
      "lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsomlorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom",
  },
  {
    question: "Pourquoi bla bla ?",
    Réponse:
      "lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsomlorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom",
  },
];

function Questions() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    return setSelected(i);
  };
  return (
    <div className="flex justify-center w-full my-32 text-black">
      <div className="accordion w-[500px]">
        {data.map((item, i) => (
          <div className="item bg-pink-200 mb-2 py-8 px-6">
            <div className="flex justify-between justify-center title text-gray-800 font-semibold cursor-pointer">
              <button type="button" onClick={() => toggle(i)}>
                {item.question}
              </button>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content-show" : "content"}>
              {item.Réponse}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
