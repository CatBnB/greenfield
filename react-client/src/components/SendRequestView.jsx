import React from 'react';
import {post}from '../ajaxHelper.js';
// import DatePicker from 'DatePicker'

class SendRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate:null,
      ownerText:null
    };
    this.sendRequest = this.sendRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  sendRequest() {
    //check if login
      //if not alert('you need to log in first')
      //check if complete profile
        //if not alert('Please complete your profile')
        //if yes
        console.log(this.props.user);
    let data = {
      id: this.props.user.id,
      'sitter_id': this.props.data.id,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      message: this.state.ownerText
    }
    post('/owner/sendtask', JSON.stringify(data));
  }

  handleChange(event) {
    var obj ={}
    obj[event.target.id]= event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap" >Contact sitter</button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">You are sending a reservation request to</h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row sitter-info-name">
                  <h4 className="col-lg-9">
                    Name: {this.props.data.name}
                  </h4>
                  <h5 className="col-lg-3">
                    Rate: ${this.props.data.price}/{this.props.data.unit}
                  </h5>
                </div>
                <div className="row sitter-request-data">
                  <div className="col-lg-5">
                    <div>
                      Date:
                    </div>
                    <small>(requertment)</small>
                  </div>
                  <div className="col-lg-2">
                    <div className='sitter-request-data-inline'>
                      StartDate:
                    </div>
                    <div className='sitter-request-data-inline'>
                      EndDate:
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className='sitter-request-data-inline'>
                      <input type='date' id='startDate' onChange={this.handleChange}></input>
                    </div>
                    <div className='sitter-request-data-inline'>
                      <input type='date' id='endDate' onChange={this.handleChange}></input>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="div-group">
                    <label htmlFor="message-text" className="div-control-label">Request Detail Message:</label>
                    <textarea className="div-control" id="ownerText" onChange={this.handleChange}></textarea>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.sendRequest}>Send Quest</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default SendRequest;
