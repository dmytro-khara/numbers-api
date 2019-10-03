const translatorModel = require('../models/translatorModel');

test('returns arabic number', () => {
    const number = 'XLII';
    const result = translatorModel.translateRomanToArabic(number);
    expect(result).toBe(42);
});

test('throws TypeError', () => {
    const incorrectNumber = 'test';
    expect(() => { translatorModel.translateRomanToArabic(incorrectNumber) } ).toThrow(Error);
});
