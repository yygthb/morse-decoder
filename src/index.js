const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decodeSymbol(str) {
  if (str === '**********') return ' ';

  const key = str.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, '');
  return MORSE_TABLE[key];
}

function decode(expr) {
  const lettersCount = expr.length / 10;
  let phrase = '';

  for (let i = 0; i < lettersCount; i++) {
    const symbol = expr.substring(10 * i, 10 * (i + 1));
    phrase += decodeSymbol(symbol);
  }
  return phrase;
}

module.exports = {
  decode,
};
