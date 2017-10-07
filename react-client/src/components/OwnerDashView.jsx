import React from 'react';
import {post, validateInput} from '../ajaxHelper.js';
import OwnerDashEntry from './OwnerDashEntry.jsx'

class OwnerDashView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  cancleRequest(){
   var sentItem = this.state.sent.slice();
  }
  
  render() {
    return (
      <div className='Owner-dash-entry'>
        <h1>New Request</h1>
        <hr></hr>
        <h1>On-going Request</h1>
        <hr></hr>
        <h1>Finishied Request</h1>
        <hr></hr>
        <h1>Rejected Request</h1>
      </div>
    )
  }
}
export default OwnerDashView