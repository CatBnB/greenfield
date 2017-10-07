import React from 'react';
import post from '../ajaxHelper.js';
// import DatePicker from 'DatePicker'

class SendRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    console.log(this.props.user);
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Contact sitter</button>
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
                    Name:   Kevin Yeh
                  </h4>
                  <h5 className="col-lg-3">
                    Rate: $50/hour
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
                      <input type='date' id='date'></input>
                    </div>
                    <div className='sitter-request-data-inline'>
                      <input type='date' id='date'></input>
                    </div>
                  </div>
                </div>
                <form>
                  <div className="form-group">
                    <label htmlFor="message-text" className="form-control-label">Request Detail Message:</label>
                    <textarea className="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Send Quest</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default SendRequest;
