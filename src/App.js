// App.js
import React from 'react';
import IntegrationTile from './components/IntegrationTile';
import './App.css';
import images from './components/images';

function App() {
  const integrations = [
    { name: 'Figma', description: 'Stay up to date with your team’s latest designs.', image:'figma.png' },
    { name: 'Google Drive', description: 'Access all of your documents and information.', image:'google_drive.png' },
    { name: 'Slack', description: 'Communicate seamlessly with your teammates.', image:'slack.png' },
    { name: 'Notion', description:'Sync all of your notes, team docs, and other important information.', image:'notion.png'},
    { name: 'Miro', description: 'Unlock the power of collaboration to distill insights from data.',image:'miro.png'},
    { name: 'Airtable', description: 'Keep your data organized in a spreadsheet-database format.',image:'airtable.png'},
    { name: 'Confluence', description: 'Create content, collaborate on work, and organize and share information.', image:'confluence.png'},
    { name: 'Dovetail', description: 'Organize and tag your research in a collaborative platform.', image:'dovetail.png'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hive</h1>
      </header>
      <div className="Integration-grid">
          <h1>Connect your tools</h1>
        {integrations.map((integration, index) => (
          <IntegrationTile key={index} name={integration.name} description={integration.description} image = {integration.image} />
        ))}
      </div>
      <div className="Actions">
        <button className="Back-button">Back</button>
        <button className="Finish-button">Finish</button>
      </div>
    </div>
  );
}

export default App;