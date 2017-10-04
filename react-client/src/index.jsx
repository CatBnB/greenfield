import React from 'react';
import ReactDOM from 'react-dom';
import get from './ajaxHelper.js';
import Map from './components/MapView.jsx';
import Headerbar from './components/Headerbar.jsx';
import Bottombar from './components/Bottombar.jsx';
import OwnerProfile from './components/OwnerProfileView.jsx';
import SitterProfile from './components/SitterProfileView.jsx';
import Login from './components/login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      pageState: 'HomePage'
    };
    this.navClick = this.navClick.bind(this);
  }

  componentDidMount() {

  }

  getData() {
    get('/catBnB', data => this.setState({data: data}));
  }

  navClick(data) {
    if(data === 'SignUp')
    this.setState({
      pageState: 'SignUp'
    })
    if(data === 'HomePage')
    this.setState({
      pageState: 'HomePage'
    })
    if(data === 'SignIn')
    this.setState({
      pageState: 'SignIn'
    })
  }


  render () {
    return (
      <div>
        <Headerbar pageState={this.navClick} />
        <div className = 'container'>
          { this.state.pageState === 'HomePage' ?
            <Map />
            : this.state.pageState === 'SignUp' ?
              (
                <div>
                  <Login />
                  <OwnerProfile />
                </div>
              )
              : (
                  <div>
                    <Login />
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
