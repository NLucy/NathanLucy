import React from 'react';
import $ from 'jquery';

class Writing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="portholeBox">
        <div id="right">
          <div className="porthole" onClick={this.props.showPanel} id="#writingPanel">
            <div id="writingImg">Writing</div>
          </div>
        </div>
        <div id="left">
          <div className="panel" id="writingPanel">Hello There</div>
        </div>
      </div>
    )
  }

}


export default Writing;