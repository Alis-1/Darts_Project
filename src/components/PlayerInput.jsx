import { useContext, useState } from 'react';
import { GameContext } from "../GameContext";

function PlayerInput() {
  const { players, setPlayers } = useContext(GameContext);
  const [newPlayer, setNewPlayer] = useState("");

  const handleAddPlayer = () => {
    if (newPlayer.trim() !== "") {
      setPlayers([...players, { name: newPlayer.trim(), score: 0, setsWon: 0 }]);
      setNewPlayer("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // estää lomakkeen oletustoiminnan
      handleAddPlayer();
    }
  };

  return (
    <div>
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
          <li key={index}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerInput;