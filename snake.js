/*  뱀게임
    1. 보드판 그리기
    2. 벽 그리기
    3. 뱀 그리기
    4. 뱀 조작
    5. 충돌 관리
    6. 먹이 랜덤 생성 및 관리



*/


// Variables
let x, y                // snake location
let fx, fy              // food location
let height = 20, width = 34 // board size
let direction           // snake move direction
let speed               // snake move speed
let snakeQueue = new Array()
// Colors
let snakeColor = "#556b2f"
let tileColor = "#dcdcdc"
let wallColor = "#000000"
let foodColor = "#dc143c"


// Set keyboard
document.onkeydown = keyDownEventHandler
function keyDownEventHandler(c) {
    if (c.keyCode == 37 && direction != 2) {         // 37 : left
        direction = 0
    } else if (c.keycode == 38 && direction != 3) {  // 38 : up
        direction = 1
    } else if (c.keycode == 39 && direction != 0) {  // 39 : right
        direction = 2
    } else {                                        // 40 : down
        direction = 3
    }
}

// Set move
function move(direction) {
    switch (direction) {
        case 0:
            x -= 1
            break
        case 1:
            y -= 1
            break
        case 2:
            x += 1
            break
        case 3:
            y += 1
            break
        default:
            return
    }
    if(invalidMove(y, x)) gameover()
    snake(y, x)
}

// Init board
function init() {
    board()
    wall()
    y = parseInt(height/2)
    x = parseInt(width/2)
    snake(y, x)
    direction = -1
    speed=50
    keepMove = setInterval("move(direction)", speed)
}

// Make board
function board() {
    let board = "<table border=0>"
    for (let i = 0; i < height; i++) {
        board += "<tr>"
        for (let j = 0; j < width; j++) {
            board += "<tr id=\"" + String(i) + " " + String(j) + "\"></tb>"
        }
        board += "</tr>"
    }
    board += "</table>"
    document.write(board)
}

// Make wall
function wall() {
    let well = new Array()
    for(let i=0; i<height; i++) wall.push(new Array(i, 0))
    for(let i=0; i<height; i++) wall.push(new Array(i, width-1))
    for(let i=0; i<width; i++) wall.push(new Array(0, i))
    for(let i=0; i<width; i++) wall.push(new Array(height-1, i))

    for(let i=0; i<wall.length; i++) {
        let wy = wall[i][0]
        let wx = wall[i][1]
        document.getElementById(String(wy) + " " + String(wx)).style.background = wallColor
        document.getElementById(String(wy) + " " + String(wx)).style.borderRadius = "1.5px"
    }
}

// Set snake
function snake(y, x) {
    snakeQueue.push(new Array(y, x))
    document.getElementById(String(y) + " " + String(x)).style.background = snakeColor
}

function removeSnake() {
    let ty = snakeQueue[0][0]
    let tx = snakeQueue[0][1]
    snakeQueue.shift()
    document.getElementById(String(ty) + " " + String(tx)).style.background = tileColor
}

// Set food
function food() {
    do {
        let rand = parseInt(Math,random() * ((height - 2) * (width - 2)))
        fy = parseInt(rand/(height - 2)) + 1
        fx = rand % (width - 2) + 1
    } while(isInQueue(fy, fx))
    document.getElementById(String(fy) + " " + String(fx)).style.background = foodColor
    document.getElementById(String(fy) + " " + String(fx)).style.background = "6px"
}

// Set collision
function invalidMove(y, x) {
    return (y==0||y==height-1||x==0||x==width-1) || collision(y, x)
}

function collision() {
    if (isInQueue(y, x)) return true
    return false
}

function isInQueue(y, x) {
    let p = new Array(y, x)
    for(let i=0; i<snakeQueue.length; i++) {
        if(snakeQueue[i][0] == p[0] && snakeQueue[i][1] == p[1])
            return true
    }
    return false
}

// Game over
function gameover() {
    alert("Game Over")
    init()
    location.reload()
}
