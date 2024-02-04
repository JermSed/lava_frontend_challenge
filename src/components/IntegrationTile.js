import React from 'react';
import './IntegrationTile.css';
function IntegrationTile({ name, description, image  }) {
  return (
    <div className="IntegrationTile">
        <img src = {image}/>
      <div className="Integration-name">{name}</div>
      <div className="Integration-description">{description}</div>
      <button className="Connect-button">Connect</button>
    </div>
  );
}

export default IntegrationTile;