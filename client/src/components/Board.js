import React from 'react'
import { 
  Grid, 
  Button, 
  Divider, 
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { rollDice } from '../actions/currentGame';
import Dice from './Dice'

const Board = ({ 
  roll, 
  dice, 
  keep,
  dispatch,
}) => {
  const maxRoll = roll === 3;
  const disabled = maxRoll ? { disabled: true } : {}
  return (
    <Grid>
      <Grid.Row>
        <Button
          fluid
          onClick={() => dispatch(rollDice())}
          {...disabled}
        >
          { maxRoll ? 'Score Roll' : 'Roll Dice' }
        </Button>
        <Grid.Column width={16}>
          <Divider hidden />
        </Grid.Column>
        { roll > 0 &&
            dice.map( (d,i) => {
              const kept = keep.includes(i)
              return (
                <Dice
                  key={i}
                  value={d}
                  kept={kept}
                  index={i}
                />
              )
            })
          }
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  const { roll, dice, keep } = state.currentGame;
  return {
    roll,
    dice,
    keep,
  }
}


export default connect(mapStateToProps)(Board)