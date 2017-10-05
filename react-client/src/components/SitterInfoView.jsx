import React from 'react';
import SendRequest from './SendRequestView.jsx';

class SittersInfo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeView();
  }

  render() {
    return (
      <div>
        <div className="sitter-info">
          <div className="container">
            <div className="row">
              <div onClick={this.handleClick} className="col-lg-12">
                <h3>Sitter Infomation</h3>
                <div>ZIP Code: {this.props.data.zipcode}</div>
                <div>description: {this.props.data.description}</div>
                <div>Review</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
          </div>
          <div className="col-lg-4">
            <SendRequest />
          </div>
        </div>
      </div>
    );
  }
};

export default SittersInfo;
