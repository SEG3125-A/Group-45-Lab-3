
var names = localStorage.getItem('names').replace(", ", " ").split(",");
var prices = localStorage.getItem('prices').split(",");
var table = document.getElementById("productTable");
var total = 0
for(var i =0; i<names.length; i++){
    var row = table.insertRow(i+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = names[i];
    cell2.innerHTML = prices[i]
    total = total + parseFloat(prices[i].substring(1))

}
var row = table.insertRow(i+1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.innerHTML = "Total"
cell2.innerHTML = "$" + total.toFixed(2)
document.getElementById("cart-count").innerHTML = names.length