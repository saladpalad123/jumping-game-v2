import { getCustomProperty, incrementCustomProperty, setCustomProperty  } from "./updateCustomProperty.js"
const groundElement = document.querySelectorAll('[data-ground]')
const beforeGroundElement = document.querySelector('[data-before-ground]')

const SPEED = 0.05

export function setupGround(){
    beforeGroundElement.classList.add('hide')
    setCustomProperty(groundElement[0], '--left', 0)
    setCustomProperty(groundElement[1], '--left', 300)

}

export function updateGround(delta, speedScale){
    //the longer the game goes the faster the ground will speed up
    groundElement.forEach(ground => {
        incrementCustomProperty(ground, '--left', delta * speedScale * SPEED * -1)

       if(getCustomProperty(ground, '--left') <= -300){
            incrementCustomProperty(ground, '--left', 600)
        }
    })
}