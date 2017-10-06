import React from 'react';
import get from '../ajaxHelper.js';
import SitterList from './SitterListView.jsx';
import {sitters} from '../sampleData.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sitters: null,
      selected: null,
      sitterClicked: false,
      markers: null
    }

    this.icon = 'http://maps.google.com/mapfiles/ms/icons/blue.png';
    this.selectedIcon = 'http://maps.google.com/mapfiles/ms/icons/blue-pushpin.png';

    this.updateMarkers = this.updateMarkers.bind(this);
    // this.initializeAutocomplete = this.initializeAutocomplete.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentWillMount() {
    // using sample data
    this.setState({sitters: sitters});
    // get('/sitters').then(data => this.setState({sitters: data}));
  }

  componentDidMount() {
    var mapOptions = {
      center: new google.maps.LatLng(37.7837, -122.4089),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(this.mapContainer, mapOptions);
    this.props.setMap(map);

    google.maps.event.addListener(map,'click',function(e){
      this.state.markers.forEach(marker => marker.setIcon(this.icon));
      this.setState({sitterClicked: false});
    }.bind(this));

    this.updateMarkers(map);
  };

  updateMarkers(map) {
    var markers = [];
    this.state.sitters.forEach((sitter, index) => {
      var markerOptions = {
        position: new google.maps.LatLng(sitter.coordinates[0], sitter.coordinates[1]),
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
      };
      var marker = new google.maps.Marker(markerOptions);
      marker.setMap(map);
      markers.push(marker);

      // var infoWindowOptions = {
      //   content: sitter.name
      // };
      // var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
      //
      google.maps.event.addListener(marker,'click', (e) => {
        // infoWindow.open(map, marker);

        this.state.markers.forEach(marker => marker.setIcon(this.icon));
        marker.setIcon(this.selectedIcon);

        this.setState({selected: index}, () => {
          this.setState({sitterClicked: true});
        })
      });
    })
    this.setState({markers: markers});
  }

  toggleView(index) {
    this.setState({selected: index}, () => {
      this.setState({sitterClicked: !this.state.sitterClicked});
      this.state.markers[index].setIcon(this.selectedIcon);
    })
  }

  changeView() {
    this.setState({sitterClicked: !this.state.sitterClicked});
    this.state.markers.forEach(marker => marker.setIcon(this.icon));
  }

  render() {
    return (
      <div className = 'row homepage-map-inbox'>
        <div className = 'col-sm-6 homepage-map-inbox'>
          <SitterList sitters={this.state.sitters} toggleView={this.toggleView}
                      changeView={this.changeView} selected={this.state.selected}
                      sitterClicked={this.state.sitterClicked} />
        </div>
        <div className = 'col-sm-6'>
          <div id="map" ref={x => { this.mapContainer = x; }}></div>
        </div>
      </div>
    );
  }
}


export default Map;
