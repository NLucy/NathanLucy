import React from 'react';

var BackEndProj = (props) => {

  return (
    <div>
      <div className="titleLine">Product Detail - microservice API</div>
      <div className="techLine">Express | MongoDB | K6 | Loader.io | NGINX | AWS</div>
      <br></br>
      <div className="bullets">
        <div className="bulletLine">- Built out server routes and database controllers to handle industrial-scale traffic</div>
        <div className="bulletLine">- Deployed and optimized on AWS (EC2)</div>
        <div className="bulletLine">- Increased throughput from 100 to 2000 RPS with 0% error rate using indexing, memoization and horizontal scaling with a four server round-robin configuration
        </div>
      </div>
      <br></br>
      <a className="linkLine" href="https://github.com/cosmocoder1/cactus-oasis-rev">github</a>
      <br></br>
      <br></br>
    </div>
  )

}

export default BackEndProj;