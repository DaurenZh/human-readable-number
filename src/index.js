module.exports = function toReadable(num) {
  const ones = [
    'zero',

    'one',

    'two',

    'three',

    'four',

    'five',

    'six',

    'seven',

    'eight',

    'nine',
  ];
  const teens = [
    'ten',

    'eleven',

    'twelve',

    'thirteen',

    'fourteen',

    'fifteen',

    'sixteen',

    'seventeen',

    'eighteen',

    'nineteen',
  ];
  const tens = [
    '',
    '',

    'twenty',

    'thirty',

    'forty',

    'fifty',

    'sixty',

    'seventy',

    'eighty',

    'ninety',
  ];

  let result = '';

  if (num === 0) return ones[0];
  const hundred = Math.floor(num / 100);

  const remainder = num % 100;

  if (hundred > 0) {
    result += ones[hundred];
    result += ' ';
    result += 'hundred';
    if (remainder > 0) result += ' ';
  }

  if (remainder >= 10 && remainder < 20) {
    result += teens[remainder - 10];
  } else {
    const ten = Math.floor(remainder / 10);
    const one = remainder % 10;

    if (ten > 0) result += tens[ten];
    if (ten > 0 && one > 0) result += ' ';
    if (one > 0) result += ones[one];
  }
  return result.trim();
};
