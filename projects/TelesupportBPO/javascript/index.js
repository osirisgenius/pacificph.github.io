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

function submitSendMessageForm(event) {
    event.preventDefault()

    if (recaptcha_response.length == 0) {
        captchaResult.innerHTML = '<span style="color:red;">This field is required.</span>';

        return false;
    }

    emailjs.init({
        publicKey: "TgE91BuNXMFuoR3mW",
    });

    emailjs.sendForm('contact_service', 'contact_form', this)
        .then(() => {
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error);
        });
}

function verifyCaptcha(token) {
    recaptcha_response = token;
    captchaResult.innerHTML = '';
}
