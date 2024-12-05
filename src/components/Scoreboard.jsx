import React, { useContext, useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
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
          return { ...player, score: player.score + newScore };
        }
        return player;
      });
      setPlayers(updatedPlayers);
      setInputValue('');
      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    }
  };

  const handleDeclareWinner = () => {
    const winner = players.reduce((prev, current) => (prev.score > current.score ? prev : current));
    alert(`The winner is ${winner.name} with ${winner.score} points!`);
  };

  return (
    <Box id='scoreboard' sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4">Scoreboard</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>Current Player: {players[currentPlayerIndex]?.name}</Typography>
      <TextField
        color='primary'
        label="Add Points"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddScore()}
        sx={{ mt: 2, input: { color: 'white' } }}
      />
      <Button variant="contained" color="primary" onClick={handleAddScore} sx={{ mt: 3 }}>
        Add Score
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDeclareWinner} sx={{ mt: 3, ml: 1 }}>
        Declare Winner
      </Button>
      <Box component="ul" sx={{ listStyleType: 'none', p: 0, mt: 3 }}>
        {players.map((player, index) => (
          <Box component="li" key={index} sx={{ mb: 1 }}>
            <Typography variant="body1">{player.name}: {player.score} points</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Scoreboard;