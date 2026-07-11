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