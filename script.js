let btn = document.querySelector("#h2");
btn.onclick =() =>{
 console.log("Aamre Kik Dise");
    let a = 25;
a++;
console.log(a);
};

// use EventListener........
let btns = document.querySelectorAll("button");
btns.forEach((clickBtn) => {
clickBtn.addEventListener("click" , () => {
console.log("Amare Click Dise ");

});
});

