document.getElementById("bookingForm").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
    const seats = document.getElementById("seats").value;
    const type = document.getElementById("type").value;

    document.getElementById("message").textContent =
        `✅ Booking Confirmed for ${name} - ${seats} seat(s) on ${date} (${type}) from ${from} to ${to}.`;

    this.reset();
});
