/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Luo konteksti
export const GameContext = createContext();


// Luo Provider-komponentti
export const GameProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [gameMode, setGameMode] = useState("301");

  const value = {
    players,
    setPlayers,
    gameMode,
    setGameMode,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

