//fortune cookie generator

const fortunateWords = ["good", "bad", "unlucky", "lucky", "great", "terrible"];
const wordsNeeded = 2;
let words = [];

function getRandWord(arr) {
    let i = Math.floor(Math.random() * 6);
    return arr[i]
}

function getWords () {
    let count = 0;
    while (count < wordsNeeded) {
        let i = getRandWord(fortunateWords);
        if (words.includes(i)) {
            continue;
        } else {
            words.push(i);
            count++;
        }
    }
};

function getMessage () {
    getWords();
    console.log(`You will have a ${words[0]} day and get a ${words[1]} surprise!`);
}

getMessage();