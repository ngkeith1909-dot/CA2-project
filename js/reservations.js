const reservationForm = document.getElementById("reservationForm");
const confirmationMessage = document.getElementById("confirmationMessage");
const reservationDate = document.getElementById("reservationDate");

// Set the earliest available date to today.
const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
reservationDate.min = today.toISOString().split("T")[0];

reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    confirmationMessage.classList.add("d-none");

    if (!reservationForm.checkValidity()) {
        reservationForm.classList.add("was-validated");
        return;
    }

    const customerName = document.getElementById("customerName").value.trim();
    const partySize = document.getElementById("partySize").value;
    const selectedDate = reservationDate.value;
    const selectedTime = document.getElementById("reservationTime").value;

    const formattedDate = new Date(selectedDate + "T00:00:00").toLocaleDateString("en-SG", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    confirmationMessage.textContent =
        `Thank you, ${customerName}! Your table for ${partySize} guest(s) ` +
        `has been reserved for ${formattedDate} at ${selectedTime}.`;

    confirmationMessage.classList.remove("d-none");
    reservationForm.reset();
    reservationForm.classList.remove("was-validated");
    confirmationMessage.scrollIntoView({ behavior: "smooth", block: "center" });
});
