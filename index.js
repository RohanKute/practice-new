
let body = document.getElementsByTagName('body')

console.log(body);
let btn = document.querySelector("#btn");
console.log(btn);


const addHi = function(){
      let p = document.createElement('p')
      console.log(p);
      body[0].appendChild(p);
      p.innerText = "Hi there!";
}
btn.addEventListener('click' , addHi)