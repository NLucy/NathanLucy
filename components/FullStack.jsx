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
          <div className="porthole" onClick={this.props.showPanel} id="fullStackPort">
            <div id="fullStackImg">FullStack</div>
          </div>
          <div className="panel" id="fullStackPanel">Hello there</div>
      </div>
    )
  }

}

export default FullStack;