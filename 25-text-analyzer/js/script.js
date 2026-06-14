const textTarea = document.getElementById('text-input');
const statusMessage = document.getElementById('status-message');
const countChars = document.getElementById('count-chars');
const countCharsNoSpaces = document.getElementById('count-chars-no-spaces');
const countWords = document.getElementById('count-words');
const countSentences = document.getElementById('count-sentences');
const countParagraphs = document.getElementById('count-paragraphs');
const readingTime = document.getElementById('reading-time');
const topWord = document.getElementById('top-word');
const avgWordLength = document.getElementById('avg-word-length');
const freqBars = document.getElementById('freq-bars');
const freqEmpty = document.getElementById('freq-empty');
const btnPaste = document.getElementById('btn-paste');
const btnClear = document.getElementById('btn-clear');

// ==== HELPERS ====
const updateChars = (currentText) => {
    const textWithoutSpaces = currentText.replace(/\s/g, "");

    countChars.textContent = `${currentText.length}`;
    countCharsNoSpaces.textContent = `${textWithoutSpaces.length}`;
};

const updateWordsAndLectureTime = (currentText) => {
    const words = currentText.trim().length === 0
        ? []
        : currentText.trim().split(/\s+/);
    const readingTimeSeconds = Math.ceil((words.length / 200) * 60);
    const readingTimeOutput = words.length === 0 
    ? '0 s'
    : readingTimeSeconds < 60
        ? `${readingTimeSeconds} s`
        : `${Math.ceil(readingTimeSeconds / 60)} min`;
    const avgLengthPerWord = words.length === 0
    ? '-'
    : ((words.reduce((sum, word) => sum + word.length, 0)) / words.length).toFixed(1);

    updateStatusMessage(words, words.length);
    countWords.textContent = words.length;
    readingTime.textContent = readingTimeOutput;
    avgWordLength.textContent = avgLengthPerWord;
};

const updatePhrases = (currentText) => {
    const countPhrases = currentText
        .split(/(?<=[.!?])\s*/)
        .filter(f => f.trim().length > 0);

    countSentences.textContent = countPhrases.length;
};

const updateParagraph = (currentText) => {
    const countParagraphsNumber = currentText
        .split(/(?:\r\n|\n|\r| {2,})/g)
        .filter(f => f.trim().length > 0);

    countParagraphs.textContent = countParagraphsNumber.length;
};

const mostFreqWord = (currentText) => {
    const wordCntArray = currentText
        .toLowerCase()
        .match(/[a-z0-9]+/g) || [];
    const freqWordMap = new Map();

    let mostFreq = '-';
    let maxCount = 0;

    for (const word of wordCntArray) {
        const actualCnt = (freqWordMap.get(word) || 0) + 1;
        freqWordMap.set(word, actualCnt);
        if (actualCnt > maxCount) {
            maxCount = actualCnt;
            mostFreq = word;
        } 
    }
    const freqOutput = currentText.length === 0
    ? '-'
    : `${mostFreq} (${maxCount})`;

    topWord.textContent = freqOutput;
}

const freqTableLetter = (currentText) => {
    const freqLetterCnt = new Map();

    const cleanText = currentText
        .toLowerCase()
        .replace(/[^a-z]/g, '');
    
    for (const letter of cleanText) {
        const actualCnt = (freqLetterCnt.get(letter) || 0) + 1;
        freqLetterCnt.set(letter, actualCnt);
    }

    freqBars.replaceChildren();

    if (freqLetterCnt.size === 0) {
        freqEmpty.style.display = 'block';
        return;
    }

    freqEmpty.style.display = 'none';

    const topFiveLetters = [...freqLetterCnt.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    const totalSum = [...freqLetterCnt.values()]
        .reduce((sum, count) => sum + count, 0);

    for (const [letter, count] of topFiveLetters) {
        const percentage = (count / totalSum) * 100;
        const row = createFreqRow(letter, count, percentage);

        freqBars.appendChild(row);
    }

    console.log("Frequencies table created successfully.");
};

const updateStatusMessage = (wordsLength) => {
    if (!wordsLength) {
        statusMessage.textContent = "Ready to analyze";
    } else {
        statusMessage.textContent = `Analyzing... ${wordsLength.length} words detected`;
    }
};

const createFreqRow = (letter, count, percentage) => {
    const row = document.createElement('div');
    row.classList.add('freq-row');

    const letterSpan = document.createElement('span');
    letterSpan.classList.add('freq-row__letter');
    letterSpan.textContent = letter.toUpperCase();

    const track = document.createElement('div');
    track.classList.add('freq-row__track');

    const fill = document.createElement('div');
    fill.classList.add('freq-row__fill');
    fill.style.width = `${percentage}%`;

    const countSpan = document.createElement('span');
    countSpan.classList.add('freq-row__count');
    countSpan.textContent = count;

    track.appendChild(fill);
    row.append(letterSpan, track, countSpan);

    return row;
};

const analyzeText = () => {
    const text = textTarea.value;
    
    updateChars(text);
    updateWordsAndLectureTime(text);
    updatePhrases(text);
    updateParagraph(text);
    mostFreqWord(text);
    freqTableLetter(text);
};

// Text clean and copy buttons
const textCleaner = () => {
    textTarea.value = '';
    analyzeText();
    textTarea.focus();
}

async function pasteFromClipBoard() {
    try {
        const text = await navigator.clipboard.readText();
        textTarea.value = text;
        analyzeText();
        textTarea.focus();

        console.log("Text tarea pasted correctly: ", text);
    } catch (err) {
        console.error('Error while pasting or denied permissions: ', err)
    }
}

btnPaste.addEventListener('click', pasteFromClipBoard);
btnClear.addEventListener('click', textCleaner);
textTarea.addEventListener('input', analyzeText);
