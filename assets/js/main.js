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

document.getElementById("closeCookie").addEventListener("click",function (){
    document.getElementById("cookie").classList.add("close")
})

document.getElementById("buttonAccept").addEventListener("click",function (){
    document.getElementById("cookie").classList.add("close")
})

document.getElementById("buttonDecline").addEventListener("click",function (){
    document.getElementById("cookie").classList.add("close")
})

document.getElementById("headerButton").addEventListener("click", function () {
    document.getElementById("popUp").classList.add("open");
});

document.getElementById("heroButton").addEventListener("click", function () {
    document.getElementById("popUp").classList.add("open");
});

document.getElementById("brandsButton").addEventListener("click", function () {
    document.getElementById("popUp").classList.add("open");
});

document.getElementById("footerButton").addEventListener("click", function () {
    document.getElementById("popUp").classList.add("open");
});

document.getElementById("closePopUp").addEventListener("click", function () {
    document.getElementById("popUp").classList.remove("open");
});

document.getElementById("addForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    let isValid = true;

    // Проверка поля Name
    const nameInput = document.querySelector("input[name='name']");
    const nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Проверка поля Email
    const emailInput = document.querySelector("input[name='email']");
    const emailError = document.getElementById("emailError");
    if (emailInput.value.trim() === '') {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Проверка поля Phone
    const phoneInput = document.querySelector("input[name='Telephone']");
    const phoneError = document.getElementById("phoneError");
    if (phoneInput.value.trim() === '') {
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }

    const formError = document.getElementById("formError");
    if (!isValid) {
        formError.style.display = 'block';
    } else {
        formError.style.display = 'none';
        document.getElementById("popUp").classList.remove("open");
        document.getElementById("thanksPopUp").classList.add("open");
    }

    document.getElementById("closeThanksPopUp").addEventListener("click", function () {
        document.getElementById("thanksPopUp").classList.remove("open");
    });

    document.getElementById("superButton").addEventListener("click", function () {
        document.getElementById("thanksPopUp").classList.remove("open");
    });
});
