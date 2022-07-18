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
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })

    saveData();
    
}

function randomId() {
    return Math.floor(1000 + Math.random() * 9000);

}


function saveData() {
   
    localStorage.setItem("menu", JSON.stringify(menu));
    console.log(menu);
   
}


const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );