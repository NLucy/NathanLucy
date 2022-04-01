import React from 'react';
import StreamFinder from './fullstack/StreamFinder.jsx';
import WordleMate from './fullstack/WordleMate.jsx';
import $ from 'jquery';

class FullStack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="portholeBox" id="portholeBoxFullStack">
        <div className="closeBox" onClick={this.props.closePanel} id="closeFullStack">x</div>
        <div className="porthole fullStackPort" onClick={this.props.showPanel} id="fullStackPort">
          <div id="fullStackImg" className="portHoleTitle">Full Stack</div>
        </div>
        <div className="panel" id="fullStackPanel">
          <div className="projectDescription">
          <StreamFinder />
          <WordleMate />
          </div>
        </div>
      </div>
    )
  }

}

export default FullStack;