const searchBtn = document.querySelector(".search-btn");

const from = document.querySelector("#from");
const to = document.querySelector("#to");
const departure = document.querySelector("#departure");
const passengers = document.querySelector("#passengers");

departure.addEventListener("input", () => {
    departure.value = departure.value.replace(/[A-Za-z\s]/g, "");
});

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const fromValue = from.value.trim();
    const toValue = to.value.trim();
    const departureValue = departure.value;
    const passengersValue = passengers.value;

    if (fromValue === "") {
        alert("Please enter your departure city.");
        from.focus();
        return;
    }

    if (toValue === "") {
        alert("Please enter your destination city.");
        to.focus();
        return;
    }

    if (fromValue.toLowerCase() === toValue.toLowerCase()) {
        alert("Departure and destination cities cannot be the same.");
        to.focus();
        return;
    }

    if (departureValue === "") {
        alert("Please select your departure date.");
        departure.focus();
        return;
    }

    const today = new Date();
    const selectedDate = new Date(departureValue);

    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        alert("Departure date cannot be in the past.");
        departure.focus();
        return;
    }

    if (passengersValue === "") {
        alert("Please select the number of passengers.");
        passengers.focus();
        return;
    }

    alert("Searching flights...");

    // Example:
    // window.location.href = "flight-results.html";
});


//

const ctaBtn = document.querySelector(".ctabtn");
const ctaEmail = document.querySelector("#ctaform");

ctaBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = ctaEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Please enter your email address");
        ctaEmail.focus();
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        ctaEmail.focus();
        return;
    }

    alert("Thank you for subscribing!");

    ctaEmail.value = "";
});

//

const heroSection = document.querySelector(".hero-section");

const images = [
    "./src/pg19.webp",
    "./src/pm6.webp",
    "./src/hero-bg5.webp"
];

let index = 0;

setInterval(() => {

    index = (index + 1) % images.length;

    heroSection.style.background = `
    linear-gradient(
        125deg,
        rgba(0,0,0,.78),
        rgba(0,0,0,.82)
    ),
    url('${images[index]}') center/cover no-repeat`;

}, 3000);

//

const dropdown = document.querySelector("#passengerDropdown");
const selected = dropdown.querySelector(".dropdown-selected");
const selectedText = selected.querySelector("span");
const options = dropdown.querySelectorAll(".dropdown-option");
const hiddenInput = document.querySelector("#passengers");

selected.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

options.forEach(option => {

    option.addEventListener("click", () => {

        selectedText.textContent = option.dataset.value;
        hiddenInput.value = option.dataset.value;

        dropdown.classList.remove("active");
    });

});

document.addEventListener("click", (e) => {

    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }

});
