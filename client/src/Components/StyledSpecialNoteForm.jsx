import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  color: theme.palette.primary.main, // Primary color for label
  fontWeight: 'bold', // Bold text
  marginBottom: theme.spacing(1), // Spacing below the label
  fontSize: 20,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2), // Add padding
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: '#ffffff', // White background for the input
  },
  '& .MuiFilledInput-underline:before': {
    borderBottomColor: theme.palette.secondary.light, // Light secondary color for the underline
  },
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: theme.palette.secondary.main, // Main secondary color for the underline when focused
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary, // Secondary text color for the label
  },
}));

export default function StyledSpecialNoteForm({ value, onChange }) {
  return (
    <>
      <StyledFormLabel id="special-note-label">Special Note:</StyledFormLabel>
      <StyledBox
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '97%' },
        }}
        noValidate
        autoComplete="off"
      >
        <StyledTextField
          id="filled-multiline-flexible"
          label="Details"
          multiline
          maxRows={5}
          variant="filled"
          value={value}
          onChange={onChange}
        />
      </StyledBox>
    </>
  );
}
