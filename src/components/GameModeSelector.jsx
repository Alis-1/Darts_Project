import { useContext } from 'react';
import { GameContext } from "../GameContext";

function GameModeSelector() {
  const { gameMode, setGameMode } = useContext(GameContext);

  return (
    <div id='gamemode'>
      <h2>Game Mode</h2>
      <label>
        <input
          type="radio"
          value="301"
          checked={gameMode === "301"}
          onChange={() => setGameMode("301")}
        />
        301
      </label>
      <label>
        <input
          type="radio"
          value="501"
          checked={gameMode === "501"}
          onChange={() => setGameMode("501")}
        />
        501
      </label>
    </div>
  );
}

export default GameModeSelector;
