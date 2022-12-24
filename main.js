import db from './db.js'

import tree from './tree.js'
import redball from './redball.js'


let treeCode = localStorage.getItem('tree')
document.getElementById('tree-code').innerText = 'TREE CODE: ' + treeCode;
let currTree = []
let currUtil = ""

let mainTree = {}
let redballs = []
// yellowballs
// blueballs
// stars




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


    // blueballBtn


    // starBtn


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
}

function clicked() {
    if(!currUtil) return

    // redball
    if(currUtil == 'redball'){
        redballs.push(new redball(mouseX, mouseY))
    }

    // yellowball


    // blueball


    // star

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


    // blueballs


    // stars
}

function saveTree() {
    // redballs
    if(redballs.length > 0)
        db.setData(treeCode + '/redballs', redballs)

    // yellowballs
    
    
    // blueballs


    // stars


}


function draw() {
    background('#87CEEB')
	mainTree.draw()

    // redballs
    for(let i = 0; i < redballs.length; i++){
        redballs[i].draw()
    }

    // yellowballs


    // blueballs


    // stars
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


    // blueballs


    // stars
}

window.setup = setup
window.draw = draw