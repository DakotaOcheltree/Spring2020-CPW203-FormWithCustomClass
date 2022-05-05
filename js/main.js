var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function getById(id) {
    return document.getElementById(id);
}
function addVideoGame() {
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = getById("title");
    game.title = titleInput.value;
    var priceInput = getById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = getById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = getById("online");
    game.isDigitalOnly = digitalOnly.checked;
    console.log(game);
    return game;
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notDigitalDisplay = "";
    if (myGame.isDigitalOnly) {
        notDigitalDisplay = "This is a digital only game ";
    }
    else {
        notDigitalDisplay = "You can buy a physical copy! ";
    }
    gameInfo.innerText = "".concat(myGame.title, " has a rating of \n        ").concat(myGame.rating, ". It costs $").concat(myGame.price.toFixed(2), ". It is \n        ").concat(notDigitalDisplay);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function isAllDataValid() {
    return true;
}
