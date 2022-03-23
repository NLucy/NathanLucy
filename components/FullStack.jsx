import React from 'react';
import $ from 'jquery';

class FullStack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="portholeBox">
        <div id="right">
          <div className="porthole" onClick={this.props.showPanel} id="#fullStackPanel">
            <div id="fullStackImg">FullStack</div>
          </div>
        </div>
        <div id="left">
          <div className="panel" id="fullStackPanel">Hello there</div>
        </div>
      </div>
    )
  }

}

export default FullStack;