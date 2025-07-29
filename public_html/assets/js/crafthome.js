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








  // Scroll animation trigger
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));


