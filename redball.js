const redball = function(xp, yp){
    this.xp = xp
    this.yp = yp
}

redball.prototype.draw = function(){
    fill('#d73240')
    circle(this.xp, this.yp, 20)
}

export default redball;