// You could have multiple flags like: start, launch to indicate the state of the game.
var cannon,shootb,tanker,ground
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    cannon(tanker.x,tanker.y,40,40)
    shootb.bodies = Bodies.rectangle(Rnd(200,0),Rnd(200,0),10,20
}


function draw() {

matter.engeine.update
if (keyDown("SPACE")){
    cannon.x= cannon.x+5
}
if (cannon.x = shootb.x){
    Text(" u lost",200,200)
}
if (cannon.y = shootb.y){
    Text(" u lost",200,200)
}
}


function keyReleased() {
   if (keyDown("SPACE")){
       cannon.x= cannon.x+5
   }
}
