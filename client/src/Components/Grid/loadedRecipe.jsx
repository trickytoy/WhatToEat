import React from 'react';
import Ingredients from '../Ingredients';
import Recipe from './Recipe';

const robotoStyle = {
  fontFamily: 'Roboto, sans-serif',
  color: '#76c7c0',
};

export default function LoadedRecipe() {
  return (
    <div>
      <h1 style={robotoStyle}>Ingredients</h1>
      <Ingredients />
      <h1 style={robotoStyle}>Recipe</h1>
      <Recipe />
    </div>
  );
}
