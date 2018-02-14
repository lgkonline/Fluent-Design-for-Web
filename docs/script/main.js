function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className))
        el.className = el.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
}

var section = document.querySelector(".title-section");
var btns = document.querySelectorAll(".btn");

window.addEventListener("scroll", event => {
    section.style.backgroundPosition = "0px -" + (window.pageYOffset / 2) + "px";
});

function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY
    }
}

btns.forEach(btn => {
    btn.addEventListener("mousemove", event => {
        const btnBall = btn.querySelector(".btn-ball");
        const offset = getOffset(btn);

        const x = event.pageX - offset.left;
        const y = event.pageY - offset.top;

        btnBall.style.left = x + "px";
        btnBall.style.top = y + "px";
    });
});

function showModal(modalId) {
    addClass(document.getElementById(modalId), "in");
}

function hideModal(modalId) {
    removeClass(document.getElementById(modalId), "in");
}