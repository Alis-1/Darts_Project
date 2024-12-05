import { createContext, useState } from "react";

// Luo konteksti
export const GameContext = createContext();

// Luo Provider-komponentti
export const GameProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [gameMode, setGameMode] = useState("301");

// Poista pelaaja
const removePlayer = (index) => {
  setPlayers((prev) => prev.filter((_, i) => i !== index));
};

  const value = {
    players,
    setPlayers,
    gameMode,
    setGameMode,
    removePlayer,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};