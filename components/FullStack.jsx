import React from 'react';
import BlueOcean from './fullstack/BlueOcean.jsx';
import $ from 'jquery';

class FullStack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="portholeBox" id="portholeBoxFullStack">
        <div className="closeBox" onClick={this.props.closePanel} id="closeFullStack">x</div>
        <div className="porthole fullStackPort" onClick={this.props.showPanel} id="fullStackPort">
          <div id="fullStackImg" className="portHoleTitle">FullStack</div>
        </div>
        <div className="panel" id="fullStackPanel">
          <BlueOcean />
        </div>
      </div>
    )
  }

}

export default FullStack;