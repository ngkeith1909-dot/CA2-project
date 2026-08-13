function filterMenu(category, button) {

    let dishes = document.querySelectorAll(".dish");
    let buttons = document.querySelectorAll(".filter-btn");

    for (let i = 0; i < dishes.length; i++) {

        if (category === "all" ||
            dishes[i].classList.contains(category)) {

            dishes[i].classList.remove("d-none");

        } else {

            dishes[i].classList.add("d-none");

        }

    }

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].classList.remove("active-filter");

    }

    button.classList.add("active-filter");

}
