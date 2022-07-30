const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    // 0000000010
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    // 0010101010
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    // 0010111010
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    // 0000111111
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
let Morse_TableAdvansed = {}

function sliceBinary(binary) {
    let = binary2 = []
    binary = binary.split('')
    while (binary.length > 0) { binary2.push(binary.splice(0, 10).join('')) }
    // return console.log('bin2: \n', binary2);
    return binary2;
}

function translateTable(MORSE) {
    let MY_TABLE = []
    let MY_letter = [];

    for (el of Object.keys(MORSE_TABLE)) {
        let elelOuter = el.split('');
        elelOuter.map((point) => {
            if (point == '.') {
                // console.log(`elem: ${el} \t binar: ${point}\t stands: ${10}`);
                MY_letter.push('10')
            }
            else if (point == '-') {
                // console.log(`elem: ${el} \t binar: ${point}\t stands: ${11}`);
                MY_letter.push('11')
            };
        })

        while (MY_letter.length < 5) {
            MY_letter.unshift('00')
        }

        MY_letter = MY_letter.join('')
        MY_TABLE.push(MY_letter);
        MY_letter = []
    }

    Object.keys(MORSE_TABLE).map((element, index) => {
        Morse_TableAdvansed[MY_TABLE[index]] = Object.values(MORSE_TABLE)[index]
    })

    // console.log(Morse_TableAdvansed);
    // console.log(MORSE_TABLE);
    // console.log(MY_TABLE);
    // console.log(MORSE_TABLE);
    return Morse_TableAdvansed
}

function compareNDecode(morseTable, yourInput) {
    let outputDecoded = []
    yourInput.map((letter, ind) => {
        if (Object.keys(morseTable).includes(letter)) {
            outputDecoded[ind] = morseTable[letter]
        }
        else if (letter == '**********') {
            outputDecoded[ind] = ' '
        }
    })
    outputDecoded = outputDecoded.join('')
    return outputDecoded
}

function decode(expr) {
    // write your solution here

    let advansed_table = translateTable(MORSE_TABLE)
    let binary = sliceBinary(expr)
    // console.log(advansed_table);
    // console.log(binary);
    let deconeResult = compareNDecode(advansed_table, binary)
    return deconeResult
}

module.exports = {
    decode
}
// let expr = '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'
// "hello world"
// console.log(module.exports.decode(expr));
