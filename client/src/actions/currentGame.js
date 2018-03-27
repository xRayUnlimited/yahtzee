export const ROLL_DICE = 'ROLL_DICE';
export const TOGGLE_KEPT = 'TOGGLE_KEPT';

export const rollDice = () => {
  return (dispatch, getState) => {
    const { keep, dice } = getState().currentGame

    const newDice = dice.map( (value, index) => {
      if (keep.includes(index))
        return value
      return Math.floor(Math.random() * 6) + 1
    })

    dispatch({ type: ROLL_DICE, dice: newDice })
  }
}

export const toggleKept = (index) => {
  return (dispatch, getState) => {
    const { keep } = getState().currentGame
    let updated;

    if (keep.includes(index))
      updated = keep.filter( k => k !== index )
    else
      updated = [...keep, index]

    dispatch({ type: TOGGLE_KEPT, keep: updated })
  }
}