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

// Control keyboard
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
    // 충돌할 경우 gameover
}

// Init board
function init() {
    board()

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
    let
}

// Set snake
function snake() {

}

// Set food
function food() {

}

// Game over
function gameover() {
    alert("Game Over")
    init()
}
