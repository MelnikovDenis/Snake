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

// получаем случайные целые числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// игровой цикл
function loop() {
    requestAnimationFrame(loop);


    count = 0;
    context.clearRect(0,0,canvas.width,canvas.height);

    // двигаем змею по ее скорости
    snake.x += snake.dx;
    snake.y += snake.dy;

    // обернуть позицию змейки горизонтально на краю экрана
    if (snake.x < 0) {
        snake.x = canvas.width - grid;
    }
    else if (snake.x >= canvas.width) {
        snake.x = 0;
    }

    // обернуть положение змейки вертикально по краю экрана
    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    }
    else if (snake.y >= canvas.height) {
        snake.y = 0;
    }

    // отслеживать, где была змея. перед массивом всегда голова
    snake.cells.unshift({x: snake.x, y: snake.y});

    // удаляем ячейки по мере удаления от них
    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }

    // рисуем яблоко
    context.fillStyle = 'red';
    context.fillRect(apple.x, apple.y, grid-1, grid-1);

    // рисуем змейку по одной ячейке за раз
    context.fillStyle = '#014d31';
    snake.cells.forEach(function(cell, index) {

        // рисование на 1 пиксель меньше, чем сетка, создает эффект сетки в теле змеи, чтобы вы могли видеть, насколько она длинна
        context.fillRect(cell.x, cell.y, grid-1, grid-1);

    });
}

// прослушивание событий клавиатуры для перемещения змеи
document.addEventListener('keydown', function(e) {
    // предотвратите возврат змеи к самой себе, проверив, что она
    // еще не перемещается по той же оси (нажатие влево при перемещении
    // влево ничего не будет делать, а нажатие вправо при движении влево
    // не должно допускать столкновения с собственным телом)

    // клавиша со стрелкой влево
    if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    }
    // клавиша со стрелкой вверх
    else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
    // клавиша со стрелкой вправо
    else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    }
    // клавиша со стрелкой вниз
    else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }
});

// начать игру
requestAnimationFrame(loop);