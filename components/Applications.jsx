import React from 'react';
import BackEnd from './BackEnd.jsx';
import FrontEnd from './FrontEnd.jsx';
import FullStack from './FullStack.jsx';
import Writing from './Writing.jsx';


class Applications extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <FullStack />
        <Writing />
        <FrontEnd />
        <BackEnd />
      </div>
    )
  }

}

export default Applications;