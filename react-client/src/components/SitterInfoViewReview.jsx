import React from 'react';

class SitterInfoViewReview extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleView(this.props.index);
  }

  render() {
    return (
      <div onClick={this.handleClick} className="sitter-info-review-inbox media">
        <div className="media-left media-middle">
          <img className="media-object" height="60" width="80" src="https://lh4.googleusercontent.com/-Snwwp-iG2pQ/AAAAAAAAAAI/AAAAAAAAAL4/yHxi0x1UT38/photo.jpg" alt="" />
        </div>
        <div className="media-body">
          <div className="sitter-view-title">Kevin Yeh</div>
          <div className="sitter-view-detail">{this.props.data.review}</div>
          <div>Rates: {this.props.data.rating}/10</div>
        </div>
      </div>
    );
  }
}

export default SitterInfoViewReview;
