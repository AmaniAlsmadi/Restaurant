'use strict';
const menu =[];
function Food ( foodId, foodName  , price){
    this.foodId = foodId;
    this.foodName = foodName;
    this.price = price;
    
    menu.push(this);
    
}


/*Food.prototype.foodId =*/ 
function randomId (){
    return Math.floor(1000 + Math.random() * 9000);
    
 }

const form =document.getElementById('formID');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
event.preventDefault();
//const newFood = new Food ( foodId, foodName, foodType,price);


const myTable = document.getElementById('myTable');
const newRow = myTable.insertRow();
const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);
const cell3 = newRow.insertCell(2);
const cell4 = newRow.insertCell(3);

let foodID = randomId();
let foodName = event.target.foodName.value;
let foodType = event.target.typeFood.value;
let price = event.target.price.value;
cell1.innerHTML = foodID;
cell2.innerHTML = foodName;
cell3.innerHTML = foodType;
cell4.innerHTML = price;

console.log( this.foodId, foodName, foodType, price)
}
// ID Name Type Price
