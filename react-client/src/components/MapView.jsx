import React from 'react';
import get from '../ajaxHelper.js';
import SitterList from './SitterListView.jsx';
import {sitters} from '../sampleData.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sitters: null
    }

    this.updateMarkers = this.updateMarkers.bind(this);
    this.initializeAutocomplete = this.initializeAutocomplete.bind(this);
  }

  componentWillMount() {
    this.setState({sitters: sitters});
    // get('/sitters').then(data => this.setState({sitters: data}));
  }

  componentDidMount() {
    var mapOptions = {
      center: new google.maps.LatLng(37.7837, -122.4089),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(this.mapContainer, mapOptions);

    this.updateMarkers(map);
    this.initializeAutocomplete(map);
  };

  initializeAutocomplete(map) {
    var autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
    autocomplete.bindTo('bounds',map);
    var infoWindow = new google.maps.InfoWindow();

    var marker = new google.maps.Marker({
      map: map
    });

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      infoWindow.close();
      var place = autocomplete.getPlace();
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(10);
      }
      marker.setPosition(place.geometry.location);
      infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
      infoWindow.open(map, marker);
      google.maps.event.addListener(marker,'click',function(e){

        infoWindow.open(map, marker);

      });
    });
  }

  updateMarkers(map) {
    this.state.sitters.forEach(sitter => {
      var markerOptions = {
        position: new google.maps.LatLng(sitter.coordinates[0], sitter.coordinates[1])
      };
      var marker = new google.maps.Marker(markerOptions);
      marker.setMap(map);

      var infoWindowOptions = {
        content: sitter.name
      };

      var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
      google.maps.event.addListener(marker,'click', (e) => {
        infoWindow.open(map, marker);
      });
    })
  }

  render() {
    return (
      <div className = 'row'>
        <div className = 'col-sm-6'>
          <SitterList sitters={this.state.sitters}/>
        </div>
        <div className = 'col-sm-6'>
          <input type="text" id="autocomplete" ref={x => { this.autocomplete = x; }}></input>
          <div id="map" ref={x => { this.mapContainer = x; }}></div>
        </div>
      </div>
    );
  }
}


export default Map;
