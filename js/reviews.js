"use strict";

/*
    Select all filter buttons.
*/
const filterButtons = document.querySelectorAll(".filter-btn");

/*
    Select all review items.
*/
const reviewItems = document.querySelectorAll(".review-item");

/*
    Select the paragraph that shows the number of reviews.
*/
const reviewCount = document.querySelector("#reviewCount");

/*
    Select the hidden message for when no reviews match.
*/
const noReviewsMessage = document.querySelector("#noReviewsMessage");


/*
    Loop through every filter button.
*/
for (const button of filterButtons) {

    /*
        Run this function whenever a filter button is clicked.
    */
    button.addEventListener("click", function () {

        /*
            Get the data-rating value from the clicked button.
        */
        const selectedRating = button.dataset.rating;

        /*
            Remove the active class from every filter button.
        */
        for (const currentButton of filterButtons) {
            currentButton.classList.remove("active");
        }

        /*
            Add the active class to the clicked button.
        */
        button.classList.add("active");

        /*
            Start the number of visible reviews at zero.
        */
        let visibleReviewCount = 0;

        /*
            Check every review item.
        */
        for (const review of reviewItems) {

            /*
                Get the data-rating value from the current review.
            */
            const reviewRating = review.dataset.rating;

            /*
                Display the review when:
                1. The All Reviews button is selected, or
                2. The review rating matches the selected rating.
            */
            if (
                selectedRating === "all" ||
                reviewRating === selectedRating
            ) {

                /*
                    Remove Bootstrap's d-none class
                    so that the review becomes visible.
                */
                review.classList.remove("d-none");

                /*
                    Increase the visible review count by one.
                */
                visibleReviewCount++;

            } else {

                /*
                    Add Bootstrap's d-none class
                    to hide the review.
                */
                review.classList.add("d-none");
            }
        }

        /*
            Update the review count text.
        */
        updateReviewCount(visibleReviewCount, selectedRating);

        /*
            Show the no-reviews message when no reviews match.
        */
        if (visibleReviewCount === 0) {
            noReviewsMessage.classList.remove("d-none");
        } else {
            noReviewsMessage.classList.add("d-none");
        }
    });
}


/*
    Update the message below the filter buttons.
*/
function updateReviewCount(numberOfReviews, selectedRating) {

    /*
        Message for the All Reviews filter.
    */
    if (selectedRating === "all") {

        reviewCount.textContent =
            `Showing all ${numberOfReviews} reviews`;

        return;
    }

    /*
        Singular message when exactly one review matches.
    */
    if (numberOfReviews === 1) {

        reviewCount.textContent =
            `Showing 1 review with a ${selectedRating}-star rating`;

        return;
    }

    /*
        Plural message when zero or multiple reviews match.
    */
    reviewCount.textContent =
        `Showing ${numberOfReviews} reviews with a ${selectedRating}-star rating`;
}