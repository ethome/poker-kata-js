const getValue = function (card) {
  if (card.substring(0, 2) === '10') {
    return 10
  } else if (card[0] === 'J') {
    return 11
  } else if (card[0] === 'Q') {
    return 12
  } else if (card[0] === 'K') {
    return 13
  } else if (card[0] === 'A') {
    return 14
  }
  
  return parseInt(card[0])
}

const sortDecrementing = (firstCard, secondCard) => getValue(secondCard) - getValue(firstCard)

const getStringRepresentation = (card) => {
  if (card[0] === 'J') {
    return 'Jack'
  } else if (card[0] === 'Q') {
    return 'Queen'
  } else if (card[0] === 'K') {
    return 'King'
  } else if (card[0] === 'A') {
    return 'Ace'
  }
  
  return getValue(card)
}

const rankPokerHands = (firstHand, secondHand) => {
  const firstCards = firstHand.split(' ')
  const firstSorted = firstCards.sort(sortDecrementing)
  const firstHighCard = firstSorted[0]
  
  const secondCards = secondHand.split(' ')
  const secondSorted = secondCards.sort(sortDecrementing)
  const secondHighCard = secondSorted[0]

  return getValue(firstHighCard) > getValue(secondHighCard)
    ? `First hand wins. - with high card: ${getStringRepresentation(firstHighCard)}`
    : `Second hand wins. - with high card: ${getStringRepresentation(secondHighCard)}`
}

export default rankPokerHands
