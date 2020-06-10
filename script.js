const cardApp = {};
// Create a variable for initial player scores = 0
cardApp.playerScore = 0;
cardApp.computerScore = 0;
// Create a variable for max score = 5
cardApp.maxScore = 5;
cardApp.url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=20';


// fix below
// Make API request to access cards -> https://deckofcardsapi.com/
cardApp.askForCard = $.ajax({
    url: cardApp.url, 
    method: 'GET',
    dataType: 'json'
}).then((result) => {
    // we need to assign a weight to the object inside the result.cards array
    if (result.cards.value === "2") {
        result.cards.weight = 1
    } else if (result.cards.value === "3") {
        result.cards.weight = 2
    } else if (result.cards.value === "4") {
        result.cards.weight = 3
    } else if (result.cards.value == "5") {
        result.cards.weight = 4
    }
    
    console.log(result.cards);
    
})
// fix above
$('.home').on('click', function() {
    window.location.href = './index.html';
})

cardApp.init = function(){
    
// User clicks "start game" button -> links to game page html
$('.start').on('click', function() {
    window.location.href = './gamePage.html';
})


// Create a variable for card weight


// Display score for player and computer
$('.playerScore').html(`<p>Player Score: ${cardApp.playerScore}</p>`);
$('.computerScore').html(`<p>Computer Score: ${cardApp.computerScore}</p>`);

// Randomly generate cards for player and computer

// User clicks "draw" -> displays player's card -> reveal computer's card

// Evaluate which card is higher and disply the result
    
// Update the score

// When update the score

// Check if either score is max score

//     If player reaches the winning score first -> link to winning page html

//     If computer reaches the winning score first -> link to losing page html

// Add the 'restart' button to navigate back to the home page

};

$(function(){
    cardApp.init();
});