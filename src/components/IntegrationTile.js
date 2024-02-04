import React from 'react';
import './IntegrationTile.css';

function IntegrationTile({ name, description }) {
  return (
    <div className="IntegrationTile">
      <div className="Integration-name">{name}</div>
      <div className="Integration-description">{description}</div>
      <button className="Connect-button">Connect</button>
    </div>
  );
}

export default IntegrationTile;