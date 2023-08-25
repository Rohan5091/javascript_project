var timer=60;
var score=0;
 var hitrm;
function disbubble() {
  var bubble_num="";
  for (let index = 0; index < 160; index++) {
    var rn =Math.floor(Math.random()*10);
    bubble_num+= `<div class="bubble" >${rn}</div>`;
  }
  document.querySelector(".page2").innerHTML=bubble_num;
}
function runTimer() {
  var timerset=setInterval(() => {
  if (timer>0) {
      timer-=1;
      document.querySelector("#timer_box").textContent=timer;
      clicked();
    } else { 
      clearInterval(timerset) ;
      document.querySelector(".page2").innerHTML=`<h1>Game Over</h1>
                                     <h1>Your Score is ${score}</h1>`;

    } 
  }, 1000);
}
function increase_score() {
   score+=10;
   document.querySelector("#score_box").textContent=score;
}
function get_hit() { 
     hitrm=Math.floor(Math.random()*10);
     document.querySelector("#hit_box").textContent=hitrm;
}
function clicked() {
  document.querySelector(".page2").addEventListener("click",function(detail){
        clicked_num= (Number(detail.target.textContent));
      if (clicked_num==hitrm) {
        increase_score();
        get_hit();
        disbubble();
      }
  })
}
disbubble();
runTimer();
get_hit();

