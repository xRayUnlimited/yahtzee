import { 
  ROLL_DICE, 
  TOGGLE_KEPT,
} from '../actions/currentGame';

const currentGame = (
  state = {
    roll: 0,
    dice: [...new Array(5)],
    keep: [],
  },
  action
) => {
  switch (action.type) {
    case ROLL_DICE:
      return {
        ...state,
        dice: action.dice,
        roll: state.roll + 1
      }
    case TOGGLE_KEPT:
      return {
        ...state,
        keep: action.keep
      }
    default:
      return state
  }
}

export default currentGame;