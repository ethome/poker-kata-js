import { faceCards } from './types'

const parseStringToCard = (cardStr) => ({
  value: getValue(cardStr),
  suit: cardStr[cardStr.length]
})

const getValue = function (cardStr) {
  if (cardStr.substring(0, 2) === '10') {
    return 10
  } else if (faceCards[cardStr[0]]) {
    return faceCards[cardStr[0]].value
  }
  
  return parseInt(cardStr[0])
}

export default parseStringToCard
