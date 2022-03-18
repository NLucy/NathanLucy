import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../components/Hello.jsx';
import LookDown from '../components/LookDown.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div id="title">nathanLucy</div>
        <Hello />
        <LookDown />
      </div>


    )
  }

}

export default App;