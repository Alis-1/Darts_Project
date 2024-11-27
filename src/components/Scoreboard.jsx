// components/Scoreboard.js
import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';

const Scoreboard = () => {
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleAddScore = () => {
    setScore(score + parseInt(inputValue));
    setInputValue('');
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4">Scoreboard</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>Current Score: {score}</Typography>
      <TextField
        label="Add Points"
        display="flex"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{ mt: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddScore} sx={{ mt: 2 }}>
        Add Score
      </Button>
    </Box>
  );
};

export default Scoreboard;