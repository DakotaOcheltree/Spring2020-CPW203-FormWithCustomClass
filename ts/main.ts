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
    let addBtn =
        alert("test");

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
    //TODO: Display videogame below the form

}

//ADD VALIDATION CODE
function isAllDataValid(){
    return true;
}