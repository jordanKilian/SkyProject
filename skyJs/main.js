// // GOOGLE MAP // //

// Initialize and add the map
function initMap() {
  // Your location
  const loc = {
    lat: 53.408371,
    lng: -2.991573
  };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at locaiton
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}

// // STICKY MENU FADE // //

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    document.querySelector('#navBar').style.opacity = 0.9;
  } else {
    document.querySelector('#navBar').style.opacity = 1;
  }
});

// // SMOOTH SCOLLING WITH JQUERY // // 

$('#navBar a, .btnLearn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      },
      600
    );
  }
});