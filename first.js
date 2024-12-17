

let tooglebtn = document.querySelector("#toogle-btn");
let toogle = document.querySelector("#toogle");
let logo = document.querySelector("#logo")

function showToogle(){
    console.log("salam");
        logo.style.display = "none"
        toogle.style.display = "flex"

}

// let btn = document.querySelector("#btn-x");

function closeToogle(){
    toogle.style.display = "none"
}