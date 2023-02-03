const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let endIndx = 10;
  
    while (endIndx  <= expr.length) {
      let letter = expr.slice(endIndx - 10, endIndx); 
      let symb = '';
  
      for (let i = 0; i <= 10; i += 2) {
        let couple = letter.slice(i, i + 2);
        if (couple === '11') {
          symb += '-';
        } else if (couple === '10') {
          symb += '.';
        }
      }  
      if (symb === '') {
        result += ' ';
      } else {
        result += MORSE_TABLE[symb];
      }
      endIndx += 10;
    }
  
    return result;
  }
module.exports = {
    decode
}