$(document).ready(function () {
    // Service List animation
    $("#data-list li").css({ opacity: 0, marginLeft: "-50px" });
    $("#data-list li").each(function (index) {
        $(this).delay(300 * index).animate({
            marginLeft: "0",
            opacity: 1
        }, 1500);
    });
    // Contact Animation
    $("#contact-container").css({ opacity: 0, marginLeft: "-50px" });
    $("#contact-container").each(function (index) {
        $(this).delay(300 * index).animate({
            marginLeft: "0",
            opacity: 1
        }, 1500);
    });
    // Service Image and Description Animation
    $("#service-content").css({ opacity: 0, marginRight: "-200px" });
    $("#service-content").each(function (index) {
        $(this).delay(1000 * index).animate({
            marginRight: "0",
            opacity: 1
        }, 2500);
    });
});

// CALL CENTER DATA
const dataList = [
    {
        id: 1, image: "../img/virtual-assistant-image/data-security.jpg",
        title: "Data Security",
        description: `We employ industry-leading security measures to protect your sensitive information, including encryption,
         secure data storage, and access controls.`
    },

    {
        id: 2, image: "../img/virtual-assistant-image/personalized-va.jpeg",
        title: "Personalized Assistance",
        description: `Your Virtual Assistant becomes an extension of your team, understanding your unique needs and providing
        tailored support`
    },

    {
        id: 3, image: "../img/virtual-assistant-image/time-optimization.jpg",
        title: "Time Optimization",
        description: `Delegate routine tasks to your Virtual Assistant, freeing up valuable time for strategic decision-making
        and important projects.`
    },

    {
        id: 4, image: "../img/virtual-assistant-image/efficiency.jpg",
        title: "Increased Efficiency",
        description: `Our Virtual Assistants are adept at managing multiple tasks simultaneously, ensuring efficient operations
        and timely deliverables.`
    },
    {
        id: 5, image: "../img/virtual-assistant-image/cost-effective.jpg",
        title: "Cost-Effective Solution",
        description: `By outsourcing administrative tasks to our Virtual Assistants, you can reduce overhead costs associated
        with hiring and training additional staff.`
    },
];
// VA DATA

const contentImage = document.getElementById("service-img");
const contentDescription = document.getElementById("service-description");
const contentTitle = document.getElementById("item-title");

const dataListItems = document.querySelectorAll("#data-list li");

dataListItems.forEach(item => {
    item.addEventListener("click", () => {
        // Remove the "active" class from all list items
        dataListItems.forEach(otherItem => {
            otherItem.classList.remove("active");
        });

        // Add the "active" class to the clicked item
        item.classList.add("active");

        const itemId = parseInt(item.dataset.id);
        const selectedItem = dataList.find(data => data.id === itemId);

        if (selectedItem) {
            $("#service-content").fadeOut("slow", function () {
                contentImage.src = selectedItem.image;
                contentDescription.innerHTML = selectedItem.description;
                contentTitle.innerHTML = selectedItem.title;
                // Fade in the element once the fade-out animation is complete
                $(this).fadeIn("slow");
            });
        }
    });
});

// VIRTUAL ASSISTANT DATA