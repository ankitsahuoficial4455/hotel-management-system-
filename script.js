document.addEventListener("DOMContentLoaded", function () {

    // Booking Form
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you! Your booking request has been received.");

            bookingForm.reset();
        });
    }


    // Contact Form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you! Your message has been sent.");

            contactForm.reset();
        });
    }

});