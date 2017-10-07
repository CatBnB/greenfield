import React from 'react';
import {get, post, validateInput} from '../ajaxHelper.js';
import OwnerDashEntrySent from './OwnerDashEntrySent.jsx'

class OwnerDashView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      status: {
        sentShow: false,
        acceptedShow: false,
        readyShow: false,
        finishedShow: false,
        rejectedShow: false,
        cancledShow: false
      },
      qty: {
        sent: 0,
        accepted: 0,
        ready: 0,
        finished: 0,
        rejected: 0,
        cancled: 0,
      }
    }
    this.sync = this.sync.bind(this);
  }
  
  componentWillMount() {
    console.log('ownerDashView');
    console.log('/owner/dashboard/' + this.props.owner.id)
    get('/owner/dashboard/' + this.props.owner.id)
    .then(data => {
      this.setState({
        data: data,
      })
    })
    .then( ()=>{
      this.sync();
    });  
  }

  sync() {
    var qty = {
        sent: 0,
        accepted: 0,
        ready: 0,
        finished: 0,
        rejected: 0,
        cancled: 0,
      };
    this.state.data.forEach(ele => qty[ele.status]++)
    this.setState({ qty: qty })
  }

  click(item) {
    var status = Object.keys(this.state.status).reduce((a,e) => {
      a[e] = this.state.status[e]
      return a;
    },{})
    if(status[item]) {
      status[item] = false;
    } else {
      status[item] = true
    }
    this.setState({
      status: status
    })
  }


  // cancleRequest(){
  //  var sentItem = this.state.sent.slice();
  // }
  
  render() {
    return (
      <div >
        <h1> Dashboard: </h1>
        <hr></hr>
        <div className='Owner-dash-view'>
          <div className='row' onClick={this.click.bind(this,'sentShow')}>
            <div className='col-lg-8'>
              <h2>Sent Request</h2>
            </div>
            <div className='col-lg-4'>
              <h3>You have {this.state.qty.sent} tasks</h3>
            </div>
          </div>
          { 
            this.state.status.sentShow ?
                this.state.data.filter(ele => ele.status === 'sent').map((ele, index) => {
                  return (
                    <div className='Owner-dash-view-data' key={index}>
                      <OwnerDashEntrySent task={this.state.data} />
                    </div>
                  )  
                })
              :
              <div></div>
          }
          <hr></hr>
          <div className='row' onClick={this.click.bind(this,'acceptedShow')}>
            <div className='col-lg-8'>
              <h2>Accepted Request</h2>
            </div>
            <div className='col-lg-4'>
              <h3>You have {this.state.qty.accepted} tasks</h3>
            </div>
          </div>
          { 
            this.state.status.acceptedShow ?
            this.state.data.map((ele, index) => {
              return (
                <div key={index}>
                  sent data
                </div>
              )
            })
            :
            <div></div>
          }
          <hr></hr>
          <div className='row' onClick={this.click.bind(this,'readyShow')}>
            <div className='col-lg-8'>
              <h2>Ready to Leave Review</h2>
            </div>
            <div className='col-lg-4'>
              <h3>You have {this.state.qty.ready} tasks</h3>
            </div>
          </div>
          { 
            this.state.status.readyShow ?
            this.state.data.map((ele, index) => {
              return (
                <div key={index}>
                  sent data
                </div>
              )
            })
            :
            <div></div>
          }        
          <hr></hr>
          <div className='row' onClick={this.click.bind(this,'finishedShow')}>
            <div className='col-lg-8'>
              <h2>Finishied Request</h2>
            </div>
            <div className='col-lg-4'>
              <h3>You have {this.state.qty.finished} tasks</h3>
            </div>
          </div>
          { 
            this.state.status.finishedShow ?
            this.state.data.map((ele, index) => {
              return (
                <div key={index}>
                  sent data
                </div>
              )
            })
            :
            <div></div>
          }  
          <hr></hr>
          <div className='row' onClick={this.click.bind(this,'rejectedShow')}>
            <div className='col-lg-8'>
              <h2>Rejected Request</h2>
            </div>
            <div className='col-lg-4'>
             <h3>You have {this.state.qty.rejected} tasks</h3>
            </div>
          </div>
          { 
            this.state.status.rejectedShow ?
            this.state.data.map((ele, index) => {
              return (
                <div key={index}>
                  sent data
                </div>
              )
            })
            :
            <div></div>
          } 
          <hr></hr>
          <div className='row' onClick={this.click.bind(this,'cancleShow')}>
            <div className='col-lg-8'>
              <h2>Cancled Request</h2>
            </div>
            <div className='col-lg-4'>
              <h3>You have {this.state.qty.cancled} tasks</h3>
            </div>
          </div>
          { 
            this.state.status.cancleShow ?
            this.state.data.map((ele, index) => {
              return (
                <div key={index}>
                  sent data
                </div>
              )
            })
            :
            <div></div>
          } 
        </div>         
      </div>
    )
  }
}
export default OwnerDashView