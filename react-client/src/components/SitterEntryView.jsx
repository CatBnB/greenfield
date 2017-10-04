import React from 'react';

class SitterEntry extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleView(this.props.index);
  }

  render() {
    return (
      <div onClick={this.handleClick} className="sitter-view-inbox media">
        <div className="media-left media-middle">
          <img className="media-object" height="120" width="160" src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" />
        </div>
        <div className="media-body">
          <div className="sitter-view-title">{this.props.sitter.name}</div>
          <div className="sitter-view-detail">{this.props.sitter.description}</div>
          <div>${this.props.sitter.price}</div>
        </div>
      </div>
    );
  }
}

export default SitterEntry;
