
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
 });
 });