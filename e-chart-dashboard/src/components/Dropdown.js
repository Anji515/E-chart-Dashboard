import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const Props = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['Ethereum', 'Solana', 'Cosmos', 'Osmosis', 'Dogecoin'];

function getTheme(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Dropdown({ BitCoins, setBitCoins }) {
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setBitCoins(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleDelete = (chipToDelete) => () => {
    setBitCoins((prevBitCoins) =>
      prevBitCoins.filter((chip) => chip !== chipToDelete)
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: '90%' }}>
        <InputLabel id="demo-multiple-chip-label">Selct Crypto</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={BitCoins}
          onChange={handleChange}
          input={<OutlinedInput 
          color='primary'
          id="select-multiple-chip" label="Selct Crypto" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', color:'white', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  // variant="outlined"
                  color="success"
                  size="small"
                  onDelete={handleDelete(value)}
                />
              ))}
            </Box>
          )}
          MenuProps={Props}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getTheme(name, BitCoins, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}