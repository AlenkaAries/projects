function initMap() {
    const coordinates = { lat: 48.425983, lng: 35.0372898 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: coordinates,
      zoomControl: false,
      //disableDefaultUI: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
    });
    const mapMarker = './img/cat_cage.png';
    const marker = new google.maps.Marker({
      position: coordinates,
      map,
      icon: mapMarker,
    });
    const popupContent = '<p class="content">Я тут!!</p>';
    const infowindow = new google.maps.InfoWindow({
      content: popupContent
    });
    infowindow.open(map, marker);
    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
  }
