import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Headerbar from './components/Headerbar.jsx';
import Sitterlist from './components/Sitterlist.jsx';
import Mappinglist from './components/Mappinglist.jsx';
import Bottombar from './components/Bottombar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  
  componentDidMount() {
    // this.getData();
  }

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

  render () {
    return (
    <div className = 'container'>
      <div className = ''>
        <h1>CAT BnB</h1>
        <Headerbar />
      </div>
      <div className = 'row'>
        <div className = 'col.md-6'>
          <Sitterlist />
        </div>
        <div className = 'col-md-6'>
          <Mappinglist />
        </div>
      </div>
      <div className = '' >
        <Bottombar />
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));