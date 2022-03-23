import React from 'react';
import $ from 'jquery';

class BackEnd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div id="portholeBox">
        <div className="porthole" onClick={this.props.showPanel} id="backEndPort">
          <div id="backEndImg">BackEnd</div>
        </div>
        <div className="panel" id="backEndPanel">Hello There</div>
      </div>
    )
  }

}


export default BackEnd;