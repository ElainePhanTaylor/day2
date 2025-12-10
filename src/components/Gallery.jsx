import { useRef, useEffect } from 'react';
import templates from '../templates';

function Gallery({ onSelectTemplate }) {
  return (
    <div className="gallery">
      <header className="gallery-header">
        <h1 className="gallery-title">✨ Insta Post Generator</h1>
        <p className="gallery-subtitle">Pick a template to start creating</p>
      </header>
      
      <div className="template-grid">
        {templates.map(template => (
          <TemplateCard 
            key={template.id} 
            template={template} 
            onClick={() => onSelectTemplate(template)}
          />
        ))}
      </div>
    </div>
  );
}

function TemplateCard({ template, onClick }) {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Render preview at smaller size for performance
    canvas.width = 400;
    canvas.height = 400;
    
    // Scale down the render
    ctx.scale(400 / 1080, 400 / 1080);
    
    // Load fonts then render
    loadFonts().then(() => {
      template.render(ctx, template.name, template.palettes[0]);
    });
  }, [template]);
  
  return (
    <button className="template-card" onClick={onClick}>
      <canvas ref={canvasRef} className="template-preview" />
      <span className="template-name">{template.name}</span>
    </button>
  );
}

// Font loader helper
async function loadFonts() {
  const fonts = [
    { family: 'Space Grotesk', weights: ['700'] },
    { family: 'Inter', weights: ['400', '600'] },
    { family: 'Playfair Display', weights: ['400', '700'] }
  ];
  
  const fontPromises = fonts.flatMap(font => 
    font.weights.map(weight => 
      document.fonts.load(`${weight} 48px "${font.family}"`)
    )
  );
  
  await Promise.all(fontPromises);
}

export default Gallery;

