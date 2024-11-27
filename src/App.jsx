
import PlayerInput from './components/PlayerInput';
import GameModeSelector from './components/GameModeSelector';
import { GameProvider } from "./GameContext";
import './app.css';

function App() {
  return (
    <GameProvider>
      <div>
        <h1>Darts Game</h1>
        <GameModeSelector />
        <PlayerInput />
        {/* Lisää muita komponentteja*/}
      </div>
    </GameProvider>
  );}

 

export default App;

