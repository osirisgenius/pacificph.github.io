document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');

    video.addEventListener('ended', function () {

        this.currentTime = 0;

        this.play();
    });
});

const captchaForm = document.getElementById("captchaFormID")
const captchaResult = document.getElementById("g-recaptcha-error")

var recaptcha_response = ''

// function submitSendMessageForm(event){
//     event.preventDefault()

//     if(recaptcha_response.length == 0) {
//         captchaResult.innerHTML = '<span style="color:red;">This field is required.</span>';

//         return false;
//     }
// }

// function verifyCaptcha(token) {
//     recaptcha_response = token;
//     document.getElementById('g-recaptcha-error').innerHTML = '';
// }

// Function to handle reCAPTCHA callback
function handleRecaptchaResponse(response) {
    recaptcha_response = response;
}

// Callback function for reCAPTCHA widget
function onSubmitRecaptcha(token) {
    handleRecaptchaResponse(token);
}

// Function to handle form submission
function submitSendMessageForm(event) {
    event.preventDefault();

    if (recaptcha_response.length === 0) {
        captchaResult.innerHTML = '<span style="color:red;">This field is required.</span>';
        console.log("captcha: " + recaptcha_response);
        return false;
    }

    console.log("captcha: " + recaptcha_response);

    document.getElementById('g-recaptcha-error').innerHTML = '';
}

// Event listener for form submission
captchaForm.addEventListener('submit', submitSendMessageForm);