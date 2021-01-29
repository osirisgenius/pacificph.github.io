
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


$(document).ready(function() {
    $("#sendmeWarn").click(function () {
    $(".text-warn").show(100)
    $(".arrowshow").show(1)
    $(".footer-item").addClass("upanddown")
    $(".footer").addClass("glowshadow")
 });
 });

 $(document).ready(function() {
    $(".game-logo").click(function () {
    $(".ldpage-content").fadeOut(2000)
    $(".lp-profile").fadeIn(5000)
 });
 });

 $(document).ready(function() {
    $(".p-exit").click(function () {
    $(".ldpage-content").fadeIn(3000)
    $(".lp-profile").fadeOut(1500)
 });
 });

