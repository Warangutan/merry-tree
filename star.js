const star = function(xp, yp){
    this.xp = xp
    this.yp = yp
}

star.prototype.draw = function(){
    fill('#FFEF00')
    noStroke()
    triangle(this.xp - 10, this.yp + 30, this.xp, this.yp, this.xp + 10, this.yp + 30)
    triangle(this.xp - 10, this.yp + 50, this.xp, this.yp + 80, this.xp + 10, this.yp + 50)
    triangle(this.xp - 40, this.yp + 40, this.xp - 10, this.yp + 30, this.xp - 10, this.yp + 50)
    triangle(this.xp + 10, this.yp + 50, this.xp + 10, this.yp + 30, this.xp + 40, this.yp + 40)
    rect(this.xp - 10, this.yp + 30, 20, 20)
}

export default star;