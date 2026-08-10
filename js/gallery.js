function openImage(image) {

    document.getElementById("modalImage").src = image.src;

    document.getElementById("modalImage").alt = image.alt;

    document.getElementById("modalTitle").textContent = image.alt;

    let modal = new bootstrap.Modal(
        document.getElementById("imageModal")
    );

    modal.show();

}
