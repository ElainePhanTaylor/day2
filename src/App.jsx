import { useState } from 'react';
import Gallery from './components/Gallery';
import Editor from './components/Editor';
import './App.css';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  return (
    <div className="app">
      {selectedTemplate ? (
        <Editor 
          template={selectedTemplate} 
          onBack={() => setSelectedTemplate(null)} 
        />
      ) : (
        <Gallery onSelectTemplate={setSelectedTemplate} />
      )}
    </div>
  );
}

export default App;
