const xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/db");
xhr.send();
xhr.onload = () => { 
    console.log("Server response: ", xhr.statusText); 
    var products = JSON.parse(xhr.responseText);
    console.log(products);
    var html = '<table>';
    var cnt  = 1;    
    html += '<tr>';
    html += '<th>' + "Место" + '</th>' + '<th>' + "Очки" + '<th>' + "Ник" + '</th>';
    html += '</tr>';
    for(var i in products) {
        html += '<tr>';
        html += '<td>' + (cnt++) + '</td>' + '<td>'+products[i]['points'] + '<td>'+products[i]['nick'] + '</td>';
        html += '</tr>';
    } 
    html +='</table>';
    document.getElementById("Table").innerHTML = html;      
}


    


