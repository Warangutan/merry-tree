const tree = function(xp, yp){
    this.xp = xp
    this.yp = yp
}

tree.prototype.draw = function(){
     //moon and stars
      //moon and stars
    fill('#F0E2B6')
    circle(1500, 100, 140)
    fill('')
    circle(50, 344, 4)
    circle(90, 80, 5)
    circle(123, 231, 7)
    circle(274, 50, 5)
    circle(320, 150, 4)
    circle(376, 290, 6)
    circle(420, 400, 7)
    circle(449, 344, 4)
    circle(490, 80, 5)
    circle(520, 389, 6)
    circle(573, 235, 7)
    circle(649, 79, 5)
    circle(675, 167, 8)
    circle(730, 271, 4)
    circle(823, 124, 7)
    circle(974, 150, 5)
    circle(1020, 50, 4)
    circle(1076, 390, 6)
    circle(1120, 300, 7)
    circle(1149, 244, 4)
    circle(1190, 134, 5)
    circle(1220, 389, 6)
    circle(1273, 235, 7)
    circle(1349, 79, 5)
    circle(1375, 167, 8)
    circle(1430, 271, 4)
    circle(1576, 154, 6)
    circle(1620, 220, 7)
    circle(1749, 80, 4)
    circle(1780, 300, 8)

    //mountains
     noStroke()
     fill('#008AD8')
     triangle(1555, 390, 1555, 724, 1967, 458)
     rect(1000, 500, 500, 300)
     triangle(1000, 500, 1300, 350, 2000, 500)
     triangle(300, 724, 705, 375, 1300, 724)
     triangle(50, 724, 350, 350, 700, 724)

     fill('#055099')
     triangle(-123, 724, 68, 345, 231, 724)
     triangle(0, 724, 170, 287, 362, 724)
     triangle(100, 724, 503, 453, 857, 724)
     triangle(500, 724, 1076, 320, 1467, 724)
     triangle(1200, 724, 1555, 222, 1905, 724)
     
    //tree
    fill('#66493A')
    rect(this.xp - 37.5, this.yp + 350, 75, 300)
    fill('#22906c')
    triangle(this.xp - 90, this.yp + 150, this.xp, this.yp, this.xp + 90, this.yp + 150)
    triangle(this.xp - 140, this.yp + 250, this.xp, this.yp + 75, this.xp + 140, this.yp + 250)
    triangle(this.xp - 190, this.yp + 375, this.xp, this.yp + 100, this.xp + 190, this.yp + 375)
    triangle(this.xp - 250, this.yp + 500, this.xp, this.yp + 150, this.xp + 250, this.yp + 500)
}

export default tree;