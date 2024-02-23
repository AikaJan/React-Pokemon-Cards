import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, handleFlip] = useFlip();
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={handleFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
