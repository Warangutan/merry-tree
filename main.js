import db from './db.js'

import tree from './tree.js'
import redball from './redball.js'
import yellowball from './yellowball.js'
import blueball from './blueball.js'
import star from './star.js'

let treeCode = localStorage.getItem('tree')
document.getElementById('tree-code').innerText = 'TREE CODE: ' + treeCode;
let currTree = []
let currUtil = ""

let mainTree = {}
let redballs = []
let yellowballs= []
let blueballs= []
let stars = []

const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;



preload();

window.addEventListener('DOMContentLoaded', init)

function init () {
    let homeBtn = document.getElementById('home')
    homeBtn.addEventListener('click', () => {
        localStorage.removeItem('tree');
	    window.location.replace('./index.html')
    })
    // redballBtn
	let redballBtn = document.getElementById('redball')
	redballBtn.addEventListener('click', () => { currUtil = 'redball' })

    // yellowballBtn
    let yellowballBtn = document.getElementById('yellowball')
	yellowballBtn.addEventListener('click', () => { currUtil = 'yellowball' })

    // blueballBtn
    let blueballBtn = document.getElementById('blueball')
	blueballBtn.addEventListener('click', () => { currUtil = 'blueball' })

    // starBtn
    let starBtn = document.getElementById('star')
	starBtn.addEventListener('click', () => { currUtil = 'star' })


    let removeBtn = document.getElementById('remove')
	removeBtn.addEventListener('click', () => { currUtil = 'remove' })
    let saveBtn = document.getElementById('save')
	saveBtn.addEventListener('click', saveTree)
}

function setup() {
	let canvas = createCanvas(1800, 724)
    canvas.parent('canvasForHTML')
    canvas.mouseClicked(clicked)
	background('#87CEEB')
    mainTree = new tree(1800 / 2, 100)
    b1 = color(0,191,255);
    b2 = color(230,230,250);
}

function clicked() {
    if(!currUtil) return

    // redball
    if(currUtil == 'redball'){
        redballs.push(new redball(mouseX, mouseY))
    }

    // yellowball
    if(currUtil == 'yellowball'){
        yellowballs.push(new yellowball(mouseX, mouseY))
    }

    // blueball
    if(currUtil == 'blueball'){
        blueballs.push(new blueball(mouseX, mouseY))
    }

    // star
    if(currUtil == 'star'){
        stars.push(new star(mouseX, mouseY))
    }

    if(currUtil == 'remove'){
        removeObj(mouseX, mouseY);
    }
}

function removeObj(mouseX, mouseY){
    // redballs
    for(let i = 0; i < redballs.length; i++){
        if(redballs[i]['xp'] >= mouseX - 10 && redballs[i]['xp'] <= mouseX + 10 && 
            redballs[i]['yp'] >= mouseY - 10 && redballs[i]['yp'] <= mouseY + 10){
                redballs.splice(i, 1)
            }
    }

    // yellowballs
    for(let i = 0; i < yellowballs.length; i++){
        if(yellowballs[i]['xp'] >= mouseX - 10 && yellowballs[i]['xp'] <= mouseX + 10 && 
            yellowballs[i]['yp'] >= mouseY - 10 && yellowballs[i]['yp'] <= mouseY + 10){
                yellowballs.splice(i, 1)
            }
    }

    // blueballs
    for(let i = 0; i < blueballs.length; i++){
        if(blueballs[i]['xp'] >= mouseX - 10 && blueballs[i]['xp'] <= mouseX + 10 && 
            blueballs[i]['yp'] >= mouseY - 10 && blueballs[i]['yp'] <= mouseY + 10){
                blueballs.splice(i, 1)
            }
    }
    // stars
    for(let i = 0; i < stars.length; i ++){
        if(stars[i]['xp'] >= mouseX - 40 && stars[i]['xp'] <= mouseX + 40 &&
        stars[i]['yp'] >= mouseY - 40 && stars[i]['yp'] <= mouseY + 40){
            stars.splice(i, 1)
        }
    }
}

function saveTree() {
    // redballs
    if(redballs.length > 0)
        db.setData(treeCode + '/redballs', redballs)

    // yellowballs
    if(yellowballs.length > 0)
        db.setData(treeCode + '/yellowballs', yellowballs)
    
    // blueballs
    if(blueballs.length > 0)
         db.setData(treeCode + '/blueballs', blueballs)

    // stars
    if(stars.length > 0)
         db.setData(treeCode + '/star', stars)

}


function draw() {
    setGradient(0, 0, 1800, 724, b1, b2, Y_AXIS);
	mainTree.draw()

    // redballs
    for(let i = 0; i < redballs.length; i++){
        redballs[i].draw()
    }

    // yellowballs
    for(let i = 0; i < yellowballs.length; i++){
        yellowballs[i].draw()
    }

    // blueballs
    for(let i = 0; i < blueballs.length; i++){
        blueballs[i].draw()
    }

    // stars
    for(let i = 0; i < stars.length; i++){
        stars[i].draw()
    }
}


async function preload(){
    if(treeCode){
        currTree = await db.getData(treeCode)
        if(!currTree) currTree = {}
    }

    // redballs
    if(currTree.redballs){
        for(let i = 0; i < currTree.redballs.length; i++){
            redballs.push(new redball(currTree.redballs[i]['xp'], currTree.redballs[i]['yp']))
        }
    }

    // yellowballs
    if(currTree.yellowballs){
        for(let i = 0; i < currTree.yellowballs.length; i++){
            yellowballs.push(new yellowball(currTree.yellowballs[i]['xp'], currTree.yellowballs[i]['yp']))
        }
    }


    // blueballs
    if(currTree.blueballs){
        for(let i = 0; i < currTree.blueballs.length; i++){
            blueballs.push(new blueball(currTree.blueballs[i]['xp'], currTree.blueballs[i]['yp']))
        }
    }

    // stars
    if(currTree.stars){
        for(let i = 0; i < currTree.stars.length; i++){
            stars.push(new star(currTree.stars[i]['xp'], currTree.stars[i]['yp']))
        }
    }
}

//gradient background
function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
  
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }
  

window.setup = setup
window.draw = draw