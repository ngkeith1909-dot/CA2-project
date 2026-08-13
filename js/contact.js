document.getElementById("contactForm").addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let errorMessage = document.getElementById("errorMessage");
        let thankYouMessage = document.getElementById("thankYouMessage");

        if (name === "" || email === "" || message === "") {

            errorMessage.textContent =
                "Please fill in all fields.";

            errorMessage.classList.remove("d-none");

            thankYouMessage.classList.add("d-none");

        }

        else {

            errorMessage.classList.add("d-none");

            thankYouMessage.classList.remove("d-none");

            document.getElementById("contactForm").reset();

        }

    });
