// Google Maps API
// Initalize And Add The Map
function initMap() {
  // Your location
  const loc = { lat: 40.713299, lng: -73.949249 };
  // Centered map on location & adding it to the document
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Jquery Smooth Scroll
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 85
      },
      800
    );
  }
});

// Sticky Menu Background Opacity
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    document.querySelector('#navbar').style.opacity = 0.8;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});