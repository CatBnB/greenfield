import React from 'react';

class OwnerDashEntrySent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
 
    }
  }
/*
//move login button to head bar/and dashboard
-ajax request sets state of active;
-ajax request that set state of sent;
-
*/

  render() {
    return (
		  <div className='onwer-dash-entry'>
		    <div className='container'>
		      <h2>Accepted Request</h2>
		      <div className="row">
		        <div className ="col-md-4 col-md-offset-3">
		        </div>
		        <div className ="col-md-3 col-md-offset-3">
		        </div>
		        <div className='col-md-3 col-md-offset-3'>
		        </div>
		        <div className ='col-md-2 col-md-offset-3'>
		          <button>accepted</button>
		        </div>
		{/* ------------------------------------------------------------------------------ */}
		      </div>
		        <h2>Sent Request</h2>
		        <div className="row">
		          <div className ="col-md-4 col-md-offset-3">
		            <h5>andrew</h5>
		          </div>
		          <div className ="col-md-3 col-md-offset-3">
		            <h5>5/5</h5>
		          </div>
		          <div className='col-md-3 col-md-offset-3'>
		            <h5>$30</h5>
		          </div>
		          <div className ='col-md-2 col-md-offset-3'>
		            <button>cancle</button>
		          </div>
		      </div>
		    </div>
		  </div>
      )
  }
}
export default OwnerDashEntrySent