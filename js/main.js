//  var sum = Number(prompt("raqam kiriting"));

//  if(sum == " "){
//      console.log("raqam kiritng");
//  }else{
//      console.log("yaxshi");
//  }


// var armyAge = 18;
// var maxArmyAge = 27;

// var health = true;

// var userAge = Number(prompt("yoshiz"));

// if(maxArmyAge >= userAge && armyAge <= userAge){
//     console.log("yaxshi");
// }else{
//     console.log("yomon");
// }

// var textTitle = document.querySelectorAll("h1");
// var textTitle = document.getElementById("text");
// var textTitle = document.getElementsByTagName("h1")

// console.log(textTitle);


var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form-input");
var elFormSelect = document.querySelector(".form-select");
var elFormSelectOption = Number(document.querySelector(".form-select-option").value);
var elFormResult = document.querySelector(".form-result");
var elFormBtn = document.querySelector(".form-btn");

var uzs = 10845;
var rub = 79.48;
var euro = 0.88;

elFormBtn.onclick = (event) => {
    event.preventDefault();

    var elInputVal = Number(elFormInput.value);
    var elSelectVal = Number(elFormSelect.value);
    var natija = elInputVal * elSelectVal;
    elFormResult.textContent = (`${natija}`);
};
