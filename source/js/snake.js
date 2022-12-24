var canvas = document.getElementById('snakeGame');
var context = canvas.getContext('2d');

// ширина и высота холста, змея x и y и яблоко x и y, все они должны быть кратны размеру сетки, чтобы обнаружение столкновений работало
// (например, 16 * 25 = 400)
var grid = 16;
var count = 0;

var snake = {
    x: 160,
    y: 160,

    // скорость змеи. перемещает одну длину сетки каждый кадр в направлении x или y
    dx: grid,
    dy: 0,

    // отслеживать все сетки, которые занимает тело змеи
    cells: [],

    // длина змейки. растет при употреблении яблока
    maxCells: 4
};

var apple = {
    x: 320,
    y: 320
};


// игровой цикл
function loop() {
    requestAnimationFrame(loop);

    
}


// начать игру
requestAnimationFrame(loop);