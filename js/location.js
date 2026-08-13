const currentDate = new Date();
const currentDay = currentDate.getDay();
const currentHour = currentDate.getHours();

const todayRow = document.querySelector(`[data-day="${currentDay}"]`);
const cafeStatus = document.getElementById("cafeStatus");
const statusMessage = document.getElementById("statusMessage");
const todayLabel = document.getElementById("todayLabel");
const statusIcon = document.getElementById("statusIcon");

if (todayRow) {
    todayRow.classList.add("today-row");
    todayRow.querySelector("th").textContent += " (Today)";

    const openingHour = Number(todayRow.dataset.open);
    const closingHour = Number(todayRow.dataset.close);
    const isOpen = currentHour >= openingHour && currentHour < closingHour;

    const dayName = todayRow.querySelector("th").textContent.replace(" (Today)", "");
    const openingHours = todayRow.querySelector("td").textContent;
    todayLabel.textContent = `${dayName}: ${openingHours}`;

    cafeStatus.classList.remove("status-open", "status-closed");

    if (isOpen) {
        statusMessage.textContent = "We are open now.";
        cafeStatus.classList.add("status-open");
        statusIcon.className = "bi bi-door-open-fill";
    } else {
        statusMessage.textContent = "We are closed now.";
        cafeStatus.classList.add("status-closed");
        statusIcon.className = "bi bi-door-closed-fill";
    }
}
