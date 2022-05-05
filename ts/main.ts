class VHSTape{
    title:string;
    price:number;
    rating:string;
    isCollectorsOnly:boolean;
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
    addBtn.onclick = addVHSTape;
}

function getById(id:string){
    return document.getElementById(id);
}

function addVHSTape(){

        if(isAllDataValid(myVHS)){
            let VHS = getVHSTape();
            displayVHS(VHS);
        }
}
function getVHSTape():VHSTape{
    let VHS = new VHSTape();
    //TODO:Populate with data from teh form
    let titleInput = <HTMLInputElement>getById("title");
    VHS.title = titleInput.value;

    let priceInput = <HTMLInputElement>getById("price");
    VHS.price = parseFloat(priceInput.value);
    //TODO:return game

    let ratingInput = <HTMLSelectElement>getById("rating");
    VHS.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>getById("online");
    VHS.isCollectorsOnly = digitalOnly.checked;
    /*if(isDigitalOnly.checked){
        game.isDigitalOnly = true;
    }
    else{
        game.isDigitalOnly = false;
    }*/
    console.log(VHS);
    return VHS;
}

function displayVHS(myVHS:VHSTape):void{
    let displayDiv = getById("display");

    //Create <h2> with game title
    let VHSHeading = document.createElement("h2");
    VHSHeading.innerText = myVHS.title;

    //Create paragraph with game details
    let VHSInfo = document.createElement("p");
    let notCollectorsOnly = "";
    if(myVHS.isCollectorsOnly){
        notCollectorsOnly = "This is a collector's edition VHS Tape! "
    
    }
    else{
        notCollectorsOnly = "You can buy a copy of this for an affordable price! "
    }
    /*gameInfo.innerText = myGame.title + "has a rating of " +      <-same thing, different way
                    myGame.rating + ". It costs " + myGame.price
                    + ". It is " + notDigitalDisplay +  "digital only";
    */                
    VHSInfo.innerText = `${myVHS.title} has a rating of 
        ${myVHS.rating}. It costs $${myVHS.price.toFixed(2)}. 
        ${notCollectorsOnly}`;

    //Add <h2> in the <div id="display">
    displayDiv.appendChild(VHSHeading);
    //Add <p> game info
    displayDiv.appendChild(VHSInfo);
}

//ADD VALIDATION CODE
function isAllDataValid(myVHS){
    let titleInput = document.getElementById("Input");
    let priceInput = document.getElementById("Input");
    if (myVHS(titleInput).equals("")) {
        myVHS("Error! Please input a Title for VHS!");
    }
    if (myVHS.getText(priceInput).equals("")) {
        myVHS.setText("Error! Please input a Price!");
    }
    else if(myVHS.getText(priceInput).equals(NaN)) {
        myVHS.setText("Error! Please input a Price!");

    }
    

}



