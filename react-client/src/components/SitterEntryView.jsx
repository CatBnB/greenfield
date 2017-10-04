import React from 'react';
import ReactDOM from 'react-dom';

const SitterEntryView = (props) => (
  <div className="sitter-view-inbox media">
    <div className="media-left media-middle">
      <img className="img-thumbnail" height="120" width="160" src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" />
    </div>
    <div className="media-body">
      <div className="sitter-view-title"> Name</div>
      <div className="sitter-view-detail"> Zip Code</div>
      <div> Starts:</div>
    </div>
  </div>
)

export default SitterEntryView
;