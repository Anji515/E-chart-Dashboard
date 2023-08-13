import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import CancelIcon from "@mui/icons-material/Cancel";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 10;

const Props = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const coins = ['Ethereum', 'Solana', 'Cosmos', 'Osmosis', 'Dogecoin'];

function getTheme(coin, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(coin) === -1
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


  return (
    <div>
      <FormControl sx={{ m: 1, border:'1px solid white', borderRadius:'5px', width: '100%' }}>
        <InputLabel style={{color:"white"}} id="demo-multiple-chip-label">Selct Crypto</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={BitCoins}
          onChange={handleChange}
          input={<OutlinedInput 
          id="select-multiple-chip"/>}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', color:'white', flexWrap: 'wrap', gap: 2 }}>
              {selected.map((value) => (
                <Chip
                key={value}
                label={value}
                color="success"
                onDelete={() =>
                  setBitCoins(
                    BitCoins.filter((item) => item !== value)
                  )
                }
                deleteIcon={
                  <CancelIcon
                    onMouseDown={(event) => event.stopPropagation()}
                  />
                }
              />
              ))}
            </Box>
          )}
          MenuProps={Props}
        >
          {coins.map((coin) => (
            <MenuItem
              key={coin}
              value={coin}
              style={getTheme(coin, BitCoins, theme)}
            >
              {coin}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}