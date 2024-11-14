import { useState } from 'react'

function PlayerInput({ players, setPlayers }) {
  const [newPlayer, setNewPlayer] = useState("");

  const handleAddPlayer = () => {
    if (newPlayer.trim() !== "") {
      setPlayers([...players, newPlayer.trim()]);
      setNewPlayer("");
    }
  };

  return (
    <div>
      <h2>Add Players</h2>
      <input
        type="text"
        value={newPlayer}
        onChange={(e) => setNewPlayer(e.target.value)}
        placeholder="Enter player name"
      />
      <button onClick={handleAddPlayer}>Add Player</button>

      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerInput;
