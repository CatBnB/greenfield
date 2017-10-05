import React from 'react';
import SitterEntry from './SitterEntryView.jsx'
import SitterInfo from './SitterInfoView.jsx'

class SitterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sitterClicked: false,
      selected: null
    };
    this.changeView = this.changeView.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView(index) {
    this.setState({selected: index}, () => {
      this.setState({sitterClicked: !this.state.sitterClicked});
    })
  }

  changeView() {
    this.setState({sitterClicked: !this.state.sitterClicked});
  }

	render () {
	  return (
			<div className="container sitter-view-box ">
				{
					this.state.sitterClicked ?
					(
						<div>
							<SitterInfo changeView={this.changeView} data={this.props.sitters[this.state.selected]}/>
						</div>
					)
					: (
						<div>
              {this.props.sitters.map((sitter, index) =>
                <SitterEntry key={index} index={index} sitter={sitter} toggleView={this.toggleView} />)}
						</div>
					)
				}
			</div>
    )
  }
}

export default SitterList;
