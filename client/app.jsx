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
  }

  showPanel(e) {

    var target = $(`${e.target.id}`);

    if (!target.hasClass('active')) {

      target.css({ 'display': 'inline-block' });
      target.animate({
        left: 200
      }, 500);
      target.addClass('active');
    } else {
      target.removeAttr('style');
      target.removeClass('active');
    }

  }

  render() {
    return (
      <div>
        <div id="title">nathanLucy</div>
        <Hello />
        <LookDown />
        <div id="projects">
          <Applications showPanel={this.showPanel} />
        </div>
      </div>
    )
  }

}

export default App;