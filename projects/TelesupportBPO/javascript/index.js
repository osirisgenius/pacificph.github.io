document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');

    video.addEventListener('ended', function () {
        // Rewind the video to the beginning
        this.currentTime = 0;
        // Play the video again
        this.play();
    });
});

// Slideshow

