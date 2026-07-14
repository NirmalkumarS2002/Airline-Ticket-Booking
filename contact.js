const submitBtn = document.querySelector(".form-submit");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

nameInput.addEventListener("input", () => {
    nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, "");
});

phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const subject = subjectInput.value;
    const message = messageInput.value.trim();

    if (name === "") {
        alert("Please enter your name");
        nameInput.focus();
        return;
    }

    if (email === "") {
        alert("Please enter your email address");
        emailInput.focus();
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        emailInput.focus();
        return;
    }

    if (phone === "") {
        alert("Please enter your phone number");
        phoneInput.focus();
        return;
    }

    if (phone.length !== 10) {
        alert("Phone number must contain 10 digits");
        phoneInput.focus();
        return;
    }

    if (subject === "") {
        alert("Please select a subject");
        subjectInput.focus();
        return;
    }

    if (message === "") {
        alert("Please enter your message");
        messageInput.focus();
        return;
    }

    alert("Message sent successfully!");

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
});

//faq

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-q");
    const icon = item.querySelector(".material-symbols-outlined");

    question.addEventListener("click", () => {

        faqItems.forEach((faq) => {
            if (faq !== item) {
                faq.classList.remove("active");
                faq.querySelector(".material-symbols-outlined").textContent = "add";
            }
        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            icon.textContent = "remove";
        } else {
            icon.textContent = "add";
        }
    });
});