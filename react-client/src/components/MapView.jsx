import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    var mapOptions = {
      center: new google.maps.LatLng(37.7837, -122.4089),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(this.mapContainer, mapOptions);

    var markerOptions = {
      position: new google.maps.LatLng(37.7837, -122.4089)
    };
    var marker = new google.maps.Marker(markerOptions);
    marker.setMap(map);

    var infoWindowOptions = {
      content: 'Moscone Is Here!'
    };

    var context = this;
    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    google.maps.event.addListener(marker,'click',function(e){

      infoWindow.open(map, marker);
      context.props.updateText();
    });
  };

  render() {
    return (
      <div>
        <div id="map" ref={x => { this.mapContainer = x; }}></div>
      </div>
    );
  }
}


export default Map;
