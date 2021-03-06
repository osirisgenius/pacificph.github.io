//   NAV ITEMS CLICK CLOSE MENU

$(".nav-item").click(function(){
    if ($(".navbar-collapse").hasClass("show")){
        $(".navbar-collapse").removeClass("show")
    }
})

// Scroll Reveal Function

$(function(){

    window.sr = ScrollReveal();
  
    if ($(window).width() < 768) {
  
        sr.reveal('.fadeup', {
            origin: 'bottom',
            distance: '100px',
            easing: 'ease-in-out',
            duration: 1000,
        });
    } 
    
    else {
        
    sr.reveal('.fadeup', {
        origin: 'top',
        distance: '100px',
        easing: 'ease-in-out',
        duration: 1000,
    });


    }
  
  });


// 
      // Initialize and add the map
      function initMap() {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      }