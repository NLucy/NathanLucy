import React from 'react';
import BackEnd from './BackEnd.jsx';
import FrontEnd from './FrontEnd.jsx';
import FullStack from './FullStack.jsx';
import Writing from './Writing.jsx';


class Applications extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div id="applicationsPanel">
        <FullStack showPanel={this.props.showPanel} closePanel={this.props.closePanel}/>
        <Writing showPanel={this.props.showPanel} closePanel={this.props.closePanel}/>
        <FrontEnd showPanel={this.props.showPanel} closePanel={this.props.closePanel}/>
        <BackEnd showPanel={this.props.showPanel} closePanel={this.props.closePanel}/>
      </div>
    )
  }

}

export default Applications;