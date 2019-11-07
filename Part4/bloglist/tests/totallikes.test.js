const totalLikes = require('../utils/list_helper').totalLikes

describe('sum', () => {
  test('2+2', () => {
    expect(totalLikes([1])).toBe(1)
  })

  test('of many is calculated right', () => {
    expect(totalLikes([1, 2, 3, 4, 5, 6])).toBe(21)
  })

  test('of empty array is zero', () => {
    expect(totalLikes([])).toBe(0)
  })
})