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
        id: 1, image: "../img/callcenter-image/did-call.png",
        title: "Direct Inward Dialing",
        description: `We understand the importance of localized communication. Our dialer is equipped
    with hundreds of Direct Inward Dialing (DID) numbers per state, facilitating a personalized and
    region-specific approach. This ensures that your operations are finely tuned to the unique requirements of
    each state, fostering stronger connections with your audience.` },

    {
        id: 2, image: "../img/callcenter-image/flexibility.jpeg",
        title: "Scalability and Flexibility",
        description: `TeleSupport BPO's dialer is designed to grow with your business. Whether you are a startup
        or an established enterprise, our scalable solution adapts to your evolving needs. Experience the
        flexibility to expand your operations without compromising on performance.`
    },

    {
        id: 3, image: "../img/callcenter-image/failover.png",
        title: "Reliability at its Core",
        description: `Reliability is non-negotiable in today's fast-paced business environment. Our dialer system
        is built with redundancy and failover mechanisms, ensuring uninterrupted operations. Trust TeleSupport BPO
        to keep your communication lines open and your business running smoothly.`
    },

    {
        id: 4, image: "../img/callcenter-image/analytics.jpeg",
        title: "Advanced Analytics",
        description: `Make informed decisions with our comprehensive analytics tools. Gain valuable insights into
        your call campaigns, track performance metrics, and optimize your strategies for maximum efficiency.
        Our dialer system empowers you to make data-driven decisions that impact your bottom line positively.`
    },
];

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
            $("#service-content").fadeOut("slow", function() {
                contentImage.src = selectedItem.image;
                contentDescription.innerHTML = selectedItem.description;
                contentTitle.innerHTML = selectedItem.title;
                // Fade in the element once the fade-out animation is complete
                $(this).fadeIn("slow");
            });
        }
    });
});
