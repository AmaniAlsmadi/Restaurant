
const myTable = document.getElementById('myTable');

function getData() {
    let retrivedData = localStorage.getItem("menu");
    let parsedData = JSON.parse(retrivedData);
    console.log(parsedData);

    if (parsedData != null) {
        for (let i = 0; i < parsedData.length; i++) {
            const newRow = myTable.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);

            cell1.innerHTML = parsedData[i].foodId;
            cell2.textContent = parsedData[i].foodName;
            cell3.textContent = parsedData[i].foodType;
            cell4.textContent = parsedData[i].price;
        }
    }
}

getData();
