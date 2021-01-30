
// function insertGuest(){
//     const yourName = prompt("Enter Your Name").toUpperCase()
//     const firstLetter = yourName[0]
//     const remainingLetter = yourName.slice(1).toLocaleLowerCase()
//     const insertName = document.querySelector(".t-span")

//     if (yourName == ""){
//         insertName.innerHTML =  "Guest!";
//     }

//     else{
//         insertName.innerHTML =  firstLetter + remainingLetter + '!';
//     }
// }

// insertGuest()

// ERROR For SEND BUTTON on Cotacts
$(document).ready(function() {
    $("#sendmeWarn").click(function () {
    $(".text-warn").show(100)
    $(".arrowshow").show(1)
    $(".footer-item").addClass("upanddown")
    $(".footer").addClass("glowshadow")
 });
 });


//  Profile Show Button
 $(document).ready(function() {
    $("#g-logo").click(function () {
    $(".ldpage-content").fadeOut(1500)
    $(".lp-profile").fadeIn(3000)

 });
 });
// Profile Hide Button
 $(document).ready(function() {
    $(".p-exit").click(function () {
    $(".ldpage-content").fadeIn(3000)
    $(".lp-profile").fadeOut(1500)
 });
 });

 // Website Show Button
 $(document).ready(function() {
   $("#website").click(function () {
});
});


