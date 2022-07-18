'use strict';
const menu = [];
function Food(foodId, foodName, price) {
    this.foodId = randomId();
    this.foodName = foodName;
    this.price = price;

    menu.push(this);

}


const form = document.getElementById('formID');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    

 
const myTable = document.getElementById('myTable');
const newRow = myTable.insertRow();
const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);
const cell3 = newRow.insertCell(2);
const cell4 = newRow.insertCell(3);

let foodId = this.foodId;
let foodName = event.target.foodName.value;
let foodType = event.target.typeFood.value;
let price = event.target.price.value;
cell1.innerHTML = foodId;
cell2.innerHTML = foodName;
cell3.innerHTML = foodType;
cell4.innerHTML = price;



const newFood = new Food(foodId, foodName, foodType, price);

 console.log(foodId, foodName, foodType, price);
 
   saveData();
}

function randomId (){
    return Math.floor(1000 + Math.random() * 9000);
    
 }


function saveData() {
    localStorage.setItem("menu", JSON.stringify(menu));
  }
  
  function getData() {
    let parsedData = JSON.parse(localStorage.getItem("menu"));
  
    if (parsedData) {
      for (let i = 0; i < parsedData.length; i++) {
        new Food( parsedData[i].foodName, parsedData[i].foodType, parsedData[i].price);
      }
      
    }
  }
  getData()
