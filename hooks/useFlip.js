import React, { useState, useEffect } from "react";

const useFlip = () => {
  const [flip, setFlip] = useState(true);

  const handleFlip = () => {
    setFlip((flip) => !flip);
  };

  return [flip, handleFlip];
};

export default useFlip;
