const toPrice = require('./toPrice');

test('any number change to price number', () =>{
    expect(toPrice(3000)).toBe('3,000')
    expect(toPrice(1520000)).toBe('1,520,000')
})