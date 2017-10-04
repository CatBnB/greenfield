import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SitterEntryView from './SitterEntryView.jsx'
import SitterInfo from './SitterInfo.jsx'

class SittersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSitterClicked: false 
    };
    this.sitterVierClick = this.sitterVierClick.bind(this);
  }

	sitterVierClick () {
		if (this.state.isSitterClicked) {
			this.setState({
				isSitterClicked: false
			})
		} else {
			this.setState({
				isSitterClicked: true
			})
		}
	}
  
	render () {
	  return (
			<div className="container">
				<div className="sitter-view-box">
					{	
						this.state.isSitterClicked ?
						(
							<div onClick={this.sitterVierClick.bind(this,'SITTER INFORMATION')}>
								<SitterInfo />
							</div>
						)
						//This part has to be in a map with a array of the users from the DB
						: (
							<div onClick={this.sitterVierClick.bind(this,'SITTER INFORMATION')}>
								<SitterEntryView />
								<SitterEntryView />
								<SitterEntryView />
								<SitterEntryView />
								<SitterEntryView />
							</div>
						)
					}
				</div>
			</div>
    )
  }

}

export default SittersView;
