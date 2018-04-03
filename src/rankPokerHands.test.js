import rankPokerHands from './rankPokerHands'

describe('rankPokerHands', () => {
  test('higher numerical card wins', () => {
    let sixHigh = '2H 3D 4S 5C 6D'
    let sevenHigh = '2C 3H 4H 5D 7D'

    const result = rankPokerHands(sixHigh, sevenHigh)

    expect(result).toEqual('Second hand wins. - with high card: 7')
  })
})
