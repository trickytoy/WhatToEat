import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const StyledFormControl = styled(FormControl)(({ theme }) => ({}));

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  color: theme.palette.primary.main, // Primary color for label
  fontWeight: 'bold', // Bold text
  fontSize: 20,
  marginBottom: theme.spacing(1), // Spacing below the label
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiRadio-root': {
    color: theme.palette.secondary.main, // Secondary color for radio buttons
    '& svg': {
      fontSize: 60, // Make icons bigger
      [theme.breakpoints.down('xs')]: {
        fontSize: 20, // Adjust icon size for extra-small screens
      },
    },
  },
  '&:hover .MuiRadio-root': {
    color: theme.palette.secondary.dark, // Hover effect on radio icon
  },
  '& .MuiTypography-root': {
    color: theme.palette.text.primary, // Primary text color
    fontSize: '1.2rem', // Increase font size
  },
  '&:hover .MuiTypography-root': {
    color: theme.palette.secondary.dark, // Hover effect on text
  },
}));

const CustomRadio = styled(Radio)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    fontSize: '2rem', // Increase icon size
  },
  '&:hover': {
    color: theme.palette.secondary.dark, // Change color on hover
  },
}));

export default function StyledRadioButtonsGroup() {
  return (
    <StyledFormControl>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <StyledFormLabel id="demo-radio-buttons-group-label">MEAL</StyledFormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="breakfast"
          name="radio-buttons-group"
          sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
        >
          <StyledFormControlLabel
            value="breakfast"
            control={<CustomRadio icon={<BreakfastDiningIcon />} checkedIcon={<BreakfastDiningIcon />} />}
          />
          <StyledFormControlLabel
            value="lunch"
            control={<CustomRadio icon={<LunchDiningIcon />} checkedIcon={<LunchDiningIcon />} />}
          />
          <StyledFormControlLabel
            value="dinner"
            control={<CustomRadio icon={<DinnerDiningIcon />} checkedIcon={<DinnerDiningIcon />} />}
          />
          <StyledFormControlLabel
            value="snack"
            control={<CustomRadio icon={<FastfoodIcon />} checkedIcon={<FastfoodIcon />} />}
          />
        </RadioGroup>
      </Box>
    </StyledFormControl>
  );
}
