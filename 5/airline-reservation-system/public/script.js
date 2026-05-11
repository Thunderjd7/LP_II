console.log("Airline Reservation System Loaded");

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("detailName").textContent = document.getElementById("passengerName").value;
        document.getElementById("detailFrom").textContent = document.getElementById("fromCity").value;
        document.getElementById("detailTo").textContent = document.getElementById("toCity").value;
        document.getElementById("detailDate").textContent = document.getElementById("travelDate").value;

        document.getElementById("bookingDetails").style.display = "block";
    });
}
