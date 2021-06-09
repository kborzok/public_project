const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = canvas.height = 600
canvas.style.width = '600px'
canvas.style.height = '600px'
canvas.style.border = '1px solid #000'
const CELL_SIZE = 30
const WORLD_WIDTH = Math.floor(canvas.width / CELL_SIZE)
const WORLD_HEIGHT = Math.floor(canvas.height / CELL_SIZE)
const MOVE_INTERVAL = 300
const input = {

}
const snake ={
    moveElapsed: 0,
    length: 4,
    parts: [{
        x: 0,
        y: 0
    }],
    dir: {
        x: 1,
        y: 0
    }
}
function update(delta){
    if (input.ArrowLeft) {
        snake.dir = { x: -1, y: 0 }
    }
    else if (input.ArrowUp) {
        snake.dir = { x: 0, y: -1 }
    }
    else if (input.ArrowRight) {
        snake.dir = { x: 1, y: 0 }
    }
    else if (input.ArrowDown) {
        snake.dir = { x: 0, y: 1 }
    }

    snake.moveElapsed += delta
    console.log(snake.moveElapsed)
    if (snake.moveElapsed > MOVE_INTERVAL) {
        snake.moveElapsed -= MOVE_INTERVAL
        const newSnakeParts = { 
            x: snake.parts[0].x + snake.dir.x,
            y: snake.parts[0].y + snake.dir.y
        }
        snake.parts.unshift(newSnakeParts)

        if (snake.parts.length > snake.length) {
            snake.parts.pop()
        }
    }
}
function render(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    snake.parts.forEach(({x,y}) => {
    ctx.fillRect(x * CELL_SIZE,y*CELL_SIZE,CELL_SIZE, CELL_SIZE)
})
}
let lastLoopTime = Date.now()
function gameLoop(){
    
    const now = Date.now()
    const delta = now - lastLoopTime
    lastLoopTime = now
    update(delta)
    render()
    window.requestAnimationFrame(gameLoop)
}
gameLoop()
window.addEventListener('keydown', (event) => {
    input[event.key] = true
})
window.addEventListener('keyup', (event) => {
    input[event.key] = false
})