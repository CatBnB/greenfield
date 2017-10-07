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
      <div>
        <OwnerDashEntry />
      </div>
    )
  }
}
export default OwnerDashView