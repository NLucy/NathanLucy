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
        <div className="porthole" onClick={this.props.showPanel} id="frontEndPort">
          <div id="frontEndImg">FrontEnd</div>
        </div>
        <div className="panel" id="frontEndPanel">Hello there</div>
      </div>
    )
  }

}

export default FrontEnd;