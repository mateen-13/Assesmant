import React, { useState } from "react";
import { FaFire, FaPlus, FaTimes } from "react-icons/fa";
import {
  GiWaterDrop,
  GiLeafSkeleton,
  GiBrain,
  GiDragonHead,
} from "react-icons/gi";
import { IoIosFlash } from "react-icons/io";
import { MdCatchingPokemon } from "react-icons/md";

const pokemons = [
  {
    name: "Charizard",
    types: ["FIRE", "FLYING"],
    hp: 78,
    attack: 84,
    defense: 78,
    icon: <FaFire size={40} color="orangered" />,
    added: false,
  },
  {
    name: "Blastoise",
    types: ["WATER"],
    hp: 79,
    attack: 83,
    defense: 100,
    icon: <GiWaterDrop size={40} color="deepskyblue" />,
    added: true,
  },
  {
    name: "Venusaur",
    types: ["GRASS", "POISON"],
    hp: 80,
    attack: 82,
    defense: 83,
    icon: <GiLeafSkeleton size={40} color="green" />,
    added: true,
  },
  {
    name: "Pikachu",
    types: ["ELECTRIC"],
    hp: 35,
    attack: 55,
    defense: 40,
    icon: <IoIosFlash size={40} color="gold" />,
    added: false,
  },
  {
    name: "Mewtwo",
    types: ["PSYCHIC"],
    hp: 106,
    attack: 110,
    defense: 90,
    icon: <GiBrain size={40} color="hotpink" />,
    added: true,
  },
  {
    name: "Dragonite",
    types: ["DRAGON", "FLYING"],
    hp: 91,
    attack: 134,
    defense: 95,
    icon: <GiDragonHead size={40} color="darkolivegreen" />,
    added: false,
  },
];

const PokemonCard = ({ data, toggleAdd }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center relative min-w-[200px]">
      <div className="absolute top-2 right-2">
        {data.added ? (
          <button onClick={toggleAdd}>
            <FaTimes color="red" />
          </button>
        ) : (
          <button onClick={toggleAdd}>
            <FaPlus color="green" />
          </button>
        )}
      </div>
      <div className="mb-2 rounded-full p-3 bg-gradient-to-br from-pink-300 to-pink-600">
        {data.icon}
      </div>

      <h2 className="text-lg font-semibold mb-1">{data.name}</h2>
      <div className="flex gap-1 mb-2">
        {data.types.map((type, idx) => {
          const bgColors = [
            "bg-pink-300 ",
            "bg-green-300 ",
            "bg-orange-300 ",
            "bg-gray-300 ",
            "bg-yellow-300 ",
            "bg-purple-300 ",
          ];
          const randomColor =
            bgColors[Math.floor(Math.random() * bgColors.length)];

          return (
            <span
              key={idx}
              className={`text-xs px-2 py-1 rounded-full text-white font-bold ${randomColor}`}
            >
              {type}
            </span>
          );
        })}
      </div>
      <div className="flex justify-between items-center w-full max-w-xs text-blue-500 font-bold">
        <div className="flex flex-col items-center">
          {data.hp} <span className="text-black font-normal">HP</span>
        </div>
        <div className="flex flex-col items-center">
          {data.attack} <span className="text-black font-normal">Attack</span>
        </div>
        <div className="flex flex-col items-center">
          {data.defense} <span className="text-black font-normal">Defense</span>
        </div>
      </div>
    </div>
  );
};

const PokemonCollectionApp = () => {
  const [collection, setCollection] = useState(pokemons);

  const toggleAdd = (index) => {
    const newCollection = [...collection];
    newCollection[index].added = !newCollection[index].added;
    setCollection(newCollection);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500">
      <div className="bg-white p-6 shadow-lg mb-8 text-center w-full">
        <h1 className="text-2xl font-bold flex justify-center items-center gap-2">
          <MdCatchingPokemon className="text-red-500" /> Pokemon Collection App
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Discover, collect, and organize your favorite Pokemon!
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700">
            Discover Pokemon
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
            My Collection ({collection.filter((p) => p.added).length})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {collection.map((pokemon, index) => (
          <PokemonCard
            key={index}
            data={pokemon}
            toggleAdd={() => toggleAdd(index)}
          />
        ))}
      </div>

      <p className="text-white text-center mt-10">Loading more Pokemon...</p>
    </div>
  );
};

export default PokemonCollectionApp;
