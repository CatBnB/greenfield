import React from 'react';
import SitterEntry from './SitterEntryView.jsx'
import SitterInfo from './SitterInfoView.jsx'

const SitterList = (props) => (
  <div className="container">
    <div className="sitter-view-box">
      { props.sitterClicked ?
        (<div>
          <SitterInfo changeView={props.changeView} data={props.sitters[props.selected]}/>
         </div>)
      : (<div>
          {props.sitters.map((sitter, index) =>
            <SitterEntry key={index} index={index} sitter={sitter} toggleView={props.toggleView} />)}
        </div>) }
    </div>
  </div>
);

export default SitterList;
