import React from "react";

function Modify() {
  return (
    <div className="my-12 py-5 mx-5">
      <form className="w-full max-w-sm my-5">
        <div className="md:flex md:items-center mb-6 my-5">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Nom
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Nom"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Image
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              required
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="image"
              type="text"
              placeholder="image"
            />
          </div>
        </div>
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Description
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            required
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="description"
            type="text"
            value="Description"
          />
        </div>
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-dur??e"
          >
            Dur??e
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            required
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="dur??e"
            type="text"
            value="dur??e"
          />
        </div>
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-Enseignant"
          >
            Enseignant
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            required
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="enseignant"
            type="text"
            value="Enseigant"
          />
        </div>
        <div className="md:flex md:items-center my-5">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button
              className="shadow bg-pink-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded my-5"
              type="button"
            >
              Modifier
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modify;
