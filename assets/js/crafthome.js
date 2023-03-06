/*!
=========================================================
* CraftHome Landing page
=========================================================

* Copyright: 2023 Dcrews (https://www.dcrews.ga/)
* Licensed: (https://www.dcrews.ga//licenses)
* Coded by https://www.dcrews.ga/

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

// function initMap() {
//     var uluru = {lat: 37.227837, lng: -95.700513};
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 8,
//       center: uluru
//     });
//     var marker = new google.maps.Marker({
//       position: uluru,
//       map: map
//     });
//  }
