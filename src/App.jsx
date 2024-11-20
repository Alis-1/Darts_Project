import { useState } from 'react'
import PlayerInput from './components/PlayerInput';
import GameModeSelector from './components/GameModeSelector';
import './index.css';

function App() {
  // Alustetaan pelaajat, pelimuoto ja pelin aloitustila
  const [players, setPlayers] = useState([]);
  const [gameMode, setGameMode] = useState("301");  //esimerkin pelimuoto, joka valitaan oletusarvoksi.

  const handleStartGame = () => {
    console.log("Button clicked");
    if (players.length >= 2) {
      console.log("Game starting with players:", players, "and mode:", gameMode);
      // Siirry pelinäkymään tai luo peliolion tila
    } else {
      alert("Please add at least two players!");
    }
  };


  return (
    <div className="App">
      <h1>Darts Game</h1>
      <PlayerInput players={players} setPlayers={setPlayers} />
      <GameModeSelector gameMode={gameMode} setGameMode={setGameMode} />
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}

export default App;

