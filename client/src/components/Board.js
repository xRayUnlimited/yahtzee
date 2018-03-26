import React from 'react';
import Dice from './Dice';
import { Grid } from 'semantic-ui-react';

const Board = () => (
  <Grid>
    <Grid.Row>
      <Dice value={1} />
      <Dice value={2} />
      <Dice value={3} />
      <Dice value={4} />
      <Dice value={5} />
    </Grid.Row>
  </Grid>
)
export default Board;