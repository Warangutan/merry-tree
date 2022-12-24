const tree = function(xp, yp){
    this.xp = xp
    this.yp = yp
}

tree.prototype.draw = function(){
    fill('#22906c')
    noStroke()
    triangle(this.xp - 200, this.yp + 200, this.xp, this.yp, this.xp + 200, this.yp + 200)
    triangle(this.xp - 200, this.yp + 300, this.xp, this.yp + 100, this.xp + 200, this.yp + 300)
    triangle(this.xp - 200, this.yp + 400, this.xp, this.yp + 200, this.xp + 200, this.yp + 400)
}

export default tree;