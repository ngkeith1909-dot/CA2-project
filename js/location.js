const currentDate = new Date();
const currentDay = currentDate.getDay();
const currentHour = currentDate.getHours();
const todayRow = document.querySelector(`[data-day="${currentDay}"]`);
const openStatus = document.getElementById("openStatus");

if (todayRow) {
    todayRow.classList.add("today-row");
    todayRow.querySelector("th").textContent += " (Today)";
}

if (currentHour >= 8 && currentHour < 22) {
    openStatus.textContent = "Open now";
    openStatus.classList.add("status-open");
} else {
    openStatus.textContent = "Closed now";
    openStatus.classList.add("status-closed");
}
