import React from 'react';
import './CloudsBackground.css';

const CloudsBackground = () => (
  <div className="clouds-background" aria-hidden="true">
    <img src="/cloud1.png" className="cloud cloud1" alt="cloud" />
    <img src="/cloud2.png" className="cloud cloud2" alt="cloud" />
    <img src="/cloud3.png" className="cloud cloud3" alt="cloud" />
  </div>
);

export default CloudsBackground; 