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

let isRunning = true; // Запущена ли игра 
// игровой цикл
function loop() {
    // Запущена ли игра
    if(!isRunning)
        return
    
    requestAnimationFrame(loop);

    // замедлить игровой цикл до 15 кадров в секунду вместо 60 (60/15 = 4)
    if (++count < 4) {
        return;
    }

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

        // змея съела яблоко
        if (cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;
            
            // отобразить счет на экране
            document.getElementById("Score").innerHTML = snake.maxCells;

            // холст размером 400x400, что соответствует сетке 25x25
            apple.x = getRandomInt(0, 25) * grid;
            apple.y = getRandomInt(0, 25) * grid;
        }

        // проверяем столкновение со всеми ячейками после этой (модифицированная пузырьковая сортировка)
        for (var i = index + 1; i < snake.cells.length; i++) {
            // змея занимает то же место, что и часть тела. сбросить игру
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                document.getElementById("EndScore").innerHTML = "Счет " + snake.maxCells;
                restart();
                isRunning = false; // остановка игры

                // При поигрыше открыть окно с вводом ника
                let box = document.getElementById('box');
                box.classList.remove('hidden');
                setTimeout(function () {
                    box.classList.remove('visuallyhidden');
                }, 20);
            }
        }
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

const restart = () => {    
    snake.x = 160;
    snake.y = 160;
    snake.cells = [];
    snake.maxCells = 4;
    snake.dx = grid;
    snake.dy = 0;

    apple.x = getRandomInt(0, 25) * grid;
    apple.y = getRandomInt(0, 25) * grid;
}

// начать игру
requestAnimationFrame(loop);



buttonRestart = document.querySelector('#Restart');
buttonRestart.addEventListener('click', function () {
    restart();  
}, false);



// // При нажатии на кнопку назад всплывающее окно закрывается и игра возобновляется
let box = document.getElementById('box'),
buttonBack = document.querySelector('#Back');
buttonBack.addEventListener('click', function () {
    box.classList.add('visuallyhidden');    
    box.addEventListener('transitionend', function(e) {
        box.classList.add('hidden');
        isRunning = true;
    }, {
        capture: false,
        once: true,
        passive: false
    });	
    isRunning = true;
    document.getElementById("Score").innerHTML = 4;
    requestAnimationFrame(loop);	  
}, false);