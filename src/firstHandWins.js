import { handTypes } from './types'

const firstHandWins = (firstHand, secondHand) => {
  const firstHandIndex = Object.values(handTypes).indexOf(firstHand.type)
  const secondHandIndex = Object.values(handTypes).indexOf(secondHand.type)
  
  if (firstHandIndex > secondHandIndex) {
    return true
  } else if (firstHandIndex < secondHandIndex) {
    return false
  } else {
    return firstHand.value > secondHand.value
  }
}

export default firstHandWins
