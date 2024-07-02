import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios';

import AnimatedButtons from '../AnimatedButtons';
import Ingredients from '../Ingredients';
import Recipe from './Recipe';
import StyledRadioButtonsGroup from '../StyledRadioButtonsGroup';
import StyledSpecialNoteForm from '../StyledSpecialNoteForm';
import StyledSliderButton from '../StyledSliderButton';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 3px 20px rgba(0, 0, 0, 0.4)',
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
  const [showResults, setShowResults] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [recipeSteps, setRecipeSteps] = useState([]);
  const [mealType, setMealType] = useState('');
  const [proteinIntake, setProteinIntake] = useState(30);
  const [howManyPeople, setHowManyPeople] = useState(2);
  const [specialNote, setSpecialNote] = useState('');

  const handleMealTypeChange = (event) => {
    setMealType(event.target.value);
  };

  const handleProteinIntakeChange = (event, newValue) => {
    setProteinIntake(newValue);
  };

  const handleHowManyPeopleChange = (event, newValue) => {
    setHowManyPeople(newValue);
  };

  const handleSpecialNoteChange = (event) => {
    setSpecialNote(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/generate-text', {
        MealType: mealType,
        ProteinIntake: proteinIntake,
        HowManyPeople: howManyPeople,
        SpecialNote: specialNote,
      });
      console.log('Generated Text:', response.data);
      setIngredients(response.data.Ingredients);
      setRecipeSteps(response.data.Recipe);
      setShowResults(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 1000, margin: '0 auto', paddingTop: 2 }}>
      <Grid container spacing={2}>
        <Grid md={12}>
          <Box sx={{ flexGrow: 1, maxWidth: 1000, margin: '0 auto', paddingTop: 2 }}>
            <Grid container spacing={2}>
              <Grid xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Item>
                  <StyledRadioButtonsGroup onChange={handleMealTypeChange} />
                </Item>
              </Grid>
              <Grid md={3}></Grid>
              <Grid xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Item>
                  <StyledSliderButton label="Protein intake" mins={0} maxs={100} dvalue={proteinIntake} onChange={handleProteinIntakeChange} />
                </Item>
              </Grid>
              <Grid xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Item>
                  <StyledSliderButton label="How many people" mins={0} maxs={10} dvalue={howManyPeople} onChange={handleHowManyPeopleChange} />
                </Item>
              </Grid>
              <Grid md={3}></Grid>
              <Grid xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Item sx={{ width: '80%' }}>
                  <StyledSpecialNoteForm value={specialNote} onChange={handleSpecialNoteChange} />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid xs={12} md={12}>
          <ItemB>
            <AnimatedButtons onClick={handleSubmit} message="Find Recipe"></AnimatedButtons>
          </ItemB>
        </Grid>
        <Grid xs={12} md={12}>
          <ItemB> 
            <h1 style={robotoStyle}>ENJOY YOUR MEAL</h1>
          </ItemB>
          { showResults ? <ItemC>
            <div>
              <h1 style={robotoStyle}>Ingredients</h1>
              <Ingredients ingredients={ingredients} />
              <h1 style={robotoStyle}>Recipe</h1>
              <Recipe steps={recipeSteps} />
            </div> </ItemC> : null }
        </Grid>
      </Grid>
    </Box>
  );
}
