import React from 'react';
import $ from 'jquery';
import WritingProj from './writing/WritingProj.jsx';

class Writing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="portholeBox" id="portholeBoxWriting">
        <div className="closeBox" onClick={this.props.closePanel} id="closeWriting">x</div>
        <div className="porthole" onClick={this.props.showPanel} id="writingPort">
          <div id="writingImg" className="portHoleTitle">Writing</div>
        </div>
        <div className="panel" id="writingPanel">
          <div className="projectDescription">
            <WritingProj />
          </div>
        </div>
      </div>
    )
  }

}


export default Writing;