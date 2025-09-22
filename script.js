let btn = document.querySelector("#h2");
btn.onclick =() => {
 console.log("Aamre Kik Dise");
    let a = 25;
a++;
console.log(a);
};

// ============ Even Object =============== 
let btn1 = document.querySelector("#h2");
btn1.onclick =(evt) => {
//  console.log("Aamre Kik Dise");
//     let a = 25;
// a++;
console.log(evt);
console.log(evt.target);

console.log(evt.type);
console.log(evt.clientX, evt.clientY);

};


// ============= use EventListener........ ============
let btns = document.querySelectorAll("button");

btns.forEach((clickBtn) => {
clickBtn.addEventListener("click" , () => {
    // clickBtn.innerText = "Amare Click Dise"
    
    let newH2 = document.createElement("h2");
    newH2.innerText = " Hello";
    clickBtn.parentElement.append(newH2);
console.log(newH2);

});
});


// ============= use EventListener...to  Mouse Over..... ============
let divs = document.querySelectorAll("divs")
divs.forEach((hoverDivs) => {
    hoverDivs.addEventListener("mouseover" , () => {
console.log("Amare Teach korse  😠 ");
console.log(hoverDivs.target);
});
});

