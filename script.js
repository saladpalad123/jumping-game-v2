import { updateGround, setupGround } from './ground.js'

let lastTime
let speedScale
let score

const SPEED_INCREASE = 0.00001

const scoreElement = document.querySelector('[data-score]')
const startScreenElement = document.querySelector('[data-start-screen')

//fix this
document.addEventListener('keydown', handleStart, { once: true})

// tracks change in time as game is played
function update(time){
    
    if(lastTime == null){
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    let delta = time - lastTime
    
    updateGround(delta, speedScale)
    updatespeedScale(delta)
    updateScore(delta)

    lastTime = time    
    window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)

function updateScore(delta){
    score += delta *.02
    scoreElement.textContent = Math.floor(score)
}

function updatespeedScale(delta){
    speedScale += delta * SPEED_INCREASE
}

function handleStart(e){
    if(e.keyCode == 32){
        lastTime = null
        setupGround()
        startScreenElement.classList.add('hide')
        scoreElement.classList.add('show')
        score = 0
        speedScale = 1
        window.requestAnimationFrame(update)
    }
}
