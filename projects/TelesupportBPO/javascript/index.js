document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');

    video.addEventListener('ended', function () {
        // Rewind the video to the beginning
        this.currentTime = 0;
        // Play the video again
        this.play();
    });
});

const captchaForm = document.getElementById("captchaFormID")

captchaForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const captchaResponse = grecaptcha.getResponse();

    if (!captchaResponse.length > 0 ){
        throw new Error("Captcha not completed")
    }
})

// Slideshow

