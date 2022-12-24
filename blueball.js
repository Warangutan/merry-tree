const blueball = function(xp, yp){
    this.xp = xp
    this.yp = yp
}

blueball.prototype.draw = function(){
    fill('#0080ff')
    circle(this.xp, this.yp, 20)
}

export default blueball;