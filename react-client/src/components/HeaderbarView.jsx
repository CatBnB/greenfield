import React from 'react';
import Login from './LoginView.jsx';

class Headerbar extends React.Component {
  constructor(props) {
    super(props);

    this.initializeAutocomplete = this.initializeAutocomplete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUpdate() {
    this.initializeAutocomplete(this.props.map);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  initializeAutocomplete(map) {
    var autocomplete = new google.maps.places.Autocomplete(this.searchBox);
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
        map.setZoom(8);
      }
      marker.setPosition(place.geometry.location);
      infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
      infoWindow.open(map, marker);
      google.maps.event.addListener(marker,'click',function(e){

        infoWindow.open(map, marker);
      });
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-brand" onClick={this.props.pageState.bind(null,'HomePage')}>Cat BnB</div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              { this.props.user === null ?
                <div className="nav-link" onClick={this.props.pageState.bind(null,'SignUp')} >Sign-Up</div>
                :
                  <div className='row'>
                    <div className="nav-link col-lg-6" onClick={this.props.pageState.bind(null,'Profile')} >Profile</div>
                    <div className="nav-link col-lg-6" onClick={this.props.pageState.bind(null,'Dashboard')} >Dashboard</div>
                  </div>
              }
              </li>
              <li className="nav-item">
                <Login setAuth={this.props.setAuth} setUser={this.props.setUser} />
              </li>
            </ul>
            <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
              <input ref={x => { this.searchBox = x; }} className="form-control mr-sm-2" type="text" placeholder="Input Your Address" aria-label="Search"></input>
              {/* <button onClick={this.handleSubmit} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            </form>
          </div>
        </div>
      </nav>
    );
  }
}


export default Headerbar
