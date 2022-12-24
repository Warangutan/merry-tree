const tree = function(xp, yp){
    this.xp = xp
    this.yp = yp
}

tree.prototype.draw = function(){
    fill('#22906c')
    triangle(this.xp - 200, this.yp + 200, this.xp, this.yp, this.xp + 200, this.yp + 200)
}

export default tree;