import { LineageExplorer } from '@eqtylab/explorer';
import { loadConfig } from './customConfig';
import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [manifestJson, setManifestJson] = useState(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const config = loadConfig();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonContent = JSON.parse(e.target?.result as string);
        setManifestJson(jsonContent);
      } catch (error) {
        console.error('Error parsing JSON file:', error);
        alert('Error parsing JSON file. Please ensure it\'s valid JSON.');
      }
    };
    reader.readAsText(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="App">
      <header className="header-bar">
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
        <button className="upload-button" onClick={handleUploadClick}>
          Upload JSON File
        </button>
      </header>

      <div className="explorer-container">
        <LineageExplorer
          manifestJson={manifestJson}
          config={config}
        />
      </div>
    </div>
  );
}

export default App;
