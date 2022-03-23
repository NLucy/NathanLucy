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
        <div className="porthole" onClick={this.props.showPanel} id="writingPort">
          <div id="writingImg">Writing</div>
        </div>
        <div className="panel" id="writingPanel">Hello There</div>
      </div>
    )
  }

}


export default Writing;