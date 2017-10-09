import React from 'react';
import {get, post, validateInput} from '../ajaxHelper.js';
import OwnerDashEntryOngoing from './OwnerDashEntryOngoing.jsx'
import OwnerDashEntryFinished from './OwnerDashEntryFinished.jsx'

class OwnerDashView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      status: {
        onGoing: false,
        finished: false,
      },
      qty: {
        sent: 0,
        confirmed: 0,
        ready: 0,
        finished: 0,
        rejected: 0,
        cancelled: 0,
      }
    }
    this.sync = this.sync.bind(this);
  }

  componentWillMount() {
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
        confirmed: 0,
        paid: 0,
        ready: 0,
        finished: 0,
        rejected: 0,
        cancelled: 0,
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
          <div className='row' onClick={this.click.bind(this,'onGoing')}>
            <div className='col-lg-8'>
              <h2>On-Going Tasks</h2>
            </div>
            <div className='col-lg-4'>
              <h3>You have {this.state.qty.sent + this.state.qty.confirmed + this.state.qty.ready + this.state.qty.paid} tasks</h3>
            </div>
          </div>
          {
            this.state.status.onGoing ?
                this.state.data.filter(ele => ele.status === 'sent' || ele.status === 'confirmed' || ele.status === 'paid' ||ele.status === 'ready' ).map((ele, index) => {
                  return (
                    <div className='Owner-dash-view-data' key={index}>
                      <OwnerDashEntryOngoing task={ele} keys={index}/>
                    </div>
                  )
                })
              :
              <div></div>
          }
          <hr></hr>
          <div className='row' onClick={this.click.bind(this,'finished')}>
            <div className='col-lg-8'>
              <h2>Finished Tasks</h2>
            </div>
            <div className='col-lg-4'>
              <h3>You have {this.state.qty.cancelled + this.state.qty.finished } tasks</h3>
            </div>
          </div>
          {
            this.state.status.finished ?
                this.state.data.filter(ele => ele.status === 'cancled' || ele.status === 'finished' ).map((ele, index) => {
                  return (
                    <div className='Owner-dash-view-data' key={index}>
                      {<OwnerDashEntryFinished task={ele} keys={index} />}
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
