const tree = function(xp, yp){
    this.xp = xp
    this.yp = yp
}

tree.prototype.draw = function(){
     //mountains
     noStroke()
     fill('#808080')
     triangle(-123, 724, 68, 345, 231, 724)
     triangle(0, 724, 170, 287, 362, 724)
     
    fill('#66493A')
    rect(this.xp - 37.5, this.yp + 350, 75, 300)
    fill('#22906c')
    
    triangle(this.xp - 90, this.yp + 150, this.xp, this.yp, this.xp + 90, this.yp + 150)
    triangle(this.xp - 140, this.yp + 250, this.xp, this.yp + 75, this.xp + 140, this.yp + 250)
    triangle(this.xp - 190, this.yp + 375, this.xp, this.yp + 100, this.xp + 190, this.yp + 375)
    triangle(this.xp - 250, this.yp + 500, this.xp, this.yp + 150, this.xp + 250, this.yp + 500)
    
}

export default tree;