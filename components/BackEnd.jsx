import React from 'react';
import $ from 'jquery';
import BackEndProj from './backend/BackEndProj.jsx';

class BackEnd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="portholeBox" id="portholeBoxBackEnd">
        <div className="closeBox" onClick={this.props.closePanel} id="closeBackEnd">x</div>
        <div className="porthole" onClick={this.props.showPanel} id="backEndPort">
          <div id="backEndImg" className="portHoleTitle">BackEnd</div>
        </div>
        <div className="panel" id="backEndPanel">
        <BackEndProj />
        </div>
      </div>
    )
  }

}

export default BackEnd;