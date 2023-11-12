import React, { useState, useEffect } from "react";

function Color() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const colors = ["red", "blue", "green", "purple", "orange", "black"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1 style={{ color }}>Personajes de Hollow Knight</h1>
    </div>
  );
}

export default Color;
