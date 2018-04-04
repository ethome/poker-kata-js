import { handTypes } from './types'
import parseStringToCard from './parseStringToCard'

const findHand = cardStrs => {
  const cards = cardStrs
    .split(' ')
    .map(parseStringToCard)
    .sort(sortDecrementing)
  
  const pair = findPair(cards)
  
  if (pair) {
    return pair
  }
  
  return findHighCard(cards)
}

const sortDecrementing = (firstCard, secondCard) => secondCard.value - firstCard.value

const findPair = cards => {
  let pair
  
  cards.forEach(card => {
    const cardsWithValue = cards.filter(someCard => card.value === someCard.value)
    if (cardsWithValue.length === 2) {
      pair = {
        type: handTypes.pair,
        value: card.value
      }
    }
  })
  
  return pair
}

const findHighCard = cards => ({
  type: handTypes.highCard,
  value: cards[0].value
})

export default findHand
