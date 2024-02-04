import React from 'react';
import './IntegrationTile.css';
import ToggleButton from './ToggleButton';
function IntegrationTile({ name, description, image  }) {
  return (
    <div className="IntegrationTile">
        <div>
        <img src = {image} className="Integration-image"/>
        <ToggleButton className="Connect-button">connect</ToggleButton>
        </div>
        

      <div className="Integration-name">{name}</div>
      <div className="Integration-description">{description}</div>
    </div>
  );
}

export default IntegrationTile;