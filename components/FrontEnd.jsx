import React from 'react';
import $ from 'jquery';
import FrontEndProj from './frontend/FrontEndProj.jsx';

class FrontEnd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="portholeBox" id="portholeBoxFrontEnd">
        <div className="closeBox" onClick={this.props.closePanel} id="closeFrontEnd">x</div>
        <div className="porthole" onClick={this.props.showPanel} id="frontEndPort">
          <div id="frontEndImg" className="portHoleTitle">FrontEnd</div>
        </div>
        <div className="panel" id="frontEndPanel">
        <FrontEndProj />
        </div>
      </div>
    )
  }

}

export default FrontEnd;