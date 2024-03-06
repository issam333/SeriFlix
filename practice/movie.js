// toUP
let toUP = document.querySelector('.toUP');

window.onscroll = function () {
    if (scrollY >= 685) {
        toUP.style.display = "block";
    } else {
        toUP.style.display = "none";
    }
}
toUP.onclick = function () {
    if (scrollY >= 685) {
        window.scroll({
            top:0,
            behavior: "smooth"
        })
    }
}
// menu scroll
window.onload= function(){
    window.scroll({
        top:0,
        behavior:"smooth",
    })
    
}

function scl1(){
    test()
    window.scroll({
            top: 0,
            behavior: "smooth"
        })
}
// movies

let titreMovies = document.querySelector('#titreMovies')
let rectMovies = titreMovies.offsetTop
function scl2(){
    test()
    window.scroll({
            top: rectMovies - 60,
            behavior: "smooth"
        })
}
// category
let titreCategory = document.querySelector('.titreCategory')
let rectCategory = titreCategory.offsetTop
console.log(titreCategory.offsetTop)

function scl3(){
    test()
    window.scroll({
            top: rectCategory - 60,
            behavior: "smooth"
        })
}
// live
let titreLive = document.querySelector('.titreLive')
let rectLive = titreLive.offsetTop


function scl4(){
    test()
    window.scroll({
            top: rectLive - 60,
            behavior: "smooth"
        })
}
// bars
let barsIcon = document.querySelector('#barsIcon')
let sections = document.querySelector('#sections')

let test = barsIcon.onclick = function test() {
    sections.classList.toggle('hideMenu')
    
}
// searsh

let search = document.getElementById('search');
let inp = document.querySelector('.inp');
let searchDiv = document.getElementById('searchdiv');


search.onclick = function () {
    if (inp.value == '') {
        inp.classList.toggle('active');
        inp.classList.toggle('inp');
    }
}


//filter bar


// part genres

let btnGenres = document.getElementById('btnGenres')
let typeGenres1 = document.getElementById('typeGenres1')

let idicon1 = document.getElementById('idicon1')

btnGenres.onclick = function () {
    typeGenres1.classList.toggle('typeGenres2');
    typeYears1.className = '';

}
let p1 = document.querySelectorAll('.p');
for (let i = 0; i < p1.length; i++) {

    p1[i].onclick = function () {
        let innerP = p1[i].innerHTML;
        btnGenres.innerHTML = innerP;
        btnGenres.style.cssText = `
    color:#fff;
    background : rgb(53, 82, 115);
    padding: 4px 6px;
    border-radius:10px;
    position: relative;
    top:-4px;
    `
        typeGenres1.className = '';

    }
}



// part years
let btnYears = document.getElementById('btnYears')
let typeYears1 = document.getElementById('typeYears1')

let icon2 = document.querySelector('#idicon2')

btnYears.onclick = function () {
    typeYears1.classList.toggle('typeYears2')
    typeGenres1.className = '';

}
let p = document.querySelectorAll('.p2');
for (let i = 0; i < p.length; i++) {

    p[i].onclick = function () {
        btnYears.innerHTML = p[i].innerHTML;
        btnYears.style.cssText = `
    color:#fff;
    background : rgb(53, 82, 115);
    padding: 4px 6px;
    border-radius:10px;
    position: relative;
    top:-4px;
    `
        typeYears1.className = '';

    }
}


// part category

let category = document.querySelector('.category')





