const searchBtn = document.querySelector(".search-btn");

const from = document.querySelector("#from");
const to = document.querySelector("#to");
const departure = document.querySelector("#departure");
const passengers = document.querySelector("#passengers");

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