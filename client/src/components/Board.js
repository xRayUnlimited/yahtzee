import React from 'react'
import { 
  Grid, 
  Button, 
  Divider, 
  Header,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { rollDice, newGame, postScore } from '../actions/currentGame';
import Dice from './Dice'

class Board extends React.Component {
  state = { gameOver: false }

  checkEndGame = () => {
    const { scores } = this.props;
    let gameOver = true;
    scores.forEach( s => {
      if (s.score === null)
        gameOver = false
    })

    if (gameOver && !this.state.gameOver) {
      const score = this.calcScore();
      this.props.dispatch(postScore(score))
      this.setState({ gameOver })
    }
  }

  calcScore = () => {
    return this.props.scores
      .map( s => s.score )
      .reduce( (total, score) => {
        return total + score
      },0)
  }

  startNewGame = () => {
    this.props.dispatch(newGame())
    this.setState({ gameOver: false })
  }

  render() {
    const {
      roll, 
      dice, 
      keep,
      scores,
      dispatch,
    } = this.props
    const maxRoll = roll === 3;
    const disabled = maxRoll ? { disabled: true } : {}
    const { gameOver } = this.state;
    this.checkEndGame()

    return (
      <Grid>
        <Grid.Row>
          { gameOver ?
              <Button
                fluid
                onClick={this.startNewGame}
              >
                New Game?
              </Button>
              :
              <Button
                fluid
                onClick={() => dispatch(rollDice())}
                {...disabled}
              >
               { maxRoll ? 'Score Roll' : 'Roll Dice' }
             </Button>
          }
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
        <Grid.Row>
          <Grid.Column>
            <Header textAlign="center">
              Total: { this.calcScore() }
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  const { roll, dice, keep, scores } = state.currentGame;
  return {
    roll,
    dice,
    keep,
    scores,
  }
}


export default connect(mapStateToProps)(Board)