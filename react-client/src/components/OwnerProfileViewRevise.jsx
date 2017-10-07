import React from 'react';
import {post, validateInput} from '../ajaxHelper.js';
import Dropzone from 'react-dropzone'
import $ from 'jquery';

class OwnerProfileRevise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      numOfCats: null,
      food: null,
      medical: null,
      personality: null,
      other: null,
      address: null,
      zipcode: null,
      phone: null,
      email: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    console.log('revise clicked',this.props.user);
    e.preventDefault();
    post('/ownerprofile/create', JSON.stringify(this.state));
    this.props.returnHomePage('HomePage')
    // validateInput(this.state).then(data => post('/owner', data))
    //                          .catch(err => console.log(err));
  }

  handleChange(e) {
    console.log(e.target.id);
    var update = {};
    update[e.target.id] = e.target.value;
    this.setState(update);
  }

  // uploadFile(files) {
  //   const image = files[0]
  //   console.log('uploadFile: ',image);
  //   $.ajax({
  //     url: '/owner/image',
  //     type: 'POST',
  //     data: JSON.stringify(image),
  //     dataType: 'multipart/form-data',
  //     traditional : true,
  //     success: function(data){
  //       console.log('successed')
  //     },
  //     error: function(err){
  //       console.log('error from owner image upload post request')
  //     }
  //   })
  // }


  render() {
    return (
      <form onChange={this.handleChange}>
        <h2> Owner Profile Revise </h2>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User Name</label>
          <input id="name" type="text" className="form-control" placeholder="User Name"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <small className="form-text text-muted">We will never share your email with anyone else.</small>
          <input id="email" type="text" className="form-control" placeholder="Enter email"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Phone</label>
          <input id="phone" type="text" className="form-control" placeholder="Enter phone number"></input>
        </div>
        <div className='container'>
          <div className="form-group form-inline">
           <div className='row'>
              <div className="col.sm-2">
                <label htmlFor="exampleInputEmail1" >Address:</label>
              </div>
              <div className="col.sm-6">
                <input id="address" type="text" className="form-control" placeholder="Address"></input>
              </div>
              <div className="col.sm-4">
                <input id="zipcode" type="text" className="form-control" placeholder="Zip Code"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1">How many cats you have:</label>
          <select id="numOfCats" className="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea">Feed:</label>
          <textarea id="food" className="form-control" rows="1"></textarea>
        </div>
          <div className="form-group">
          <label htmlFor="exampleTextarea">Medical::</label>
          <textarea id="medical" className="form-control" rows="1"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect2">Psesonality:</label>
          <select id="personality" className="form-control">
            <option>Grumpy</option>
            <option>Quiet</option>
            <option>Social</option>
            <option>Shy</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea">Other:</label>
          <textarea id="other" className="form-control" rows="3"></textarea>
        </div>
        {/* <div className="form-group">
          <label htmlFor="exampleInputFile">Pictures input</label>
          <input type="file" className="form-control-file"></input>
        </div> */}
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input"></input>
            Accept to be a user
          </label>
          {/* <Dropzone onDrop={this.uploadFile.bind(this)}/> */}
        </div>
        <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default OwnerProfileRevise
