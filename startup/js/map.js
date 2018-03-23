function initMap() {
    const coordinates = { lat: 48.4260555, lng: 35.0272543 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: coordinates,
      zoomControl: true,
      //disableDefaultUI: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
    });
    const mapMarker = './img/cat_box.png';
    const marker = new google.maps.Marker({
      position: coordinates,
      map,
      icon: mapMarker,
    });
    const popupContent = '<p class="content">We are here!</p>';
    const infowindow = new google.maps.InfoWindow({
      content: popupContent
    });
    infowindow.open(map, marker);
    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
  }

