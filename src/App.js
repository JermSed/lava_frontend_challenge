// App.js
import React from 'react';
import IntegrationTile from './components/IntegrationTile';
import * as images from './images'; // Import all images
import './App.css';

function App() {
  const integrations = [
    { name: 'Figma', description: 'Stay up to date with your team’s latest designs.', image: images.figma },
    { name: 'Google Drive', description: 'Access all of your documents and information.', image:images.google_drive },
    { name: 'Slack', description: 'Communicate seamlessly with your teammates.', image:'slack.png' },
    { name: 'Notion', description:'Sync all of your notes, team docs, and other important information.', image: images.notion},
    { name: 'Miro', description: 'Unlock the power of collaboration to distill insights from data.',image:images.miro},
    { name: 'Airtable', description: 'Keep your data organized in a spreadsheet-database format.',image:images.airtable},
    { name: 'Confluence', description: 'Create content, collaborate on work, and organize and share information.', image:images.confluence},
    { name: 'Dovetail', description: 'Organize and tag your research in a collaborative platform.', image:images.dovetail}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>hive</h1>
      </header>
      <div className='App-body'>
        <h1>Connect your tools.</h1>
      </div>
      

      <div className="Integration-grid ">
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