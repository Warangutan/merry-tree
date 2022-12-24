import db from './db.js'

window.addEventListener('DOMContentLoaded', init)

function init () {
    let joinBtn = document.getElementById('join')
    joinBtn.addEventListener('click', joinTree)
    let createBtn = document.getElementById('create')
    createBtn.addEventListener('click', createTree)
}

async function joinTree() {
    const code = prompt('Please enter tree code')
    const currTree = await db.getData(code)
    if(!currTree) {
        alert('We can\'t seem to find this tree code.')
        return
    }
    localStorage.setItem('tree', code);
    window.location.replace('./main.html')
}

async function createTree() {
    localStorage.setItem('tree', generateCode());
    window.location.replace('./main.html')
}

function generateCode(){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}