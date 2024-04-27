document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');

    video.addEventListener('ended', function () {
        // Rewind the video to the beginning
        this.currentTime = 0;
        // Play the video again
        this.play();
    });
});

var recaptcha_response = ""

const captchaForm = document.getElementById("captchaFormID")
const captchaResult = document.getElementById("g-recaptcha-error")

function submitSendMessageForm(e) {
    e.preventDefault()

    if(recaptcha_response.length == 0) {
        captchaResult.innerHTML = '<span style="color:red;">This field is required.</span>';
        return false;
    }
    return true;
}
