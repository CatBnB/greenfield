import React from 'react';
import ReactDOM from 'react-dom';
import get from './ajaxHelper.js';
import Map from './components/MapView.jsx';
import Headerbar from './components/HeaderbarView.jsx';
import Bottombar from './components/Bottombar.jsx';
import OwnerProfile from './components/OwnerProfileView.jsx';
import SitterProfile from './components/SitterProfileView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageState: 'HomePage',
      auth: null,
      map: null,
      user: null
    };

    this.navClick = this.navClick.bind(this);
    this.setAuth = this.setAuth.bind(this);
    this.setMap = this.setMap.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setAuth(authObj) {
    this.setState({auth: authObj});
  }

  setMap(map) {
    this.setState({map: map});
  }

  setUser(user) {
    this.setState({user: user});
  }

  navClick(data) {
    if(data === 'SignUp') this.setState({pageState: 'SignUp'});
    if(data === 'HomePage') this.setState({pageState: 'HomePage'});
  }

  render () {
    return (
      <div>
        <Headerbar setAuth={this.setAuth} pageState={this.navClick}
                   map={this.state.map} setUser={this.setUser} />
        <div className = 'container'>
          { this.state.pageState === 'HomePage' ?
            <Map setMap={this.setMap} user={this.state.user}
                 map={this.state.map} />
            : this.state.pageState === 'SignUp' ?
                (
                  <div>
                    <OwnerProfile />
                  </div>
                )
              : (
                  <div>
                    <SitterProfile />
                  </div>
                )
          }
        </div>
        <Bottombar pageState={this.navClick}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
