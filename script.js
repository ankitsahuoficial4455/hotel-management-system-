document.addEventListener("DOMContentLoaded", function () {

    const bookingForm = document.querySelector("form");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert(
                "Thank you! Your booking request has been received."
            );

            bookingForm.reset();

        });

    }

});
