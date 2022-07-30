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
let expr = '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'

function sliceBinary(binary) {
    let = binary2 = []
    binary = binary.split('')
    while (binary.length > 0) {
        binary2.push(binary.splice(0, 10))
    }
    // return console.log('bin2: \n', binary2);
    return binary2;
}

function translateTable(MORSE) {
    // console.log(MORSE_TABLE);
    let MY_TABLE = []
    let MY_letter = [];
    for (el of Object.keys(MORSE_TABLE)) {
        let elelOuter = el.split('');
        // console.log(elelOuter);
        elelOuter.map((point, pEl) => {
            // console.log(point);
            if (point == '.') {

                // console.log(`elem: ${el} \t binar: ${point}\t stands: ${10}`);
                MY_letter.push('10')
            }
            else if (point == '-') {
                // console.log(`elem: ${el} \t binar: ${point}\t stands: ${11}`);
                MY_letter.push('11')
            };
        })
        // console.log(MY_letter, ' no adds');
        while (MY_letter.length < 5) {
            MY_letter.unshift('00')
        }
        // console.log(MY_letter.length);
        // console.log(MY_letter, ' + adds');

        // 
        MY_letter = MY_letter.join('')
        // console.log(MY_letter);
        
        MY_TABLE.push(MY_letter);
        MY_letter = []
    }
    console.log(MY_TABLE);

    // console.log(MORSE_TABLE);
    return true

}

let morse_table2 = {}
function decode(expr) {
    // write your solution here
    for (const [key, value] of Object.entries(MORSE_TABLE)) {
        morse_table2[key] = value;
    }
    translateTable(MORSE_TABLE)
    // return sliceBinary(expr)
    return true
}

module.exports = {
    decode
}
console.log(module.exports.decode(expr));
// "hello world"