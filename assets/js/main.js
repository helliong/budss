/* SCROLL */

SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 1200,
    // Размер шага в пикселях
    stepSize: 70,

    // Дополнительные настройки:

    // Ускорение
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 70,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
});



/* FADE-IN ABOUT */

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.about');

for (let elm of elements) {
    observer.observe(elm);
}

/* FADE-IN PERCENTS */

function onEntryPercents(entry1) {
    entry1.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options1 = {
    threshold: [0.5] };
let observer1 = new IntersectionObserver(onEntryPercents, options1);
let elements1 = document.querySelectorAll('.percentages');

for (let elm of elements1) {
    observer1.observe(elm);
}

/* FADE-IN WHY BUDSS */

function onEntryWhyBudss(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options2 = {
    threshold: [0.5] };
let observer2 = new IntersectionObserver(onEntryWhyBudss, options2);
let elements2 = document.querySelectorAll('.whyBudssContainer');

for (let elm of elements2) {
    observer2.observe(elm);
}

/* FADE-IN BRANDS */

function onEntryBrands(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options3 = {
    threshold: [0.5] };
let observer3 = new IntersectionObserver(onEntryBrands, options3);
let elements3 = document.querySelectorAll('.brands');

for (let elm of elements3) {
    observer3.observe(elm);
}


/* POP-UP and COOKIES */

document.getElementById("headerButton").addEventListener("click",function (){
document.getElementById("popUp").classList.add("open")
})

document.getElementById("heroButton").addEventListener("click",function (){
    document.getElementById("popUp").classList.add("open")
})

document.getElementById("brandsButton").addEventListener("click",function (){
    document.getElementById("popUp").classList.add("open")
})

document.getElementById("footerButton").addEventListener("click",function (){
    document.getElementById("popUp").classList.add("open")
})

document.getElementById("closePopUp").addEventListener("click",function (){
    document.getElementById("popUp").classList.remove("open")
})

document.getElementById("closePopUp").addEventListener("click",function (){
    document.getElementById("popUp").classList.remove("open")
})

document.getElementById("closeCookie").addEventListener("click",function (){
    document.getElementById("cookie").classList.add("close")
})

document.getElementById("cookie").addEventListener("click", function () {
    document.getElementById("cookie").classList.add("close")
})