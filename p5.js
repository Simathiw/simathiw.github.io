class ball {
    constructor(x, y, vx, vy){
        this.x = x
        this.y = y
        this.d = Math.random()*50
        this.vx = vx // Velocity x-axis
        this.vy = vy // Velocity y-axis
    
    }
  update(){ // Oppdaterer posisjon basert på hastighet
    this.x += this.vx
    this.y += this.vy
  }
  
  edges(){
    if(this.x < 0 + this.d/2){
      this.vx *= -1
    }
    if(this.x > 400 - this.d/2){
      this.vx *= -1
    }
    if(this.y < 0 + this.d/2){
      this.vy *= -1
    }
    if(this.y > 400 - this.d/2){
      this.vy *= -1
    }
  }
  
  show(){
    circle(this.x, this.y, this.d)
  }
}

// let b1 = new ball(100, 300, 2, -5)
// let b2 = new ball(200, 230, -4, 10)
const N = 50
let balls = []

for(let i=0; i<N; i++){
  let x = Math.random()*300 + 50
  let y = Math.random()*300 + 50
  let vx = Math.random()*20 - 10 // 10-5
  let vy = Math.random()*20 - 10 // 10-5
  
  let b = new ball(x, y, vx, vy)
  balls.push(b)
}
  



function setup() { // Dette skjer en gang
  createCanvas(400, 400);
  background(220);
}

function draw() { // Denne skjer hele tiden (Uendelig loop)
  // background(220)
  for (let i=0; i<N; i++){
    balls[i].edges()
    balls[i].update()
    balls[i].show()
  }
}