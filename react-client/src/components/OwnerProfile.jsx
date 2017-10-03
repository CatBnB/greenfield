import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class OwnerProfile extends React.Component {
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
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User Name</label>
          <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1">How many cats you have:</label>
          <select className="form-control" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect2">Psesonality:</label>
          <select className="form-control" id="exampleSelect2">
            <option>Grumpy</option>
            <option>Quiet</option>
            <option>Social</option>
            <option>Shy</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea">Other:</label>
          <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">File input</label>
          <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"></input>
          <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It is a bit lighter and easily wraps to a new line.</small>
        </div>
        <fieldset className="form-group">
          <legend>Radio buttons</legend>
          <div className="form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked></input>
              Option one is this and that&mdash;be sure to include why it is great
            </label>
          </div>
          <div className="form-check">
          <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"></input>
              Option two can be something else and selecting it will deselect option one
            </label>
          </div>
          <div className="form-check disabled">
          <label className="form-check-label">
          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled></input>
              Option three is disabled
            </label>
          </div>
        </fieldset>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input"></input>
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default OwnerProfile