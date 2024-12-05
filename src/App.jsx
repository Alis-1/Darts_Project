import React from 'react';
import { Container } from '@mui/material';
import PlayerInput from './components/PlayerInput';
import GameModeSelector from './components/GameModeSelector';
import Scoreboard from './components/Scoreboard';
import { GameProvider } from "./GameContext";
import './app.css';

function App() {
  return (
    <GameProvider>
      <Container>
        <h1>Welcome to Darts Game</h1>
        <GameModeSelector />
        <PlayerInput />
        <Scoreboard />
        {/* Lisää muita komponentteja */}
      </Container>
    </GameProvider>
  );
}

export default App;