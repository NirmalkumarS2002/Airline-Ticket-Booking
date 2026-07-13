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

document.querySelectorAll(".errorpage").forEach((error)=>{
    error.addEventListener("click",()=>{
        window.location.href="404.html"
    })
})