
let body = document.getElementsByTagName('body')

console.log(body);
let btn = document.querySelector("#btn");

let head = document.querySelector("h1");
console.log(btn);


const addHi = function(){
      let p = document.createElement('p')
      console.log(p);
      body[0].appendChild(p);
      p.innerHTML = "This is a New messge"
}
btn.addEventListener('click' , addHi);

console.log("Hiii new changes")