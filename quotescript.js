let quoteDiv = document.getElementById('quote');
let nextQuote = document.getElementById('next-quote');
let numberOfQuotes = document.getElementById('quote-number');
let restartQuote = document.getElementById('start-again');
let authorsName = document.getElementById('authors-name')
let counter = 0;

let quoteArr = [
    {
        quote: 'When the sun rises, the birds are ready to work.',
        author: 'Felix'
    },

    {
        quote: 'When the rain falls, the grasses are ready to grow.',
        author: 'Yagmus'
    },

    {
        quote: 'Working is what keep the body and soul together',
        author: 'Iroms'
    }
]

setInterval(randomQuotes, 120000);
nextQuote.addEventListener('click', randomQuotes);
restartQuote.addEventListener('click', startQuoteAgain);

function randomQuotes() {
    let randomQuote = quoteArr[Math.floor(Math.random() * quoteArr.length)];
    quoteDiv.innerHTML = randomQuote.quote;
    authorsName.innerHTML = randomQuote.author;
    counter = counter + 1;
    numberOfQuotes.innerHTML = counter;
}

function startQuoteAgain() {
    numberOfQuotes.innerHTML = 0;
    quoteDiv.innerHTML = '';
    authorsName.innerHTML = '';
    
}
