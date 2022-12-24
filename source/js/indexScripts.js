/*
Тут надо как-то получать json из базы данных
*/
var products = [
    {"place": "1", "points": "101", "nick" : "Славик1"},
    {"place": "2", "points": "101", "nick" : "Славик2"},
    {"place": "3", "points": "101", "nick" : "Славик3"},
    {"place": "4", "points": "101", "nick" : "Славик4"},
    {"place": "5", "points": "101", "nick" : "Славик5"},
    {"place": "6", "points": "101", "nick" : "Славик6"},
    {"place": "7", "points": "101", "nick" : "Славик7"},
    {"place": "8", "points": "101", "nick" : "Славик8"},
    {"place": "9", "points": "101", "nick" : "Славик9"},
    {"place": "10", "points": "101", "nick" : "Славик10"},
    {"place": "11", "points": "101", "nick" : "Славик11"},
    {"place": "12", "points": "101", "nick" : "Славик12"},
    {"place": "13", "points": "101", "nick" : "Славик13"},
    {"place": "14", "points": "101", "nick" : "Славик14"},
    {"place": "15", "points": "101", "nick" : "Славик15"},
    {"place": "16", "points": "101", "nick" : "Славик16"},
    {"place": "17", "points": "101", "nick" : "Славик17"},
    {"place": "18", "points": "101", "nick" : "Славик18"},
    {"place": "19", "points": "101", "nick" : "Славик19"},
    {"place": "20", "points": "101", "nick" : "Славик20"},
];
    
var html = '<table>';
var cnt  = 0;   
    
html += '<tr>';
html += '<th>' + "Место" + '</th>' + '<th>' + "Очки" + '<th>' + "Ник" + '</th>';
html += '</tr>';
for(var i in products) {
    html += '<tr>';
    html += '<td>' + products[i]['place'] + '</td>' + '<td>'+products[i]['points'] + '<td>'+products[i]['nick'] + '</td>';
    html += '</tr>';
} 
if(cnt != 0) {
    html += '<td></td><td></td></tr>';
}
html +='</table>';

document.getElementById("Table").innerHTML = html;

