'use strict';
const menu = [];

function Food(foodId, foodName,foodType, price) {

    this.foodId = foodId;
    this.foodName = foodName;
    this.foodType = foodType;
    this.price = price;

    menu.push(this);

}




const form = document.getElementById('formID');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();


    let foodId = randomId();
    let foodName = event.target.foodName.value;
    let foodType = event.target.foodType.value;
    let price = event.target.price.value;


     new Food(foodId, foodName, foodType, price);
    
    //console.log(foodId, foodName, foodType, price);

    saveData();
    
}

function randomId() {
    return Math.floor(1000 + Math.random() * 9000);

}


function saveData() {
   
    localStorage.setItem("menu", JSON.stringify(menu));
    console.log(menu);
   
}

/*function getData() {
    
    let retrivedData =localStorage.getItem("menu");
    let parsedData = JSON.parse(retrivedData);
    console.log(retrivedData);

    if (parsedData != null) {
        for (let i = 0; i < parsedData.length; i++) {
            new Food(parsedData[i].foodId ,parsedData[i].foodName, parsedData[i].foodType, parsedData[i].price);
        }}
        
}*/

