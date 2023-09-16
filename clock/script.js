const clock=document.querySelector(".clock")
const minute=document.querySelector("#minute")
const second=document.querySelector("#second")
const hour=document.querySelector("#hour")
for (let index = 1; index <= 12; index++) {
  
  let num=document.createElement("span")
  clock.appendChild(num)
  num.innerHTML=index
  num.style.transform=`rotate(${(index*30)+90}deg)` 
}
setInterval(()=>{
  const date=new Date()
  const min=date.getMinutes()
  const sec=date.getSeconds()
  const hor=date.getHours()
  minute.style.transform=`translate(-50% ,0%) rotate(${(180+(min*6)+(sec/10))}deg)`
  second.style.transform=`translate(-50% ,0%) rotate(${(180+(sec*6))}deg)`
  hour.style.transform=`translate(-50% ,0%) rotate(${(180+((hor*30)+(min/2)))}deg)`
},1000)
