import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Theme } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

import AnimatedButtons from '../AnimatedButtons';
import LoadedRecipe from './loadedRecipe';
import StyledRadioButtonsGroup from '../StyledRadioButtonsGroup';
import StyledSpecialNoteForm from '../StyledSpecialNoteForm';


import StyledSliderButton from '../StyledSliderButton';

const getRandomInt = (min, max) => {
  min = Math.ceil(min); // Ensuring min is an integer
  max = Math.floor(max); // Ensuring max is an integer
  return Math.floor(Math.random() * (max - min) + min);
};

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius, // Rounded corners
  boxShadow: '0 3px 20px rgba(0, 0, 0, 0.4)', // Light shadow for depth
  backgroundColor: '#2A68A2',
}));

const ItemB = styled(Paper)(({ theme }) => ({
  padding: 1,
  textAlign: 'center',
  border: 'none',
  boxShadow: 'none',
  background: 'none',
  [theme.breakpoints.down('xs')]: {
    display: 'none',
  },
}));

const ItemC = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  background: 'none',
  border: `6px solid #2A68A2`,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
}));

const robotoStyle = {
  fontFamily: 'Roboto, sans-serif',
  color: '#2a68a2',
};

export default function Gridinc() {
  const [showResults, setShowResults] = React.useState(false);

  const handleClick = () => {
    setShowResults(true);
  };

  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 1000, margin: '0 auto', paddingTop: 2 }}>
      <Grid container spacing={2}>
        <Grid md={12}>
          <Box sx={{ flexGrow: 1, maxWidth: 1000, margin: '0 auto', paddingTop: 2 }}>
            <Grid container spacing={2}>
              <Grid xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Item>
                  <StyledRadioButtonsGroup></StyledRadioButtonsGroup>
                </Item>
              </Grid>
              <Grid md={3}></Grid>
              <Grid xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Item>
                  <StyledSliderButton label="Protein intake" mins={0} maxs={100} dvalue={30}></StyledSliderButton>
                </Item>
              </Grid>
              <Grid xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Item>
                  <StyledSliderButton label="How many people" mins={0} maxs={10} dvalue={2}></StyledSliderButton>
                </Item>
              </Grid>
              <Grid md={3}></Grid>
              <Grid xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Item sx={{ width: '80%' }}>
                  <StyledSpecialNoteForm></StyledSpecialNoteForm>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid xs={12} md={12}>
          <ItemB>
            <AnimatedButtons onClick={handleClick} message="Find Recipe"></AnimatedButtons>
          </ItemB>
        </Grid>
        <Grid xs={12} md={12}>
          <ItemB> 
            <h1 style={robotoStyle}>ENJOY YOUR MEAL</h1>
          </ItemB>
          { showResults ? <ItemC> <LoadedRecipe /> </ItemC> : null }
        </Grid>
      </Grid>
    </Box>
  );
}
