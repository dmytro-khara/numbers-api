const numeralsLib =  require('roman-numerals');

translateRomanToArabic = (number) =>  {
    return numeralsLib.toArabic(number);
};

module.exports = {
    translateRomanToArabic
};
