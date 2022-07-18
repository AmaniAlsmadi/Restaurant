
'use strict';


const menu = [];

function Food(foodId, foodName,foodType, price) {

    this.foodId = foodId;
    this.foodName = foodName;
    this.foodType = foodType;
    this.price = price;

    menu.push(this);
    getData();
}

 Food.prototype.render = function (menu){
   
    
    const myTable = document.getElementById('myTable');
    const newRow = myTable.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = menu.foodId;
    cell2.textContent = menu.foodName;
    cell3.textContent = menu.foodType;
    cell4.textContent = menu.price;
    }

    
    function getData() {
    
        let retrivedData =localStorage.getItem("menu");
        let parsedData = JSON.parse(retrivedData);
        console.log(parsedData);
        if(retrivedData){
            for(let i=0 ; i< retrivedData.length; i++){
               retrivedData[i].render();
            }
        }
    
        /*if (parsedData != null) {
            for (let i = 0; i < parsedData.length; i++) {
                new Food(parsedData[i].foodId ,parsedData[i].foodName, parsedData[i].foodType, parsedData[i].price);
                return;
            }}
            for ( i= 0 ; i< menu.length; i++){
                menu[i].render();
                return;
            }*/
    } 
    
   getData();
  

   
