class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}
/*
//test code
let myGame = new VideoGame;
myGame.title = "Mario";
myGame.price = 50.00;
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/
window.onload = function(){
    let addBtn = 
    <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function getById(id:string){
    return document.getElementById(id);
}

function addVideoGame(){

        if(isAllDataValid()){
            let game = getVideoGame();
            displayGame(game);
        }
}
function getVideoGame():VideoGame{
    let game = new VideoGame();
    //TODO:Populate with data from teh form
    let titleInput = <HTMLInputElement>getById("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value);
    //TODO:return game

    let ratingInput = <HTMLSelectElement>getById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>getById("online");
    game.isDigitalOnly = digitalOnly.checked;
    /*if(isDigitalOnly.checked){
        game.isDigitalOnly = true;
    }
    else{
        game.isDigitalOnly = false;
    }*/
    console.log(game);
    return game;
}

function displayGame(myGame:VideoGame):void{
    let displayDiv = getById("display");

    //Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    //Create paragraph with game details
    let gameInfo = document.createElement("p");
    let notDigitalDisplay = "";
    if(myGame.isDigitalOnly){
        notDigitalDisplay = "This is a digital only game "
    
    }
    else{
        notDigitalDisplay = "You can buy a physical copy! "
    }
    /*gameInfo.innerText = myGame.title + "has a rating of " +      <-same thing, different way
                    myGame.rating + ". It costs " + myGame.price
                    + ". It is " + notDigitalDisplay +  "digital only";
    */                
    gameInfo.innerText = `${myGame.title} has a rating of 
        ${myGame.rating}. It costs $${myGame.price.toFixed(2)}. It is 
        ${notDigitalDisplay}`;

    //Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);
    //Add <p> game info
    displayDiv.appendChild(gameInfo);
}

//ADD VALIDATION CODE
function isAllDataValid(){
    return true;
}