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
        <div id="right">
          <div className="porthole" onClick={this.props.showPanel} id="#backEndPanel">
            <div id="backEndImg">BackEnd</div>
          </div>
        </div>
        <div id="left">
          <div className="panel" id="backEndPanel">Hello There</div>
        </div>
      </div>
    )
  }

}


export default BackEnd;