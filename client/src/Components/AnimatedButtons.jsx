import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const AnimatedButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s',
  '&:active': {
    transform: 'scale(0.50)',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.3)',
    opacity: 0,
    transition: 'opacity 0.2s',
  },
  '&:active:after': {
    opacity: 1,
  },
}));

export default function AnimatedButtons(props) {
  return (
    <AnimatedButton variant="contained" color="primary" onClick={props.onClick}>
      {props.message}
    </AnimatedButton>
  );
}
