import React from 'react';

const MarketMaven = (props) => {
  return (
    <div className="portholeBox" id="portholeBoxBackEnd">
      <div className="closeBox" onClick={props.closePanel} id="closeBackEnd">x</div>
      <div className="porthole" onClick={props.showPanel} id="backEndPort">
        <div id="backEndImg" className="portHoleTitle">MarketMaven</div>
      </div>
      <div className="panel" id="backEndPanel">
        <div className="projectDescription">
          <div className="titleLine">MarketMaven: Intelligent Quantitative Finance System</div>
          <div className="techLine">Python | Pandas | PostgreSQL | pgvector | ChromaDB | Django</div>
          <br />
          <div className="bullets">
            <div className="bulletLine">- Designed ensemble model architecture for price action data analysis</div>
            <div className="bulletLine">- Built vectorized fingerprinting system for identifying high-confidence breakout setups</div>
            <div className="bulletLine">- Developed system to quantify false positives and mathematically score breakout probability</div>
          </div>
          <br />
          <a href="https://github.com/cosmocoder1/MarketMaven" target="_blank">GitHub</a>
          <br /><br />
        </div>
      </div>
    </div>
  );
};

export default MarketMaven;
