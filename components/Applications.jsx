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
      <div>
        <FullStack showPanel={this.props.showPanel}/>
        <Writing showPanel={this.props.showPanel}/>
        <FrontEnd showPanel={this.props.showPanel}/>
        <BackEnd showPanel={this.props.showPanel}/>
      </div>
    )
  }

}

export default Applications;