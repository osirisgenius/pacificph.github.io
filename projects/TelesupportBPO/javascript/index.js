document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');

    video.addEventListener('ended', function () {

        this.currentTime = 0;

        this.play();
    });
});

var recaptcha_response = ""

const captchaForm = document.getElementById("captchaFormID")
const captchaResult = document.getElementById("g-recaptcha-error")

function submitSendMessageForm(event){
    event.preventDefault()

    if(recaptcha_response.length == 0) {
        captchaResult.innerHTML = '<span style="color:red;">This field is required.</span>';
        return false;
    }

    document.getElementById('g-recaptcha-error').innerHTML = ''
}
