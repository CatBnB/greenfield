import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class SitterProfile extends React.Component {
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
    // $.ajax({
    //   url: '/catBnB', //
    //   type: 'GET',
    //   context: this,
    //   contentType: "application/json",
    //   success: function(data){
    //     this.setState({data:data});
    //   },
    //   error: function(err){
    //     console.log('err', err);
    //   }
    // })
  }

  render () {
    return (
    <div>
    Sitter Profile
    </div>)
  }
}

export default SitterProfile