const button=document.querySelector("button")
const colour=document.querySelector(".Colour-code")

const arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
let ran_num=()=>{
    return Math.floor(Math.random()*arr.length)
}
const ran_gen_fun=()=>{
   let code="#"
   for (let index = 0; index < 6; index++) {
     code+=arr[ran_num()];
   }
   return code;
}

 function fun() {
  button.addEventListener("click",()=>{
     colour.innerHTML=ran_gen_fun();
     document.body.style.backgroundColor=ran_gen_fun();
  })
  setInterval(()=>{
    button.removeEventListener("click",()=>{
      colour.innerHTML=ran_gen_fun();
      document.body.style.backgroundColor=ran_gen_fun();
   })
  },100)

}
fun();
