import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../components/Hello.jsx';
import LookDown from '../components/LookDown.jsx';
import Applications from '../components/Applications.jsx';
import Writing from '../components/Writing.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.showPanel = this.showPanel.bind(this);
    this.closePanel = this.closePanel.bind(this);
  }

  showPanel(e) {

    var target = $(`#${e.target.nextSibling.id}`);
    var porthole = $(`#${e.target.id}`);
    var closeBox = $(`#${e.target.previousElementSibling.id}`)

    if (!target.hasClass('active')) {
      target.css({ 'display': 'inline-block' });
      target.animate({
        left: 200
      }, 500);
      target.addClass('active');
      porthole.css({ 'visibility' : 'hidden' });
      closeBox.css({ 'display' : 'inline-block' });
      // porthole.removeClass('fullStackPort');
      // porthole.addClass('noPort');
    } else {
      target.removeAttr('style');
      target.removeClass('active');
      porthole.removeClass('fullStackHalfPort');
      porthole.addClass('fullStackPort');
    }

  }

  closePanel(e) {

    var panel = $(`#${e.target.id}`).nextAll().eq(1);
    var porthole = $(`#${e.target.nextSibling.id}`);
    var target = $(`#${e.target.id}`);

    var target = $(`#${e.target.id}`);

    porthole.css({ "visibility" : "visible" });
    panel.css({ "display" : "none" });
    target.css({ "display" : "none" });

  }

  render() {
    return (
      <div>
        <div id="title">nathanLucy</div>
        <Hello />
        <LookDown />
        <div id="projects">
          <Applications showPanel={this.showPanel} closePanel={this.closePanel}/>
        </div>
      </div>
    )
  }

}

export default App;