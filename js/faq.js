const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const answerId = question.getAttribute("aria-controls");
        const answer = document.getElementById(answerId);
        const isOpen = question.getAttribute("aria-expanded") === "true";

        // Close every FAQ answer first.
        faqQuestions.forEach(function (otherQuestion) {
            const otherAnswerId = otherQuestion.getAttribute("aria-controls");
            const otherAnswer = document.getElementById(otherAnswerId);

            otherQuestion.setAttribute("aria-expanded", "false");
            otherAnswer.hidden = true;
        });

        // Open the selected answer unless it was already open.
        if (!isOpen) {
            question.setAttribute("aria-expanded", "true");
            answer.hidden = false;
        }
    });
});
