import { useState } from 'react'

function PlayerInput({ players, setPlayers }) {
  const [newPlayer, setNewPlayer] = useState("");

  const handleAddPlayer = () => {
    if (newPlayer.trim() !== "") {
      setPlayers([...players, newPlayer.trim()]);
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
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerInput;
