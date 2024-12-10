import { useContext, useState } from 'react';
import { GameContext } from "../GameContext";

const Scoreboard = () => {
  const { players, setPlayers } = useContext(GameContext);
  const [inputValue, setInputValue] = useState('');
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const handleAddScore = () => {
    if (inputValue.trim() !== '' && players[currentPlayerIndex]) {
      const newScore = parseInt(inputValue);
      const updatedPlayers = players.map((player, index) => {
        if (index === currentPlayerIndex) {
          if ((player.score - newScore) < 0) {
            alert("Invalid score, results in negative");
          }
          if (player.score - newScore === 0) {
            alert(player.name + " wins!");
          } else {
            return { ...player, score: player.score - newScore };
          }
        }
        return player;
      });
      setPlayers(updatedPlayers);
      setInputValue('');
      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    }
  };

  const handleDeclareWinner = () => {
    const winner = players.reduce((prev, current) => (prev.score < current.score ? prev : current));
    alert(`The winner is ${winner.name} with ${winner.score} points!`);
  };

  return (
    <div id="scoreboard">
      <h2>Scoreboard</h2>
      <h3>Current Player: {players[currentPlayerIndex]?.name}</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddScore()}
        placeholder="Enter points"
        className="input-field"
      />
      <button onClick={handleAddScore} className="add-score-btn">Add Score</button>
      <button onClick={handleDeclareWinner} className="declare-winner-btn">Declare Winner</button>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name}: {player.score} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
