const yellowball = function(xp, yp){
    this.xp = xp
    this.yp = yp
}

redball.prototype.draw = function(){
    fill('#FFFF00')
    circle(this.xp, this.yp, 20)
}

export default yellowball;