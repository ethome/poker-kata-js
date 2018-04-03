import rankPokerHands from './rankPokerHands'

describe('rankPokerHands', () => {
  test('higher single-digit numerical card wins', () => {
    let sixHigh = '2H 3D 4S 5C 6D'
    let sevenHigh = '2C 3H 4H 5D 7D'

    const result = rankPokerHands(sixHigh, sevenHigh)

    expect(result).toEqual('Second hand wins. - with high card: 7')
  })
  
  test('high card can be in any position in hand', () => {
    let nineHigh = '2H 9D 4S 5C 6D'
    let eightHigh = '2C 3H 4H 8S 7D'
  
    const result = rankPokerHands(nineHigh, eightHigh)
  
    expect(result).toEqual('First hand wins. - with high card: 9')
  })
  
  test('ten beats single-digit high card', () => {
    let nineHigh = '2H 9D 4S 5C 6D'
    let tenHigh = '10C 3H 4H 8S 7D'
  
    const result = rankPokerHands(nineHigh, tenHigh)
  
    expect(result).toEqual('Second hand wins. - with high card: 10')
  })
  
  test('jack beats ten', () => {
    let jackHigh = '2H 9D JS 5C 6D'
    let tenHigh = '10C 3H 4H 8S 7D'
  
    const result = rankPokerHands(jackHigh, tenHigh)
  
    expect(result).toEqual('First hand wins. - with high card: Jack')
  })
  
  test('queen beats jack', () => {
    let jackHigh = '2H 9D JS 5C 6D'
    let queenHigh = '10C QH 4H 8S 7D'
  
    const result = rankPokerHands(jackHigh, queenHigh)
  
    expect(result).toEqual('Second hand wins. - with high card: Queen')
  })

  test('king beats queen', () => {
    let kingHigh = 'KH 9D JS 5C 6D'
    let queenHigh = '10C QH 4H 8S 7D'
  
    const result = rankPokerHands(kingHigh, queenHigh)
  
    expect(result).toEqual('First hand wins. - with high card: King')
  })

  test('ace beats king', () => {
    let kingHigh = 'KH 9D JS 5C 6D'
    let queenHigh = '10C QH 4H AS 7D'
  
    const result = rankPokerHands(kingHigh, queenHigh)
  
    expect(result).toEqual('Second hand wins. - with high card: Ace')
  })
})
