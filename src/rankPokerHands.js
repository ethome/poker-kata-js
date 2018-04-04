import buildOutput from './buildOutput'
import findHand from './findHand'
import firstHandWins from './firstHandWins'

const rankPokerHands = (firstCards, secondCards) => {
  const firstHand = findHand(firstCards)
  const secondHand = findHand(secondCards)
  
  if (firstHandWins(firstHand, secondHand)) {
    return buildOutput('First', firstHand)
  } else {
    return buildOutput('Second', secondHand)
  }
}

export default rankPokerHands
