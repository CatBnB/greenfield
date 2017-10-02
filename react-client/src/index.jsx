import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Map from './components/MapView.jsx';
import Headerbar from './components/Headerbar.jsx';
import Sitterlist from './components/Sitterlist.jsx';
import Mappinglist from './components/Mappinglist.jsx';
import Bottombar from './components/Bottombar.jsx';
import OwnerProfile from './components/OwnerProfile.jsx';
import SitterProfile from './components/SitterProfile.jsx';

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
    // this.getData();
  }

  updateText() {
    this.setState({text: 'clicked'});
  };

  getData() {
    $.ajax({
      url: '/catBnB', //
      type: 'GET',
      context: this,
      contentType: "application/json",
      success: function(data){
        this.setState({data:data});
      },
      error: function(err){
        console.log('err', err);
      }
    })
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
    <div className = 'container'>
      <div className = ''>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Headerbar pageState={this.navClick} />
        </nav>
      </div>
        { this.state.pageState === 'HomePage' ?
           (
            <div className = 'row'>
              <div className = 'col.md-6'>
                <Sitterlist />
              </div>
              <div className = 'col-md-6'>
                <Mappinglist />
              </div>
            </div>
            )
          : this.state.pageState === 'SignUp' ?
            (
              <OwnerProfile />
            )
            : <SitterProfile />
        }
      <div className = '' >
        <Bottombar />
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
