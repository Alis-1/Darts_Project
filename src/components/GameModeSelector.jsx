

function GameModeSelector({ gameMode, setGameMode }) {
  return (
    <div>
      <h2>Select Game Mode</h2>
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
