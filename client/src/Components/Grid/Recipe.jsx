import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


const steps = [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough on a floured surface to your desired thickness.",
        "Transfer the dough onto a pizza peel or baking sheet lined with parchment paper.",
        "Spread the tomato sauce evenly over the surface of the dough.",
        "Sprinkle the shredded mozzarella cheese over the sauce.",
        "Arrange the pepperoni slices on top of the cheese.",
        "Scatter a few basil leaves over the toppings.",
        "Drizzle olive oil over the entire pizza.",
        "Bake in the preheated oven for 12-15 minutes, or until the crust is golden and cheese is bubbly.",
        "Remove from oven, let cool for a few minutes, and serve."
    ]

export default function Recipe() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {steps.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}