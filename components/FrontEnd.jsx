import React from 'react';
import $ from 'jquery';

class FrontEnd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="portholeBox">
        <div id="right">
          <div className="porthole" onClick={this.props.showPanel} id="#frontEndPanel">
            <div id="frontEndImg">FrontEnd</div>
          </div>
        </div>
        <div id="left">
          <div className="panel" id="frontEndPanel">Hello there</div>
        </div>
      </div>
    )
  }

}

export default FrontEnd;