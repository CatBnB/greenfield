import React from 'react';
import SitterList from './SitterListView.jsx';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null
    }
    this.updateMarkers = this.updateMarkers.bind(this);
  }


  componentDidMount() {
    var mapOptions = {
      center: new google.maps.LatLng(37.7837, -122.4089),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(this.mapContainer, mapOptions);

    this.setState({map: map}, () => {
      this.updateMarkers();
    });
  };

  updateMarkers() {
    var markerOptions = {
      position: new google.maps.LatLng(37.7837, -122.4089)
    };
    var marker = new google.maps.Marker(markerOptions);
    marker.setMap(this.state.map);

    var infoWindowOptions = {
      content: 'Hack Reactor here!'
    };

    var context = this;
    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    google.maps.event.addListener(marker,'click',function(e){

      infoWindow.open(this.state.map, marker);
      context.props.updateText();
    });
  }

  render() {
    return (
      <div>
        <SitterList />
        <div id="map" ref={x => { this.mapContainer = x; }}></div>
      </div>
    );
  }
}


export default Map;
