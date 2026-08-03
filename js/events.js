const weekButtons = document.querySelectorAll(".week-button");
const thisWeekSection = document.getElementById("this-week");
const nextWeekSection = document.getElementById("next-week");
const weekDescription = document.getElementById("weekDescription");

weekButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedWeek = button.dataset.week;

        weekButtons.forEach(function (otherButton) {
            otherButton.classList.remove("active");
            otherButton.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        if (selectedWeek === "this-week") {
            thisWeekSection.classList.remove("d-none");
            nextWeekSection.classList.add("d-none");
            weekDescription.textContent = "Showing events and specials for this week.";
        } else {
            thisWeekSection.classList.add("d-none");
            nextWeekSection.classList.remove("d-none");
            weekDescription.textContent = "Showing events and specials for next week.";
        }
    });
});
