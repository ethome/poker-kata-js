import { faceCards } from './types'

const buildOutput = function (winner, hand) {
  return `${winner} hand wins. - with ${hand.type}: ${valueToString(hand.value)}`
}

const valueToString = (value) => {
  const matchingFaceCard = Object.values(faceCards).find(faceCard => faceCard.value === value)
  
  if (matchingFaceCard) {
    return matchingFaceCard.output
  }
  
  return value
}

export default buildOutput
