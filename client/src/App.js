import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navigation from './Components/Navigation';
import Gridinc from './Components/Grid/Gridinc';
import ParticlesInitializer from "./Components/ParticlesInitializer";
import ParticlesRenderer from "./Components/ParticleRenderer";
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#76c7c0', // example color for primary
    },
    secondary: {
      main: '#FAF9F6', // example color for secondary
    },
    background: {
      default: '#fffbea', // lighter background for recipes
      paper: '#FAF9F6', // used for components that look like paper
    },
  },
  typography: {
    fontFamily: '"Roboto"',
    h1: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
      color: '#333',
    },
  },
});

const App = () => {
  const [init, setInit] = useState(false);

  const handleParticlesInit = () => {
    setInit(true);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <ParticlesInitializer onInit={handleParticlesInit} />
        {init && <ParticlesRenderer particlesLoaded={particlesLoaded} />}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navigation />
          <Gridinc />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
