
'use strict';

function getData() {
    let parsedData = JSON.parse(localStorage.getItem("menu"));
  
    if (parsedData) {
      for (let i = 0; i < parsedData.length; i++) {
        new Food( parsedData[i].foodName, parsedData[i].foodType, parsedData[i].price);
      }
      
    }
  }
  getData()
  

