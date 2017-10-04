import React from 'react';

class SittersInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            SitterInfo
            <div>{this.props.data.zipcode}</div>
            <div>{this.props.data.description}</div>
            <div className='modal' id='loginModal' tabIndex='-1'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <button className="lose" data-dismiss='modal'>&times;</button>
                    <h4 className='modal-title'>Totle</h4>
                    <div className='modal-body'>
                      body
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SittersInfo;
