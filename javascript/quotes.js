var quotes = [
  "It's a-me, Kinyua",
  "Thank you so much for playing my game!",
  "Wa-hoo!",
  "Oh yeah",
  "Kinyua's time",
  "A-wa-wa-wa-wa-wa!",
  "Let's-a go!",
  "Here we go!",
  "Luigi!",
  "Niiiiiintendo! Wahoo!",
  "Let's-a go, little guys!",
  "Don't forget to thank Mr. kinyua!",
    "Mamma mia!"
];

var length = quotes.length;

loopquotes()

function loopquotes() {
    var rand =  Math.round(Math.random() * (length - 1));
    var newQuote = quotes[rand]
    document.querySelector('.js-paragraph').innerHTML = newQuote;
   
    };
    //initial quote display
    

    let intervalId = setInterval(loopquotes,1000);
    console.log(intervalId);

    document.querySelector('.quoteBlock').addEventListener('click', () => {
      loopquotes();
    });

    document.body.addEventListener('keydown', (event) => {
      if (event.key === 'e') {
        console.log(event.key)
        loopquotes();           
      }
    });
    

    // clearInterval(intervalId);


