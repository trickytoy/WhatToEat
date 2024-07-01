import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  color: theme.palette.primary.main, // Primary color for label
  fontWeight: 'bold', // Bold text
  fontSize: 20,
  marginBottom: theme.spacing(1), // Spacing below the label
  textAlign: 'center',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  width: '175.41px',
  height: '226.75px',
  paddingTop: theme.spacing(2),
  padding: theme.spacing(2), // Add padding
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
  '& input[type="range"]': {
    WebkitAppearance: 'slider-vertical',
  },
  '& .MuiSlider-thumb': {
    backgroundColor: theme.palette.secondary.main, // Secondary color for the slider thumb
    width: 24, // Make thumb wider
    height: 24, // Make thumb taller
  },
  '& .MuiSlider-track': {
    backgroundColor: theme.palette.secondary.light, // Light secondary color for the slider track
    width: 14, // Make track wider
  },
  '& .MuiSlider-rail': {
    backgroundColor: theme.palette.secondary.dark, // Dark secondary color for the slider rail
    width: 14, // Make rail wider
  },
}));

function preventHorizontalKeyboardNavigation(event) {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
  }
}

export default function StyledSliderButton({ label, mins, maxs, dvalue }) {
  return (
    <>
      <StyledFormLabel id="demo-radio-buttons-group-label">{label}</StyledFormLabel>
      <StyledBox>
        <StyledSlider
          min={mins} 
          max={maxs}
          orientation="vertical"
          defaultValue={dvalue}
          aria-label="Protein Intake"
          valueLabelDisplay="auto"
          onKeyDown={preventHorizontalKeyboardNavigation}
          sx={{ height: '180px' }} // Increase the height of the slider to fit within the box
        />
      </StyledBox>
    </>
  );
}
