import React from 'react';

const AdBrain = (props) => {
  return (
    <div className="portholeBox" id="portholeBoxFullStack">
      <div className="closeBox" onClick={props.closePanel} id="closeFrontEnd">x</div>
      <div className="porthole" onClick={props.showPanel} id="frontEndPort">
        <div id="frontEndImg" className="portHoleTitle">AdBrain</div>
      </div>
      <div className="panel" id="frontEndPanel">
        <div className="projectDescription">
          <div className="titleLine">AdBrain: AI/ML API Microservice</div>
          <div className="techLine">Pytorch | Django | Gunicorn | NGINX | AWS</div>
          <br />
          <div className="bullets">
            <div className="bulletLine">- Implemented automated time series forecasting pipelines and cognitive AI agent architecture</div>
            <div className="bulletLine">- Built scalable endpoints for training, testing, and managing deep learning and decision tree models</div>
            <div className="bulletLine">- Designed flexible neural networks and custom estimators for long-running hyperparameter tuning</div>
            <div className="bulletLine">- Developed Seq2Seq NLP networks for sentence completion and contextual marketing insights</div>
          </div>
          <br />
          <br /><br />
        </div>
      </div>
    </div>
  );
};

export default AdBrain;
