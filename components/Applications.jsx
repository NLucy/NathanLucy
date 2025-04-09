import React from 'react';
import BackEnd from './BackEnd.jsx';
import FrontEnd from './FrontEnd.jsx';
import FullStack from './FullStack.jsx';
import MarketMaven from './MarketMaven.jsx';
import AdBrain from './AdBrain.jsx';
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
        <AdBrain showPanel={this.props.showPanel} closePanel={this.props.closePanel}/>
        <MarketMaven showPanel={this.props.showPanel} closePanel={this.props.closePanel}/>
        <Writing showPanel={this.props.showPanel} closePanel={this.props.closePanel}/>
      </div>
    )
  }

}

export default Applications;