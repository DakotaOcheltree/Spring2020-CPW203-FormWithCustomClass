var VHSTape = (function () {
    function VHSTape() {
    }
    return VHSTape;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVHSTape;
};
function getById(id) {
    return document.getElementById(id);
}
function addVHSTape() {
    if (isAllDataValid()) {
        var VHS = getVHSTape();
        displayVHS(VHS);
    }
}
function getVHSTape() {
    var VHS = new VHSTape();
    var titleInput = getById("title");
    VHS.title = titleInput.value;
    var priceInput = getById("price");
    VHS.price = parseFloat(priceInput.value);
    var ratingInput = getById("rating");
    VHS.rating = ratingInput.value;
    var digitalOnly = getById("online");
    VHS.isCollectorsOnly = digitalOnly.checked;
    console.log(VHS);
    return VHS;
}
function displayVHS(myVHS) {
    var displayDiv = getById("display");
    var VHSHeading = document.createElement("h2");
    VHSHeading.innerText = myVHS.title;
    var VHSInfo = document.createElement("p");
    var notCollectorsOnly = "";
    if (myVHS.isCollectorsOnly) {
        notCollectorsOnly = "This is a collector's edition VHS Tape! ";
    }
    else {
        notCollectorsOnly = "You can buy a copy of this for an affordable price! ";
    }
    VHSInfo.innerText = "".concat(myVHS.title, " has a rating of \n        ").concat(myVHS.rating, ". It costs $").concat(myVHS.price.toFixed(2), ". \n        ").concat(notCollectorsOnly);
    displayDiv.appendChild(VHSHeading);
    displayDiv.appendChild(VHSInfo);
}
function isAllDataValid() {
    var isValid = true;
    var titleBox = document.getElementById("title");
    var title = titleBox.value;
    if (title == "") {
        isValid = false;
        titleBox.nextElementSibling.innerHTML =
            "Title is Required!";
    }
    var priceBox = document.getElementById("price");
    var price = priceBox.value;
    if (price == " " || isNaN(parseFloat(price))) {
        isValid = false;
        priceBox.nextElementSibling.innerHTML =
            "Price is required and must be a number!";
    }
    return isValid;
}
