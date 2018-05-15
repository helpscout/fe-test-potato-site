const potato = require('../src/js/potato')

describe('Potato', () => {
  test('Is it a potato?', () => {
    expect(potato).toBe('Indeed!')
  })
})
