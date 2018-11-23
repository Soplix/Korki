let firstNumber = document.querySelector("#first-number");
let secondNumber = document.querySelector(".second-number");
let wynik = document.querySelector("#wynik");

let btndodaj = document.querySelector("#dodaj");
let btnpodziel = document.querySelector("#podziel");
let btnpomnoz = document.querySelector("#pomnoz");
let btnodejmij = document.querySelector("#odejmij");
let btnpotega = document.querySelector("#potega");
let btnsqrt = document.querySelector("#sqrt");
let btncbrt = document.querySelector("#cbrt");

btndodaj.addEventListener("click", sum);
btnpodziel.addEventListener("click", div);
btnpomnoz.addEventListener("click", mul);
btnodejmij.addEventListener("click", sub);
btnpotega.addEventListener("click", potega);
btnsqrt.addEventListener("click", sqrt);
btncbrt.addEventListener("click", cbrt);

// var Wynik = HTMLBodyElement.Wynik;
let Score = 0;

function cbrt(){
    if(!firstNumber.value || !secondNumber.value){
        wynik.value = "A or B isn't entered";
        return;
    }
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);
    if(isNaN(a) || isNaN(b)){
        wynik.value = "A or B is not a number";
    } else {
    let wyncbrt = Math.cbrt(a);
    wynik.value = wyncbrt;
    }
}

function sqrt(){
    if(!firstNumber.value || !secondNumber.value){
        wynik.value = "A or B isn't entered";
        return;
    }
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);
    if(isNaN(a) || isNaN(b)){
        wynik.value = "A or B is not a number";
    } else {
    let wynsqrt = Math.sqrt(a);
    wynik.value = wynsqrt;
    }
}

function potega(){
    if(!firstNumber.value || !secondNumber.value){
        wynik.value = "A or B isn't entered";
        return;
    }
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);
    if(isNaN(a) || isNaN(b)){
        wynik.value = "A or B isn't number";
    } else {
    let wynpotega = Math.pow(a,b);
    wynik.value = wynpotega;
    }
}

function sum (){
    if(!firstNumber.value || !secondNumber.value){
        wynik.value = "A or B isn't entered";
        return;
    }
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);
    if(isNaN(a) || isNaN(b)){
        wynik.value = "A or B is not a number";
    } else {
    let suma = a + b;
    wynik.value = suma;
    }
}

function mul (){
    if(!firstNumber.value || !secondNumber.value){
        wynik.value = "A or B isn't entered";
        return;
    }
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);
    if(isNaN(a) || isNaN(b)){
        wynik.value = "A or B isn't a number";
    } else {
    let suma = a * b;
    wynik.value = suma;
    }
}

function sub (){
    if(!firstNumber.value || !secondNumber.value){
        wynik.value = "A or B isn't entered";
        return;
    }
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);
    let wynodejm = a - b;
    if(isNaN(a) || isNaN(b)){
        wynik.value = "A or B isn't a number";
    } else{
        wynik.value = wynodejm;    
    }
}

function div(){
    if(!firstNumber.value || !secondNumber.value){
        wynik.value = "A or B isn't entered";
        return;
    }
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);
    if(isNaN(a) || isNaN(b)){
        wynik.value = "A or B is not a number";
    } else if(b === 0){
        wynik.value = "You can't divide by 0!!!";
    } else{
        let wynikdz = a / b;
        wynik.value = wynikdz;   
    }
}