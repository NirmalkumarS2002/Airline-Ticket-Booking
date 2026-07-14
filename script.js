//menubar

const menubtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector(".navlinks")

menubtn.addEventListener("click", () => {
    navlinks.classList.toggle("showmenu")

    if (menubtn.textContent == "menu") {
        menubtn.textContent = "close"
    }

    else {
        menubtn.textContent = "menu"
    }

})

//errorpage

document.querySelectorAll(".errorpage").forEach((error) => {
    error.addEventListener("click", () => {
        window.location.href = "404.html"
    })
})

//footeer

const subscribeBtn = document.querySelector(".subscribe-btn");
const footerEmail = document.querySelector("#footer-email");

subscribeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = footerEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Please enter your email address");
        footerEmail.focus();
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        footerEmail.focus();
        return;
    }

    alert("Subscribed Successfully!");

    footerEmail.value = "";
});

//
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("headvis");
    }
    else {
        header.classList.remove("headvis");
    }

});