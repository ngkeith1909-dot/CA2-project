"use strict";

let staffButtons = document.querySelectorAll(".staff-name");

for (let button of staffButtons) {
    button.addEventListener("click", function () {
        let bioId = button.dataset.target;
        let bio = document.getElementById(bioId);

        bio.classList.toggle("d-none");

        let isOpen = !bio.classList.contains("d-none");
        button.setAttribute("aria-expanded", isOpen);

        let icon = button.querySelector("i");

        if (isOpen) {
            icon.className = "bi bi-chevron-up";
        } else {
            icon.className = "bi bi-chevron-down";
        }
    });
}