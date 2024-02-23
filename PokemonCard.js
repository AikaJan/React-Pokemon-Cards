import React, { useState } from "react";
import "./PokemonCard.css";
import useFlip from "./hooks/useFlip";

/* Renders a single pokemon card. */
// function PokemonCard({ front, back, name, stats }) {
//   const [isFacingUp, setIsFacingUp] = useState(true);
//   const flipCard = () => {
//     setIsFacingUp(isUp => !isUp);
//   };
const PokemonCard = ({ front, back, name, stats }) => {
  const [isFacingUp, setIsFacingUp] = useFlip();

  return (
    // <div onClick={() => isFacingUp()} className="PokemonCard Card">
    <div
      onClick={() => setIsFacingUp(!isFacingUp)}
      className="PokemonCard Card"
    >
      {isFacingUp ? (
        <div className="PokemonCard-front">
          <img src={front} alt={`{name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map((stat) => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={back} alt={`{name} back`} />
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
