const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryCount = document.getElementById("galleryCount");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.category;
        let visibleCount = 0;

        filterButtons.forEach(function (otherButton) {
            otherButton.classList.remove("active");
        });

        button.classList.add("active");

        galleryItems.forEach(function (item) {
            if (selectedCategory === "all" || item.dataset.category === selectedCategory) {
                item.classList.remove("d-none");
                visibleCount++;
            } else {
                item.classList.add("d-none");
            }
        });

        if (selectedCategory === "all") {
            galleryCount.textContent = `Showing all ${visibleCount} photos`;
        } else {
            galleryCount.textContent = `Showing ${visibleCount} ${selectedCategory} photo(s)`;
        }
    });
});

const imageModal = document.getElementById("imageModal");

imageModal.addEventListener("show.bs.modal", function (event) {
    const selectedCard = event.relatedTarget;
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("imageModalTitle");

    modalImage.src = selectedCard.dataset.image;
    modalImage.alt = selectedCard.dataset.title;
    modalTitle.textContent = selectedCard.dataset.title;
});
