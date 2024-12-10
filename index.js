let numBank = [];
let evenNums = [];
let oddNums = [];

const addNumForm = document.querySelector("form");
const sort1Button = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");

addNumForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let userInput = document.getElementById("number");
    const userInputVal = userInput.value;
    let isNum = (!isNaN(parseFloat(userInputVal)));
    if (isNum){
        let userNum = parseFloat(userInputVal);
        numBank.push(userNum);
    }
    addNumForm.reset();
    displayNumberBank();
});

sort1Button.addEventListener('click', (event) => {
    event.preventDefault();
    let removedNum = numBank.shift();
    sortNum(removedNum);
    displayNumberBank();
});

sortAllButton.addEventListener('click', (event) => {
    event.preventDefault();
    numBank.forEach((el) => {
        sortNum(el);
    });
    numBank = [];
    displayNumberBank();
});

function displayNumberBank() {
    const numBankDisplay = document.getElementById("numberBank");
    const numBankList = numBankDisplay.querySelector("output");
    numBankList.textContent = numBank;
    numBankDisplay.appendChild(numBankList);
}

function sortNum(currentNum) {
    if (Math.abs(currentNum) % 2 === 0) {
        evenNums.push(currentNum);
        const evenNumDisplay = document.getElementById("evens");
        const evenNumList = evenNumDisplay.querySelector("output");
        evenNumList.textContent = evenNums;
        evenNumDisplay.appendChild(evenNumList);
    } else if (Math.abs(currentNum) % 2 === 1) {
        oddNums.push(currentNum);
        const oddNumDisplay = document.getElementById("odds");
        const oddNumList = oddNumDisplay.querySelector("output");
        oddNumList.textContent = oddNums;
        oddNumDisplay.appendChild(oddNumList);
    } 
}