// Toast Notification Function
function showToast(message) {
    const toast = document.createElement("div");

    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 3000);
}

// Book Button and Smooth Scrolling
document.addEventListener("DOMContentLoaded", function () {

   const bookButtons = document.querySelectorAll(
    '.book-btn, a[href="#booking"]'
);

    console.log("JavaScript loaded!");
    console.log("Book buttons found:", bookButtons.length);

    bookButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const bookingSection = document.getElementById("booking");

            if (bookingSection) {
                bookingSection.scrollIntoView({
                    behavior: "smooth"
                });

                showToast("Please fill your ticket booking form!");
            } else {
                console.log("Booking section not found!");
            }

        });

    });

});

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let match = document.getElementById("match").value;
    let stand = document.getElementById("stand");
    let tickets = Number(document.getElementById("tickets").value);

    let preference = document.querySelector(
        'input[name="preference"]:checked'
    );

    // Calculate total amount
    let price = Number(stand.value);
    let total = price * tickets;

    // Display booking details
    document.getElementById("sName").textContent = name;
    document.getElementById("sEmail").textContent = email;
    document.getElementById("sPhone").textContent = phone;
    document.getElementById("sMatch").textContent = match;

    document.getElementById("sStand").textContent =
        stand.options[stand.selectedIndex].text;

    document.getElementById("sTickets").textContent = tickets;

    document.getElementById("sPreference").textContent =
        preference.value;

    document.getElementById("sTotal").textContent = total;
    showToast("Booking summary updated!");

    // Show Booking Summary
    document.getElementById("bookingSummary").style.display = "block";

    // Scroll to summary
    document.getElementById("bookingSummary").scrollIntoView({
        behavior: "smooth"
    });

});

// Activity 7 - Live Interaction

const matchInput = document.getElementById("match");
const standInput = document.getElementById("stand");
const ticketsInput = document.getElementById("tickets");

matchInput.addEventListener("change", function () {
    bookingForm.requestSubmit();
});

standInput.addEventListener("change", function () {
    bookingForm.requestSubmit();
});

ticketsInput.addEventListener("input", function () {
    bookingForm.requestSubmit();
});
// Confirm Booking
function confirmBooking() {
    alert("Your IPL Ticket Booking is Confirmed Successfully!");
}

// Hide summary when form is reset
bookingForm.addEventListener("reset", function() {
    document.getElementById("bookingSummary").style.display = "none";
});

function confirmBooking() {

    document.getElementById("confirmationModal")
        .style.display = "flex";

}

function undoConfirmation() {

    document.getElementById("confirmationModal")
        .style.display = "none";

}
