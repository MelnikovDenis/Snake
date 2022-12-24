/*
Тут надо как-то получать json из базы данных
*/
var products = [
    {"points": "101", "nick" : "Славик1"},
    {"points": "101", "nick" : "Славик2"},
    {"points": "101", "nick" : "Славик3"},
    {"points": "101", "nick" : "Славик4"},
    {"points": "101", "nick" : "Славик5"},
    {"points": "101", "nick" : "Славик6"},
    {"points": "101", "nick" : "Славик7"},
    {"points": "101", "nick" : "Славик8"},
    {"points": "101", "nick" : "Славик9"},
    {"points": "101", "nick" : "Славик10"},
    {"points": "101", "nick" : "Славик11"},
    {"points": "101", "nick" : "Славик12"},
    {"points": "101", "nick" : "Славик13"},
    {"points": "101", "nick" : "Славик14"},
    {"points": "101", "nick" : "Славик15"},
    {"points": "101", "nick" : "Славик16"},
    {"points": "101", "nick" : "Славик17"},
    {"points": "101", "nick" : "Славик18"},
    {"points": "101", "nick" : "Славик19"},
    {"points": "101", "nick" : "Славик20"},
];
    
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

