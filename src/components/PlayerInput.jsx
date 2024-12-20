import { useContext, useState } from 'react';
import { GameContext } from "../GameContext";

function PlayerInput() {
  const { gameMode, players, setPlayers, removePlayer } = useContext(GameContext);
  const [newPlayer, setNewPlayer] = useState("");

  const handleAddPlayer = () => {
    if (newPlayer.trim() !== "" && gameMode == "301") {
      setPlayers([...players, { name: newPlayer.trim(), score: 301, setsWon: 0 }]);
      setNewPlayer("");
    }
    else if (newPlayer.trim() !== "" && gameMode == "501") {
      setPlayers([...players, { name: newPlayer.trim(), score: 501, setsWon: 0 }]);
      setNewPlayer("");
    }
  };

  const handleRemovePlayer = (index) => {
    removePlayer(index);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // estää lomakkeen oletustoiminnan
      handleAddPlayer();
    }
  };

  return (
    <div id='playerinput'>
      <h2>Add Players</h2>
      <input
        type="text"
        value={newPlayer}
        onChange={(e) => setNewPlayer(e.target.value)}
        onKeyDown={handleKeyDown} // Enter-näppäimen käsittely
        placeholder="Enter player name"
      />
      <button onClick={handleAddPlayer}>Add Player</button>

      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}
          <button onClick={() => handleRemovePlayer(index)}
            style={{
              marginLeft: "10px",
              padding: "5px 10px",
              fontSize: "14px",
              cursor: "pointer",
              backgroundColor: "#ff4d4d",
              border: "none",
              color: "white",
              borderRadius: "4px",
            }}>Remove</button></li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerInput;